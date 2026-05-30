import { useState } from 'react';
import { Lock, Sparkles, Check, KeyRound, ExternalLink, Loader2, AlertCircle, X } from 'lucide-react';

// IMPORTANT: After creating your product on LemonSqueezy, replace this URL
// with your real checkout URL. Format: https://YOUR_STORE.lemonsqueezy.com/buy/PRODUCT_UUID
// You can find it under: Store -> Products -> [Your Product] -> Share -> "Buy now URL"
const CHECKOUT_URL = import.meta.env.VITE_LEMONSQUEEZY_CHECKOUT_URL || 'https://YOUR_STORE.lemonsqueezy.com/buy/REPLACE_WITH_PRODUCT_UUID';

const FEATURES = [
  'Lifetime access to all 6 CEFR levels (A1 to C2)',
  '20 structured lessons + 80 skill-practice modules',
  'Reading, Listening, Speaking & Writing in every lesson',
  'Built-in pronunciation feedback (with your microphone)',
  'CEFR-mapped placement test & level assessments',
  'Cloud-synced progress across all your devices',
  'Install on your phone (works offline as a PWA)',
  'Free updates forever — no monthly fees',
];

function buildCheckoutUrl(email) {
  if (!CHECKOUT_URL || CHECKOUT_URL.includes('REPLACE_WITH')) return CHECKOUT_URL;
  const u = new URL(CHECKOUT_URL);
  // LemonSqueezy supports prefilling checkout fields:
  // https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
  if (email) u.searchParams.set('checkout[email]', email);
  return u.toString();
}

export default function Paywall({ user, redeemLicense, onClose, level }) {
  const [tab, setTab] = useState('buy');
  const [licenseKey, setLicenseKey] = useState('');
  const [redeeming, setRedeeming] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRedeem = async () => {
    if (!licenseKey.trim()) return;
    setError('');
    setRedeeming(true);
    try {
      await redeemLicense(licenseKey, user?.email);
      setSuccess(true);
      // Reload to refresh gated state across the app
      setTimeout(() => window.location.reload(), 1200);
    } catch (e) {
      setError(e.message || 'Could not redeem this license. Please double-check the key.');
    } finally {
      setRedeeming(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white p-8">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-medium mb-3">
            <Lock className="w-3.5 h-3.5" />
            {level ? `${level} is part of the full course` : 'Unlock the full course'}
          </div>
          <h2 className="text-3xl font-bold mb-2">Unlock all 6 CEFR levels</h2>
          <p className="text-white/80">A1 is yours free. Upgrade once and own A2&ndash;C2 for life.</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 px-6">
          <div className="flex gap-1">
            {[
              { id: 'buy', label: 'Buy License' },
              { id: 'redeem', label: 'I have a key' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  tab === t.id
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-slate-500 border-transparent hover:text-slate-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {tab === 'buy' ? (
            <>
              {/* Pricing card */}
              <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  LAUNCH OFFER
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-bold text-slate-800">$19</span>
                  <span className="text-lg text-slate-400 line-through">$39</span>
                  <span className="text-xs font-semibold text-emerald-600 uppercase">Save 51%</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">One-time payment. Lifetime access. No subscription.</p>
                <ul className="space-y-2 mb-5">
                  {FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={buildCheckoutUrl(user?.email)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  <Sparkles className="w-5 h-5" />
                  Get Lifetime Access for $19
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-center text-slate-500 mt-3">
                  Secure checkout via LemonSqueezy &bull; 30-day money-back guarantee
                </p>
              </div>

              <p className="text-xs text-slate-500 text-center">
                After purchase you&rsquo;ll receive a license key by email.
                Come back here and click <span className="font-semibold">&ldquo;I have a key&rdquo;</span> to unlock instantly.
              </p>
            </>
          ) : (
            <>
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-1 flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-indigo-600" />
                  Redeem your license key
                </h3>
                <p className="text-sm text-slate-500">
                  Paste the license key you received by email after your LemonSqueezy purchase.
                </p>
              </div>

              {success ? (
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <Check className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                  <p className="font-bold text-emerald-700 text-lg">License activated!</p>
                  <p className="text-sm text-emerald-600">Reloading the app to unlock your content&hellip;</p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    value={licenseKey}
                    onChange={(e) => setLicenseKey(e.target.value)}
                    placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"
                    disabled={redeeming}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-mono text-sm tracking-tight"
                    autoFocus
                  />

                  {error && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleRedeem}
                    disabled={!licenseKey.trim() || redeeming}
                    className="w-full mt-4 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    {redeeming ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Activating&hellip;</>
                    ) : (
                      <><KeyRound className="w-5 h-5" /> Activate License</>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    Don&rsquo;t have a key yet?{' '}
                    <button onClick={() => setTab('buy')} className="text-indigo-600 hover:underline font-medium">
                      Buy a license
                    </button>
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
