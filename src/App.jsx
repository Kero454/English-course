import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useProgress } from './hooks/useProgress';
import { useEntitlement } from './hooks/useEntitlement';
import Auth from './components/Auth';
import Home from './components/Home';
import PlacementTest from './components/PlacementTest';
import Dashboard from './components/Dashboard';
import LevelOverview from './components/LevelOverview';
import Lesson from './components/Lesson';
import Assessment from './components/Assessment';
import Legal from './components/Legal';
import Footer from './components/Footer';
import Paywall from './components/Paywall';
import { Loader2 } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
      <div className="text-center text-white">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
        <p className="text-lg font-medium">Loading your course...</p>
      </div>
    </div>
  );
}

function ProtectedRoutes() {
  const { user, loading: authLoading, signOut } = useAuth();
  const {
    progress,
    dbLoaded,
    setStudentName,
    completePlacement,
    completeLesson,
    completeAssessment,
    resetProgress,
    isLessonCompleted,
    getAssessmentScore,
  } = useProgress(user?.id);
  const { isPaid, redeemLicense, loaded: entLoaded } = useEntitlement(user?.id);
  const [paywallLevel, setPaywallLevel] = useState(null);

  if (authLoading || !dbLoaded || (user && !entLoaded)) return <LoadingScreen />;
  if (!user) return <Auth />;

  // Used by child components to trigger the paywall.
  // Pass a level string ('A2'..'C2') for context, or true / undefined for generic.
  const showPaywall = (level) => setPaywallLevel(level ?? true);
  const closePaywall = () => setPaywallLevel(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home progress={progress} setStudentName={setStudentName} signOut={signOut} user={user} isPaid={isPaid} showPaywall={showPaywall} />} />
        <Route path="/placement-test" element={<PlacementTest completePlacement={completePlacement} />} />
        <Route path="/dashboard" element={<Dashboard progress={progress} resetProgress={resetProgress} signOut={signOut} user={user} isPaid={isPaid} showPaywall={showPaywall} />} />
        <Route path="/level/:level" element={<LevelOverview progress={progress} isPaid={isPaid} showPaywall={showPaywall} />} />
        <Route path="/lesson/:lessonId" element={<Lesson completeLesson={completeLesson} isLessonCompleted={isLessonCompleted} isPaid={isPaid} showPaywall={showPaywall} />} />
        <Route path="/assessment/:level" element={<Assessment completeAssessment={completeAssessment} getAssessmentScore={getAssessmentScore} isPaid={isPaid} showPaywall={showPaywall} />} />
      </Routes>

      {paywallLevel && (
        <Paywall
          user={user}
          redeemLicense={redeemLicense}
          onClose={closePaywall}
          level={typeof paywallLevel === 'string' ? paywallLevel : null}
        />
      )}
    </>
  );
}

function RouterContent() {
  return (
    <>
      <Routes>
        <Route path="/legal/:page" element={<Legal />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

function AppContent() {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App
