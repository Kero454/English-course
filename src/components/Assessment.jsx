import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import assessments from '../data/assessments';
import { getLevelColor } from '../data/courseContent';

export default function Assessment({ completeAssessment, getAssessmentScore }) {
  const { level } = useParams();
  const navigate = useNavigate();
  const colors = getLevelColor(level);
  const assessment = assessments[level];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(assessment ? assessment.timeLimit * 60 : 0);
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const handleAutoSubmit = () => {
    clearInterval(timerRef.current);
    setSubmitted(true);
    const currentAnswers = answersRef.current;
    const qs = assessment.questions;
    let correct = 0;
    qs.forEach((q, idx) => {
      if (currentAnswers[idx] === q.correct) correct++;
    });
    const score = Math.round((correct / qs.length) * 100);
    completeAssessment(level, score);
  };

  useEffect(() => {
    if (started && !submitted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [started, submitted]);

  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Assessment not found for level {level}.</p>
      </div>
    );
  }

  const questions = assessment.questions;
  const total = questions.length;
  const question = questions[currentQ];

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const selectAnswer = (optIdx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentQ]: optIdx }));
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setSubmitted(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) correct++;
    });
    const score = Math.round((correct / total) * 100);
    completeAssessment(level, score);
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) correct++;
    });
    return { correct, total, percentage: Math.round((correct / total) * 100) };
  };

  const resetAssessment = () => {
    setCurrentQ(0);
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(assessment.timeLimit * 60);
    setStarted(false);
  };

  // Start Screen
  if (!started) {
    const prevScore = getAssessmentScore(level);
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
          <div className={`w-20 h-20 rounded-2xl ${colors.bg} text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6`}>
            {level}
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">{assessment.title}</h1>
          <p className="text-slate-500 mb-6">Test your knowledge of the {level} level material.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-xl font-bold text-slate-800">{total}</p>
              <p className="text-xs text-slate-500">Questions</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-xl font-bold text-slate-800">{assessment.timeLimit}m</p>
              <p className="text-xs text-slate-500">Time Limit</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-xl font-bold text-slate-800">{assessment.passingScore}%</p>
              <p className="text-xs text-slate-500">To Pass</p>
            </div>
          </div>

          {prevScore !== null && (
            <p className={`text-sm font-medium mb-4 ${prevScore >= 70 ? 'text-green-600' : 'text-red-500'}`}>
              Previous score: {prevScore}% {prevScore >= 70 ? '(Passed)' : '(Not passed)'}
            </p>
          )}

          <button
            onClick={() => setStarted(true)}
            className={`w-full py-3 ${colors.bg} hover:opacity-90 text-white font-semibold rounded-xl transition-opacity mb-3`}
          >
            Start Assessment
          </button>
          <button
            onClick={() => navigate(`/level/${level}`)}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-xl transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (submitted) {
    const score = getScore();
    const passed = score.percentage >= assessment.passingScore;

    return (
      <div className="min-h-screen bg-slate-50">
        <div className={`${passed ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'} text-white`}>
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              {passed ? <Award className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h1>
            <p className="text-white/80">
              {passed
                ? `You passed the ${level} assessment with ${score.percentage}%!`
                : `You scored ${score.percentage}%. You need ${assessment.passingScore}% to pass.`}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
              <p className="text-3xl font-bold text-slate-800">{score.correct}/{score.total}</p>
              <p className="text-sm text-slate-500">Correct</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
              <p className="text-3xl font-bold text-slate-800">{score.percentage}%</p>
              <p className="text-sm text-slate-500">Score</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
              <p className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-red-500'}`}>
                {passed ? 'PASS' : 'FAIL'}
              </p>
              <p className="text-sm text-slate-500">Result</p>
            </div>
          </div>

          {/* Study Recommendations */}
          {(() => {
            const wrongQuestions = questions.filter((q, idx) => answers[idx] !== q.correct);
            if (wrongQuestions.length === 0) return null;

            const lessonMap = {};
            wrongQuestions.forEach(q => {
              if (!lessonMap[q.lessonId]) {
                lessonMap[q.lessonId] = { lessonTitle: q.lessonTitle, lessonId: q.lessonId, topics: [] };
              }
              if (!lessonMap[q.lessonId].topics.includes(q.topic)) {
                lessonMap[q.lessonId].topics.push(q.topic);
              }
            });
            const recommendations = Object.values(lessonMap);

            return (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-2">📚 Study Recommendations</h2>
                <p className="text-sm text-slate-500 mb-4">
                  Based on your mistakes, we recommend reviewing these lessons:
                </p>
                <div className="space-y-3">
                  {recommendations.map(rec => (
                    <div
                      key={rec.lessonId}
                      className="bg-white rounded-xl border border-amber-200 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-800">{rec.lessonTitle}</h3>
                        <button
                          onClick={() => navigate(`/lesson/${rec.lessonId}`)}
                          className={`px-3 py-1 text-xs font-bold rounded-full ${colors.bg} text-white hover:opacity-90 transition-opacity`}
                        >
                          Go to lesson
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rec.topics.map(topic => (
                          <span key={topic} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-100">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Review Answers */}
          <h2 className="text-xl font-bold text-slate-800 mb-4">Review Answers</h2>
          <div className="space-y-3 mb-8">
            {questions.map((q, idx) => {
              const isCorrect = answers[idx] === q.correct;
              return (
                <div key={idx} className={`bg-white rounded-xl border p-4 ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-slate-800 text-sm">
                      <span className="text-slate-400 mr-2">{idx + 1}.</span>
                      {q.question}
                    </p>
                    {isCorrect
                      ? <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      : <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    }
                  </div>
                  {!isCorrect && (
                    <div className="text-xs space-y-1">
                      <p className="text-red-500">Your answer: {answers[idx] !== undefined ? q.options[answers[idx]] : 'No answer'}</p>
                      <p className="text-green-600">Correct: {q.options[q.correct]}</p>
                      <p className="text-amber-600 mt-1">
                        Topic: <strong>{q.topic}</strong> — from lesson: <em>{q.lessonTitle}</em>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetAssessment}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50"
            >
              <RotateCcw className="w-5 h-5" />
              Retake
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`flex-1 py-3 ${colors.bg} text-white font-semibold rounded-xl hover:opacity-90`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${colors.bg} text-white`}>{level}</span>
              <span className="text-sm text-slate-600 font-medium">Assessment</span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${
              timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' :
              timeLeft < 180 ? 'bg-amber-100 text-amber-600' :
              'bg-slate-100 text-slate-600'
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.bg} rounded-full transition-all duration-300`}
              style={{ width: `${((currentQ + 1) / total) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">Question {currentQ + 1} of {total}</p>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[currentQ] === idx
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-slate-100 hover:border-slate-300 text-slate-700'
                }`}
              >
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-3 ${
                  answers[currentQ] === idx
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="px-4 py-2 text-slate-600 hover:text-slate-800 disabled:opacity-30 transition-colors"
          >
            Previous
          </button>

          {currentQ === total - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Submit ({Object.keys(answers).length}/{total})
            </button>
          ) : (
            <button
              onClick={() => setCurrentQ(Math.min(total - 1, currentQ + 1))}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Next
            </button>
          )}
        </div>

        {/* Question dots */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQ(idx)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                idx === currentQ
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-300'
                  : answers[idx] !== undefined
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
