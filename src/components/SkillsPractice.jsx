import { useState, useRef, useEffect } from 'react';
import {
  BookOpen, Headphones, Mic, PenLine, Play, Square, CheckCircle, XCircle,
  RotateCcw, Volume2, AlertCircle, Sparkles
} from 'lucide-react';
import skillsPractice from '../data/skillsPractice';

// ---------- Web Speech API helpers ----------
function speak(text, rate = 0.9) {
  if (!('speechSynthesis' in window)) return null;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = rate;
  utter.pitch = 1;
  // Prefer an English voice if available
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));
  if (enVoice) utter.voice = enVoice;
  window.speechSynthesis.speak(utter);
  return utter;
}

function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function getRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.lang = 'en-US';
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 3;
  return rec;
}

// Compare two strings by word overlap (simple, forgiving)
function similarity(a, b) {
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9\s']/g, '').split(/\s+/).filter(Boolean);
  const aw = norm(a), bw = norm(b);
  if (!aw.length || !bw.length) return 0;
  const setB = new Set(bw);
  const matched = aw.filter(w => setB.has(w)).length;
  return Math.round((matched / Math.max(aw.length, bw.length)) * 100);
}

// ---------- Reading sub-component ----------
function ReadingPanel({ data, colors }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const correctCount = data.questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <div className="space-y-5">
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">Reading Passage</h3>
        <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-wrap">{data.passage}</p>
      </div>

      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Comprehension Questions</h3>
        <div className="space-y-5">
          {data.questions.map((q, i) => (
            <div key={i}>
              <p className="font-medium text-slate-800 mb-2">{i + 1}. {q.q}</p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  let cls = 'border-slate-200 hover:border-slate-300 text-slate-700';
                  if (submitted) {
                    if (oi === q.correct) cls = 'border-green-400 bg-green-50 text-green-700';
                    else if (answers[i] === oi) cls = 'border-red-400 bg-red-50 text-red-700';
                    else cls = 'border-slate-100 text-slate-400';
                  } else if (answers[i] === oi) {
                    cls = `${colors.border} ${colors.light} ${colors.text}`;
                  }
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers(prev => ({ ...prev, [i]: oi }))}
                      className={`w-full text-left p-3 text-sm rounded-lg border-2 transition-all ${cls}`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="mt-5 p-4 bg-slate-50 rounded-lg flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800">Score: {correctCount} / {data.questions.length}</p>
              <p className="text-sm text-slate-500">{correctCount === data.questions.length ? 'Perfect!' : 'Review the passage and try again.'}</p>
            </div>
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < data.questions.length}
            className={`mt-5 w-full py-3 ${colors.bg} disabled:bg-slate-300 text-white font-semibold rounded-lg`}
          >
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
}

// ---------- Listening sub-component ----------
function ListeningPanel({ data, colors }) {
  const [playing, setPlaying] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [supported] = useState(() => 'speechSynthesis' in window);

  useEffect(() => () => stopSpeaking(), []);

  const handlePlay = () => {
    const u = speak(data.audioText, 0.9);
    if (!u) return;
    setPlaying(true);
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
  };

  const handleStop = () => {
    stopSpeaking();
    setPlaying(false);
  };

  const correctCount = data.questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <div className="space-y-5">
      <div className={`${colors.light} border ${colors.border} rounded-xl p-6`}>
        <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4 flex items-center gap-2">
          <Headphones className="w-4 h-4" /> Audio Player
        </h3>

        {!supported && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-sm text-amber-700">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Your browser doesn't support speech synthesis. Please use Chrome, Edge, or Safari.</span>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={playing ? handleStop : handlePlay}
            disabled={!supported}
            className={`flex-1 py-3 ${colors.bg} disabled:bg-slate-300 text-white font-semibold rounded-lg flex items-center justify-center gap-2`}
          >
            {playing ? <><Square className="w-5 h-5" /> Stop</> : <><Play className="w-5 h-5" /> Play Audio</>}
          </button>
          <button
            onClick={() => speak(data.audioText, 0.65)}
            disabled={!supported}
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50 flex items-center gap-2"
            title="Play slower"
          >
            <Volume2 className="w-4 h-4" /> Slow
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-3">Listen as many times as you need. Tap "Slow" for slower speech.</p>
      </div>

      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Comprehension Questions</h3>
        <div className="space-y-5">
          {data.questions.map((q, i) => (
            <div key={i}>
              <p className="font-medium text-slate-800 mb-2">{i + 1}. {q.q}</p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  let cls = 'border-slate-200 hover:border-slate-300 text-slate-700';
                  if (submitted) {
                    if (oi === q.correct) cls = 'border-green-400 bg-green-50 text-green-700';
                    else if (answers[i] === oi) cls = 'border-red-400 bg-red-50 text-red-700';
                    else cls = 'border-slate-100 text-slate-400';
                  } else if (answers[i] === oi) {
                    cls = `${colors.border} ${colors.light} ${colors.text}`;
                  }
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers(prev => ({ ...prev, [i]: oi }))}
                      className={`w-full text-left p-3 text-sm rounded-lg border-2 transition-all ${cls}`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="mt-5 p-4 bg-slate-50 rounded-lg flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800">Score: {correctCount} / {data.questions.length}</p>
              <button
                onClick={() => setRevealed(r => !r)}
                className="text-xs text-indigo-600 hover:underline mt-1"
              >
                {revealed ? 'Hide' : 'Show'} transcript
              </button>
            </div>
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); setRevealed(false); }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < data.questions.length}
            className={`mt-5 w-full py-3 ${colors.bg} disabled:bg-slate-300 text-white font-semibold rounded-lg`}
          >
            Check Answers
          </button>
        )}

        {submitted && revealed && (
          <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Transcript</p>
            <p className="text-sm text-slate-600 leading-relaxed">{data.audioText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Speaking sub-component ----------
function SpeakingPanel({ data, colors }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [score, setScore] = useState(null);
  const [revealedModel, setRevealedModel] = useState({});
  const [error, setError] = useState('');
  const recRef = useRef(null);
  const [supportedRec] = useState(() => !!(window.SpeechRecognition || window.webkitSpeechRecognition));

  useEffect(() => () => { stopSpeaking(); if (recRef.current) try { recRef.current.abort(); } catch {} }, []);

  const startListening = () => {
    setError('');
    setTranscript('');
    setScore(null);
    const rec = getRecognition();
    if (!rec) {
      setError('Speech recognition is not supported in this browser. Try Chrome or Edge.');
      return;
    }
    recRef.current = rec;
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      const s = similarity(text, data.targetPhrase);
      setScore(s);
    };
    rec.onerror = (e) => {
      setError(`Microphone error: ${e.error}. Please allow microphone access.`);
      setListening(false);
    };
    rec.onend = () => setListening(false);
    try {
      rec.start();
      setListening(true);
    } catch (e) {
      setError('Could not start the microphone. Please check permissions.');
    }
  };

  const stopListening = () => {
    if (recRef.current) try { recRef.current.stop(); } catch {}
    setListening(false);
  };

  return (
    <div className="space-y-5">
      {/* Pronunciation practice */}
      <div className={`${colors.light} border ${colors.border} rounded-xl p-6`}>
        <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
          <Mic className="w-4 h-4" /> Pronunciation Challenge
        </h3>
        <p className="text-slate-600 text-sm mb-2">Listen, then repeat this sentence as clearly as you can:</p>
        <p className="text-xl font-semibold text-slate-800 mb-4">&ldquo;{data.targetPhrase}&rdquo;</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => speak(data.targetPhrase, 0.9)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50 flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4" /> Listen
          </button>
          <button
            onClick={() => speak(data.targetPhrase, 0.6)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50 flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4" /> Slow
          </button>
          <button
            onClick={listening ? stopListening : startListening}
            disabled={!supportedRec}
            className={`px-4 py-2 ${listening ? 'bg-red-500' : colors.bg} disabled:bg-slate-300 text-white rounded-lg text-sm flex items-center gap-2`}
          >
            {listening ? <><Square className="w-4 h-4" /> Stop Recording</> : <><Mic className="w-4 h-4" /> Record Yourself</>}
          </button>
        </div>

        {!supportedRec && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-sm text-amber-700">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Speech recognition is not supported in this browser. Practice the sentence aloud anyway, then move on. (Try Chrome or Edge for full features.)</span>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
        )}

        {transcript && (
          <div className="mt-3 p-4 bg-white border border-slate-200 rounded-lg">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">We heard you say:</p>
            <p className="text-slate-700 italic">&ldquo;{transcript}&rdquo;</p>
            {score !== null && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-700">
                  Match score: <span className={score >= 80 ? 'text-green-600' : score >= 50 ? 'text-amber-600' : 'text-red-600'}>{score}%</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {score >= 80 ? 'Excellent pronunciation!' :
                   score >= 50 ? 'Good attempt. Try again — speak clearly and at normal speed.' :
                   'Keep practising. Listen again, then record once more.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Free speaking prompts */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Open Speaking Tasks</h3>
        <p className="text-sm text-slate-500 mb-4">Try answering each prompt aloud. When you're ready, check the model answer.</p>
        <div className="space-y-4">
          {data.prompts.map((p, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="font-medium text-slate-800 mb-2">{i + 1}. {p.prompt}</p>
              <button
                onClick={() => setRevealedModel(prev => ({ ...prev, [i]: !prev[i] }))}
                className="text-xs text-indigo-600 hover:underline mb-2"
              >
                {revealedModel[i] ? 'Hide' : 'Show'} sample answer
              </button>
              {revealedModel[i] && (
                <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600 italic">{p.model}</p>
                  <button
                    onClick={() => speak(p.model, 0.9)}
                    className="mt-2 text-xs text-indigo-600 hover:underline inline-flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" /> Listen to sample
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Writing sub-component ----------
function WritingPanel({ data, colors }) {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const meetsMin = wordCount >= data.minWords;

  return (
    <div className="space-y-5">
      <div className={`${colors.light} border ${colors.border} rounded-xl p-6`}>
        <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
          <PenLine className="w-4 h-4" /> Writing Task
        </h3>
        <p className="text-slate-700 leading-relaxed">{data.prompt}</p>
      </div>

      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your answer here..."
          rows={10}
          className="w-full p-4 border-2 border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-indigo-400 resize-y leading-relaxed"
        />
        <div className="flex items-center justify-between mt-2 text-sm">
          <span className={meetsMin ? 'text-green-600' : 'text-slate-500'}>
            {wordCount} words {meetsMin ? '✓' : `(minimum ${data.minWords})`}
          </span>
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={!meetsMin}
              className={`px-5 py-2 ${colors.bg} disabled:bg-slate-300 text-white rounded-lg font-semibold`}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => { setSubmitted(false); }}
              className="px-5 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {submitted && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" /> Self-Assessment Checklist
            </h4>
            <p className="text-xs text-slate-500 mb-3">Review your writing against each criterion:</p>
            <ul className="space-y-2">
              {data.rubric.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">Model Answer</h4>
            <p className="text-slate-600 leading-relaxed text-[15px] whitespace-pre-wrap italic">{data.modelAnswer}</p>
            <p className="text-xs text-slate-400 mt-3">Compare your structure, vocabulary, and tense usage with the model.</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Main Skills Practice tabbed component ----------
export default function SkillsPractice({ lessonId, colors }) {
  const data = skillsPractice[lessonId];
  const [tab, setTab] = useState('reading');

  if (!data) {
    return (
      <div className="bg-white border border-slate-100 rounded-xl p-8 text-center">
        <p className="text-slate-500 text-sm">Skills practice for this lesson is coming soon.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'reading', label: 'Reading', icon: BookOpen },
    { id: 'listening', label: 'Listening', icon: Headphones },
    { id: 'speaking', label: 'Speaking', icon: Mic },
    { id: 'writing', label: 'Writing', icon: PenLine },
  ];

  return (
    <div>
      {/* Sub-tabs */}
      <div className="bg-white border border-slate-200 rounded-xl p-1 flex gap-1 mb-5 overflow-x-auto">
        {tabs.map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 min-w-fit px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                tab === t.id
                  ? `${colors.bg} text-white shadow-sm`
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {tab === 'reading' && <ReadingPanel data={data.reading} colors={colors} />}
      {tab === 'listening' && <ListeningPanel data={data.listening} colors={colors} />}
      {tab === 'speaking' && <SpeakingPanel data={data.speaking} colors={colors} />}
      {tab === 'writing' && <WritingPanel data={data.writing} colors={colors} />}
    </div>
  );
}
