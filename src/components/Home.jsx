import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Target, TrendingUp, ChevronRight, User, LogOut, Sparkles, Check, Lock } from 'lucide-react';

export default function Home({ progress, setStudentName, signOut, user, isPaid, showPaywall }) {
  const navigate = useNavigate();
  const [name, setName] = useState(progress.studentName || '');

  const handleStart = () => {
    if (name.trim()) {
      setStudentName(name.trim());
      if (progress.placementCompleted) {
        navigate('/dashboard');
      } else {
        navigate('/placement-test');
      }
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Placement Test',
      desc: '60 questions across all CEFR levels to accurately determine your English proficiency.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '6 CEFR Levels',
      desc: 'Comprehensive lessons from A1 (Beginner) to C2 (Proficiency) covering grammar, vocabulary, and writing.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Assessment Tests',
      desc: 'Timed assessments for each level to validate your knowledge and track improvement.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Track Progress',
      desc: 'Monitor your learning journey with detailed scores and completion tracking.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00di0yaDJ2MmgtdnptLTQgMHYtMmgydjJoLTJ6bTQgMHYtMmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center">
          {/* Sign out button */}
          {user && (
            <div className="absolute top-4 right-4">
              <button
                onClick={() => { if (window.confirm('Sign out?')) signOut(); }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          )}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4" />
            Complete English Course with CEFR Standards
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Master English at
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Every Level
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            From absolute beginner to near-native proficiency. Take a placement test,
            follow structured lessons, and track your progress through all 6 CEFR levels.
          </p>

          {/* Name Input & Start */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800">Get Started</p>
                  <p className="text-sm text-slate-500">Enter your name to begin</p>
                </div>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                placeholder="Your name..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-3"
              />
              <button
                onClick={handleStart}
                disabled={!name.trim()}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {progress.placementCompleted ? 'Go to Dashboard' : 'Take Placement Test'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
          Everything You Need to Learn English
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
          A structured, comprehensive course designed to take you from beginner to mastery.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing / Upgrade banner */}
      {!isPaid && (
        <div className="max-w-5xl mx-auto px-4 pb-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
            <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              LAUNCH OFFER — FIRST 100 BUYERS
            </div>
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">One-time payment</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-5xl font-bold">$19</span>
                  <span className="text-2xl text-white/50 line-through">$39</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Lifetime access to all 6 CEFR levels</h2>
                <p className="text-white/80 mb-5">No subscription. No recurring fees. Yours forever.</p>
                <button
                  onClick={() => showPaywall()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-slate-50 shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Unlock the full course
                </button>
                <p className="text-xs text-white/60 mt-3">A1 (Beginner) is free • 30-day money-back guarantee</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  '20 lessons across A1 to C2',
                  '4 skills practice in every lesson',
                  'Reading + Listening + Speaking + Writing',
                  'Pronunciation feedback (microphone)',
                  'Placement test + level assessments',
                  'Cloud sync • install on phone (PWA)',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-5 h-5 text-emerald-300 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Levels Preview */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          CEFR Levels Overview
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { level: 'A1', title: 'Beginner', color: 'emerald', desc: 'Basic greetings, numbers, simple present tense' },
            { level: 'A2', title: 'Elementary', color: 'blue', desc: 'Past tense, comparatives, present continuous' },
            { level: 'B1', title: 'Intermediate', color: 'violet', desc: 'Perfect tenses, conditionals, relative clauses' },
            { level: 'B2', title: 'Upper Intermediate', color: 'amber', desc: 'Advanced tenses, passive voice, reported speech' },
            { level: 'C1', title: 'Advanced', color: 'rose', desc: 'Inversion, idioms, academic writing' },
            { level: 'C2', title: 'Proficiency', color: 'indigo', desc: 'Register, collocations, critical argumentation' },
          ].map(({ level, title, color, desc }) => {
            const locked = level !== 'A1' && !isPaid;
            return (
              <div key={level} className={`relative rounded-xl p-5 border-2 bg-${color}-50 border-${color}-200 ${locked ? 'opacity-90' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-${color}-500 text-white`}>
                    {level}
                  </div>
                  {level === 'A1' && !isPaid && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">FREE</span>
                  )}
                  {locked && <Lock className="w-4 h-4 text-slate-400" />}
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        English Course — Built with structured CEFR methodology
      </footer>
    </div>
  );
}
