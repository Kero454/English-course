import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import placementQuestions from '../data/placementTest';
import { calculateLevel } from '../data/placementTest';

export default function PlacementTest({ completePlacement }) {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const total = placementQuestions.length;
  const question = placementQuestions[currentQ];
  const progress = Math.round(((currentQ + 1) / total) * 100);
  const answeredCount = Object.keys(answers).length;

  const selectAnswer = (optionIndex) => {
    setAnswers(prev => ({ ...prev, [currentQ]: optionIndex }));
  };

  const goNext = () => {
    if (currentQ < total - 1) setCurrentQ(currentQ + 1);
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleSubmit = () => {
    const res = calculateLevel(answers);
    setResult(res);
    setShowResult(true);
    completePlacement(res);
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Test Complete!</h2>
          <p className="text-slate-500 mb-6">Here are your results:</p>

          <div className="bg-indigo-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-indigo-600 font-medium mb-1">Your Level</p>
            <p className="text-5xl font-bold text-indigo-700 mb-2">{result.level}</p>
            <p className="text-slate-600">
              {result.level === 'A1' && 'Beginner'}
              {result.level === 'A2' && 'Elementary'}
              {result.level === 'B1' && 'Intermediate'}
              {result.level === 'B2' && 'Upper Intermediate'}
              {result.level === 'C1' && 'Advanced'}
              {result.level === 'C2' && 'Proficiency'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-slate-800">{result.totalCorrect}/{result.totalQuestions}</p>
              <p className="text-sm text-slate-500">Correct Answers</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-slate-800">{result.percentage}%</p>
              <p className="text-sm text-slate-500">Overall Score</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-slate-600 mb-3">Score Breakdown by Level</p>
            <div className="space-y-2">
              {Object.entries(result.levelBreakdown).map(([level, pct]) => (
                <div key={level} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600 w-8">{level}</span>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${pct >= 60 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-400'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-500 w-10 text-right">{Math.round(pct)}%</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
          >
            Go to Your Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-bold text-slate-800">Placement Test</h1>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>{answeredCount}/{total} answered</span>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-slate-400">
            <span>Question {currentQ + 1} of {total}</span>
            <span>Level: {question.level}</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              question.level.startsWith('A') ? 'bg-emerald-100 text-emerald-700' :
              question.level.startsWith('B') ? 'bg-violet-100 text-violet-700' :
              'bg-rose-100 text-rose-700'
            }`}>
              {question.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              {question.skill}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
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
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={goPrev}
            disabled={currentQ === 0}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {currentQ === total - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={answeredCount < total}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Submit Test ({answeredCount}/{total})
            </button>
          ) : (
            <button
              onClick={goNext}
              className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-slate-400" />
            <p className="text-sm text-slate-500">Click any question number to jump to it</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {placementQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQ(idx)}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
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
    </div>
  );
}
