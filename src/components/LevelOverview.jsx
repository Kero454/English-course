import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle2, PlayCircle, Award } from 'lucide-react';
import courseContent, { getLevelColor } from '../data/courseContent';

export default function LevelOverview({ progress }) {
  const { level } = useParams();
  const navigate = useNavigate();
  const data = courseContent[level];
  const colors = getLevelColor(level);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Level not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`${colors.bg} text-white`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-bold">
              {level}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="text-white/80 mt-1">{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Units & Lessons */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {data.units.map((unit, unitIdx) => (
            <div key={unit.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <div className={`px-6 py-4 ${colors.light} border-b ${colors.border}`}>
                <h2 className={`font-semibold ${colors.text}`}>
                  Unit {unitIdx + 1}: {unit.title}
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {unit.lessons.map((lesson, lessonIdx) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  const score = progress.lessonScores[lesson.id];

                  return (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          isCompleted ? 'bg-green-100' : colors.light
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <span className={`text-sm font-bold ${colors.text}`}>
                              {lessonIdx + 1}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-medium text-slate-800 truncate">{lesson.title}</h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              lesson.type === 'grammar' ? 'bg-blue-100 text-blue-700' :
                              lesson.type === 'vocabulary' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {lesson.type}
                            </span>
                            {score !== undefined && (
                              <span className={`text-xs font-medium ${score >= 75 ? 'text-green-600' : score >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                                Score: {score}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0 ${
                          isCompleted
                            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            : `${colors.bg} text-white hover:opacity-90`
                        }`}
                      >
                        <PlayCircle className="w-4 h-4" />
                        {isCompleted ? 'Review' : 'Start'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Assessment Button */}
        <div className="mt-8 bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
          <Award className={`w-12 h-12 ${colors.text} mx-auto mb-3`} />
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            {level} Level Assessment
          </h3>
          <p className="text-slate-500 text-sm mb-4">
            Test your knowledge of everything in this level. You need 70% to pass.
          </p>
          {progress.assessmentScores[level] !== undefined && (
            <p className={`text-sm font-medium mb-3 ${
              progress.assessmentScores[level] >= 70 ? 'text-green-600' : 'text-red-500'
            }`}>
              Last score: {progress.assessmentScores[level]}%
              {progress.assessmentScores[level] >= 70 ? ' (Passed!)' : ' (Try again)'}
            </p>
          )}
          <button
            onClick={() => navigate(`/assessment/${level}`)}
            className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
          >
            <Award className="w-5 h-5" />
            {progress.assessmentScores[level] !== undefined ? 'Retake Assessment' : 'Take Assessment'}
          </button>
        </div>
      </div>
    </div>
  );
}
