import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, BarChart3, ArrowRight, RotateCcw, CheckCircle2, Lock, LogOut, Sparkles } from 'lucide-react';
import courseContent, { getLevelColor } from '../data/courseContent';

export default function Dashboard({ progress, resetProgress, signOut, user, isPaid, showPaywall }) {
  const navigate = useNavigate();
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentLevel = progress.level || 'A1';

  const totalLessons = Object.values(courseContent).reduce((acc, lvl) => {
    return acc + lvl.units.reduce((a, u) => a + u.lessons.length, 0);
  }, 0);

  const completedCount = progress.completedLessons.length;
  const assessmentsDone = Object.keys(progress.assessmentScores).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-indigo-200 text-sm font-medium">Welcome back,</p>
              <h1 className="text-3xl font-bold">{progress.studentName || 'Student'}</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to reset all progress?')) {
                    resetProgress();
                    navigate('/');
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Sign out?')) signOut();
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-xs font-medium">Current Level</p>
              <p className="text-2xl font-bold mt-1">{currentLevel}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-xs font-medium">Placement Score</p>
              <p className="text-2xl font-bold mt-1">{progress.placementResult?.percentage || 0}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-xs font-medium">Lessons Done</p>
              <p className="text-2xl font-bold mt-1">{completedCount}/{totalLessons}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-xs font-medium">Assessments</p>
              <p className="text-2xl font-bold mt-1">{assessmentsDone}/6</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Levels */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {!isPaid && (
          <div className="mb-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-xl p-5 sm:p-6 text-white shadow-lg flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Limited launch offer</p>
              <h3 className="text-xl font-bold mb-1">Unlock all 6 levels for $19</h3>
              <p className="text-sm text-white/80">A1 is free. A2 through C2 are part of the full course &mdash; one-time payment, lifetime access.</p>
            </div>
            <button
              onClick={() => showPaywall()}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-slate-50 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Upgrade now
            </button>
          </div>
        )}

        <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Course</h2>

        <div className="space-y-4">
          {levels.map((level) => {
            const data = courseContent[level];
            const colors = getLevelColor(level);
            const isCurrentLevel = level === currentLevel;
            const levelIdx = levels.indexOf(level);
            const currentIdx = levels.indexOf(currentLevel);
            // A1 is always unlocked. A2-C2 require either payment OR appear locked with paywall CTA.
            // We no longer block by placement level alone — paid users see all levels open.
            const requiresPayment = level !== 'A1' && !isPaid;
            const isUnlocked = !requiresPayment && levelIdx <= currentIdx;
            const showAsPaid = !requiresPayment;
            const assessScore = progress.assessmentScores[level];

            const levelLessons = data.units.reduce((acc, u) => [...acc, ...u.lessons], []);
            const completedLevelLessons = levelLessons.filter(l => progress.completedLessons.includes(l.id));
            const levelProgress = levelLessons.length > 0
              ? Math.round((completedLevelLessons.length / levelLessons.length) * 100)
              : 0;

            return (
              <div
                key={level}
                className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
                  isCurrentLevel ? `${colors.border} shadow-md` : isUnlocked ? 'border-slate-100' : 'border-slate-100 opacity-60'
                }`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} text-white flex items-center justify-center font-bold text-lg shrink-0`}>
                        {level}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">{data.title}</h3>
                          {isCurrentLevel && (
                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                              Current
                            </span>
                          )}
                          {assessScore && assessScore >= 70 && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-slate-500 mb-3">{data.description}</p>

                        {/* Progress bar */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${colors.bg} rounded-full transition-all`}
                              style={{ width: `${levelProgress}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-500 whitespace-nowrap">
                            {completedLevelLessons.length}/{levelLessons.length} lessons
                          </span>
                        </div>

                        {assessScore !== undefined && (
                          <p className={`text-xs mt-2 font-medium ${assessScore >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                            Assessment: {assessScore}% {assessScore >= 70 ? '(Passed)' : '(Not passed)'}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      {requiresPayment ? (
                        <button
                          onClick={() => showPaywall(level)}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold rounded-lg hover:opacity-90"
                        >
                          <Lock className="w-4 h-4" />
                          Unlock
                        </button>
                      ) : isUnlocked ? (
                        <>
                          <button
                            onClick={() => navigate(`/level/${level}`)}
                            className={`flex items-center gap-2 px-4 py-2 ${colors.bg} hover:opacity-90 text-white text-sm font-semibold rounded-lg transition-opacity`}
                          >
                            <BookOpen className="w-4 h-4" />
                            Lessons
                          </button>
                          <button
                            onClick={() => navigate(`/assessment/${level}`)}
                            className={`flex items-center gap-2 px-4 py-2 ${colors.light} ${colors.text} text-sm font-semibold rounded-lg hover:opacity-80 transition-opacity`}
                          >
                            <Award className="w-4 h-4" />
                            Test
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-400 text-sm rounded-lg">
                          <Lock className="w-4 h-4" />
                          Locked
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Study Tips
          </h3>
          <ul className="space-y-2 text-sm text-indigo-700">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />
              Complete all lessons in your current level before taking the assessment test.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />
              You need 70% or higher on an assessment to pass the level.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />
              Review lesson exercises as many times as you need — practice makes perfect!
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />
              You can retake assessments to improve your score at any time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
