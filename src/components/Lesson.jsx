import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle, RotateCcw, Award, Layers } from 'lucide-react';
import courseContent, { getLevelColor } from '../data/courseContent';
import SkillsPractice from './SkillsPractice';

function findLesson(lessonId) {
  for (const [level, data] of Object.entries(courseContent)) {
    for (const unit of data.units) {
      for (const lesson of unit.lessons) {
        if (lesson.id === lessonId) {
          return { lesson, unit, level, levelData: data };
        }
      }
    }
  }
  return null;
}

export default function Lesson({ completeLesson, isLessonCompleted }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('learn');
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const [fillBlanks, setFillBlanks] = useState({});

  const found = useMemo(() => findLesson(lessonId), [lessonId]);

  if (!found) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Lesson not found.</p>
      </div>
    );
  }

  const { lesson, unit, level, levelData } = found;
  const colors = getLevelColor(level);
  const exercises = lesson.exercises || [];
  const isCompleted = isLessonCompleted(lessonId);

  const selectExerciseAnswer = (exIdx, optIdx) => {
    if (exerciseSubmitted) return;
    setExerciseAnswers(prev => ({ ...prev, [exIdx]: optIdx }));
  };

  const handleFillBlank = (exIdx, value) => {
    if (exerciseSubmitted) return;
    setFillBlanks(prev => ({ ...prev, [exIdx]: value }));
  };

  const handleSubmitExercises = () => {
    setExerciseSubmitted(true);
    let correct = 0;
    exercises.forEach((ex, idx) => {
      if (ex.type === 'fill-blank') {
        if ((fillBlanks[idx] || '').trim().toLowerCase() === ex.answer.toLowerCase()) {
          correct++;
        }
      } else {
        if (exerciseAnswers[idx] === ex.correct) {
          correct++;
        }
      }
    });
    const score = Math.round((correct / exercises.length) * 100);
    completeLesson(lessonId, score);
  };

  const resetExercises = () => {
    setExerciseAnswers({});
    setFillBlanks({});
    setExerciseSubmitted(false);
  };

  const getExerciseScore = () => {
    let correct = 0;
    exercises.forEach((ex, idx) => {
      if (ex.type === 'fill-blank') {
        if ((fillBlanks[idx] || '').trim().toLowerCase() === ex.answer.toLowerCase()) {
          correct++;
        }
      } else {
        if (exerciseAnswers[idx] === ex.correct) {
          correct++;
        }
      }
    });
    return { correct, total: exercises.length, percentage: Math.round((correct / exercises.length) * 100) };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`${colors.bg} text-white`}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate(`/level/${level}`)}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {level} — {levelData.title}
          </button>
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6" />
            <div>
              <p className="text-white/70 text-sm">{unit.title}</p>
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">{lesson.type}</span>
            {isCompleted && (
              <span className="px-3 py-1 bg-green-400/30 rounded-full text-xs font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Completed
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'learn', label: 'Lesson Content' },
              { id: 'exercises', label: `Exercises (${exercises.length})` },
              { id: 'skills', label: '4 Skills Practice' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  tab === t.id
                    ? `${colors.text} border-current`
                    : 'text-slate-500 border-transparent hover:text-slate-700'
                }`}
              >
                {t.id === 'skills' && <Layers className="w-4 h-4 inline mr-1.5 -mt-0.5" />}
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {tab === 'skills' ? (
          <SkillsPractice lessonId={lessonId} colors={colors} />
        ) : tab === 'learn' ? (
          <div className="space-y-6">
            {/* Main Content */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <div
                className="prose prose-slate max-w-none
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3
                  [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mt-5 [&_h4]:mb-2
                  [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-3
                  [&_ul]:space-y-1 [&_ul]:mb-4 [&_ul]:pl-5
                  [&_ol]:space-y-1 [&_ol]:mb-4 [&_ol]:pl-5
                  [&_li]:text-slate-600 [&_li]:leading-relaxed
                  [&_strong]:text-slate-800
                  [&_em]:text-indigo-600
                  [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4
                  [&_th]:bg-slate-100 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-slate-700 [&_th]:border [&_th]:border-slate-200
                  [&_td]:px-4 [&_td]:py-2 [&_td]:text-sm [&_td]:text-slate-600 [&_td]:border [&_td]:border-slate-200
                  [&_.dialogue]:bg-indigo-50 [&_.dialogue]:rounded-lg [&_.dialogue]:p-4 [&_.dialogue]:my-4 [&_.dialogue]:border [&_.dialogue]:border-indigo-100
                "
                dangerouslySetInnerHTML={{ __html: lesson.content.explanation }}
              />
            </div>

            {/* Examples */}
            {lesson.content.examples && lesson.content.examples.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-500" />
                  Examples
                </h3>
                <div className="space-y-3">
                  {lesson.content.examples.map((ex, idx) => (
                    <div key={idx} className={`rounded-lg p-4 ${colors.light} border ${colors.border}`}>
                      <p className="font-medium text-slate-800 text-lg">&ldquo;{ex.english}&rdquo;</p>
                      <p className="text-sm text-slate-500 mt-1">{ex.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => setTab('exercises')}
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
              >
                Practice Now
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {exerciseSubmitted && (
              <div className={`rounded-xl p-6 text-center ${
                getExerciseScore().percentage >= 75 ? 'bg-green-50 border border-green-200' :
                getExerciseScore().percentage >= 50 ? 'bg-amber-50 border border-amber-200' :
                'bg-red-50 border border-red-200'
              }`}>
                <p className="text-3xl font-bold mb-1">
                  {getExerciseScore().correct}/{getExerciseScore().total}
                </p>
                <p className="text-lg font-semibold mb-1">
                  {getExerciseScore().percentage}%
                </p>
                <p className={`text-sm ${
                  getExerciseScore().percentage >= 75 ? 'text-green-600' :
                  getExerciseScore().percentage >= 50 ? 'text-amber-600' : 'text-red-600'
                }`}>
                  {getExerciseScore().percentage >= 75 ? 'Excellent work!' :
                   getExerciseScore().percentage >= 50 ? 'Good effort! Review the lesson and try again.' :
                   'Keep studying! Review the lesson content carefully.'}
                </p>
                <button
                  onClick={resetExercises}
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </div>
            )}

            {exercises.map((ex, idx) => {
              const isCorrect = ex.type === 'fill-blank'
                ? (fillBlanks[idx] || '').trim().toLowerCase() === ex.answer.toLowerCase()
                : exerciseAnswers[idx] === ex.correct;

              return (
                <div key={idx} className={`bg-white rounded-xl border shadow-sm p-6 ${
                  exerciseSubmitted
                    ? isCorrect ? 'border-green-200' : 'border-red-200'
                    : 'border-slate-100'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <p className="font-medium text-slate-800">
                      <span className="text-slate-400 mr-2">{idx + 1}.</span>
                      {ex.question}
                    </p>
                    {exerciseSubmitted && (
                      isCorrect
                        ? <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        : <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </div>

                  {ex.type === 'fill-blank' ? (
                    <div>
                      <input
                        type="text"
                        value={fillBlanks[idx] || ''}
                        onChange={(e) => handleFillBlank(idx, e.target.value)}
                        disabled={exerciseSubmitted}
                        placeholder="Type your answer..."
                        className={`w-full px-4 py-3 border-2 rounded-xl text-slate-700 focus:outline-none transition-colors ${
                          exerciseSubmitted
                            ? isCorrect
                              ? 'border-green-300 bg-green-50'
                              : 'border-red-300 bg-red-50'
                            : 'border-slate-200 focus:border-indigo-400'
                        }`}
                      />
                      {exerciseSubmitted && !isCorrect && (
                        <p className="text-sm text-green-600 mt-2">
                          Correct answer: <strong>{ex.answer}</strong>
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {ex.options.map((opt, optIdx) => {
                        let btnClass = 'border-slate-100 hover:border-slate-300 text-slate-700';
                        if (exerciseSubmitted) {
                          if (optIdx === ex.correct) {
                            btnClass = 'border-green-400 bg-green-50 text-green-700';
                          } else if (exerciseAnswers[idx] === optIdx && optIdx !== ex.correct) {
                            btnClass = 'border-red-400 bg-red-50 text-red-700';
                          } else {
                            btnClass = 'border-slate-100 text-slate-400';
                          }
                        } else if (exerciseAnswers[idx] === optIdx) {
                          btnClass = 'border-indigo-500 bg-indigo-50 text-indigo-700';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => selectExerciseAnswer(idx, optIdx)}
                            disabled={exerciseSubmitted}
                            className={`w-full text-left p-3 rounded-xl border-2 transition-all text-sm ${btnClass}`}
                          >
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mr-2 ${
                              exerciseSubmitted && optIdx === ex.correct
                                ? 'bg-green-500 text-white'
                                : exerciseAnswers[idx] === optIdx
                                ? 'bg-indigo-500 text-white'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {!exerciseSubmitted && (
              <div className="text-center pt-4">
                <button
                  onClick={handleSubmitExercises}
                  disabled={
                    exercises.some((ex, idx) =>
                      ex.type === 'fill-blank'
                        ? !(fillBlanks[idx] || '').trim()
                        : exerciseAnswers[idx] === undefined
                    )
                  }
                  className={`inline-flex items-center gap-2 px-8 py-3 ${colors.bg} hover:opacity-90 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-all`}
                >
                  <CheckCircle className="w-5 h-5" />
                  Check Answers
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
