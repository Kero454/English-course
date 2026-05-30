// Demo mode — used by the screenshot capture script and for marketing previews.
// Activated via the URL parameter ?demo=free or ?demo=paid.
// The choice is persisted in sessionStorage so it survives client-side navigation.
//
// When active, the app skips Supabase entirely and uses the seeded data below.
// This is safe because nothing is ever written back to Supabase in demo mode.

const DEMO_KEY = 'english-course-demo-mode';

export function getDemoMode() {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('demo');
    if (fromUrl === 'free' || fromUrl === 'paid') {
      sessionStorage.setItem(DEMO_KEY, fromUrl);
      return fromUrl;
    }
    return sessionStorage.getItem(DEMO_KEY);
  } catch {
    return null;
  }
}

export const isDemo = () => getDemoMode() !== null;
export const isDemoPaid = () => getDemoMode() === 'paid';

export const DEMO_USER = {
  id: '00000000-0000-0000-0000-000000000001',
  email: 'demo@englishcourse.app',
  user_metadata: { full_name: 'Alex Carter' },
};

export const DEMO_PROGRESS = {
  studentName: 'Alex',
  level: 'A1',
  placementCompleted: true,
  placementResult: { level: 'A1', percentage: 32, totalQuestions: 60, correctAnswers: 19 },
  completedLessons: ['a1-u1-l1', 'a1-u1-l2'],
  lessonScores: { 'a1-u1-l1': 90, 'a1-u1-l2': 85 },
  assessmentScores: {},
  startDate: new Date().toISOString(),
};

export const DEMO_ENTITLEMENT = {
  user_id: DEMO_USER.id,
  license_key: 'DEMO-AAAA-BBBB-CCCC-DDDD-EEEE-FFFF-GGGG',
  license_instance_id: 'demo-instance',
  product_variant: 'Lifetime Access',
  customer_email: DEMO_USER.email,
  status: 'active',
  activated_at: new Date().toISOString(),
  validated_at: new Date().toISOString(),
};
