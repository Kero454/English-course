import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Copyright } from 'lucide-react';

const PRODUCT_NAME = 'English Course';
const COMPANY_NAME = 'English Course';
const CONTACT_EMAIL = 'support@example.com';
const EFFECTIVE_DATE = 'January 2026';

const pages = {
  terms: {
    icon: FileText,
    title: 'Terms of Service',
    body: (
      <>
        <p><strong>Effective date:</strong> {EFFECTIVE_DATE}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account or using {PRODUCT_NAME} (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>

        <h2>2. Your Account</h2>
        <p>You must provide accurate information when registering. You are responsible for keeping your password secure and for all activity that occurs under your account. We reserve the right to suspend accounts that violate these terms.</p>

        <h2>3. License to Use the Service</h2>
        <p>We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your personal, non-commercial learning. You may not resell, redistribute, or sublicense any part of the Service or its content.</p>

        <h2>4. Intellectual Property</h2>
        <p>All lessons, exercises, reading passages, audio scripts, design, and code are the original work of {COMPANY_NAME} and are protected by copyright. You may not copy, reproduce, distribute, or create derivative works without prior written permission.</p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to (a) attempt to gain unauthorised access to any part of the Service; (b) use automated tools to scrape content; (c) upload malicious code; (d) use the Service for any unlawful purpose.</p>

        <h2>6. Refunds</h2>
        <p>Refund eligibility depends on the platform you purchased through (e.g., LemonSqueezy). Generally, refunds are available within 14 days of purchase if you have not consumed a substantial portion of the content. Contact us at {CONTACT_EMAIL} to request a refund.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>The Service is provided "as is" and "as available", without warranties of any kind. We do not guarantee that you will achieve any particular language proficiency level by using it. The CEFR mapping is for guidance only.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, {COMPANY_NAME} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>

        <h2>9. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. Significant changes will be communicated via email or an in-app notice. Continued use after changes constitutes acceptance.</p>

        <h2>10. Contact</h2>
        <p>For questions, contact {CONTACT_EMAIL}.</p>
      </>
    ),
  },

  privacy: {
    icon: Shield,
    title: 'Privacy Policy',
    body: (
      <>
        <p><strong>Effective date:</strong> {EFFECTIVE_DATE}</p>

        <h2>1. Information We Collect</h2>
        <p>When you register, we collect your <strong>email address</strong> and a securely hashed password (we never see your actual password). As you use the Service, we store your <strong>learning progress</strong> (lessons completed, quiz scores, placement test results) so that you can resume where you left off.</p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide the Service and sync your progress across devices.</li>
          <li>To authenticate you securely.</li>
          <li>To send essential account-related emails (e.g., confirmation, password reset).</li>
          <li>To improve the Service through anonymised usage analytics.</li>
        </ul>

        <h2>3. Data Storage & Security</h2>
        <p>Your data is stored on <strong>Supabase</strong>, which uses industry-standard encryption at rest and in transit. We implement Row-Level Security so that no user can access another user's data. We do not sell your data.</p>

        <h2>4. Microphone & Speech Recognition</h2>
        <p>The Service uses your browser's built-in Speech Recognition API for pronunciation practice. Speech may be processed by your browser vendor (e.g., Google or Apple) according to their privacy policies. <strong>We never store your audio recordings.</strong></p>

        <h2>5. Cookies & Local Storage</h2>
        <p>We use browser local storage to keep you signed in and to cache progress for offline use. We do not use third-party advertising cookies.</p>

        <h2>6. Your Rights (GDPR / CCPA)</h2>
        <p>You have the right to (a) access the personal data we hold about you; (b) request correction or deletion; (c) export your data; (d) withdraw consent. Email {CONTACT_EMAIL} to exercise any of these rights.</p>

        <h2>7. Data Retention</h2>
        <p>We keep your account data for as long as your account is active. If you delete your account, all personal data is permanently removed within 30 days.</p>

        <h2>8. Children's Privacy</h2>
        <p>The Service is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>9. Changes</h2>
        <p>We will notify users of significant changes to this policy via email or in-app notice.</p>

        <h2>10. Contact</h2>
        <p>For privacy questions, contact {CONTACT_EMAIL}.</p>
      </>
    ),
  },

  copyright: {
    icon: Copyright,
    title: 'Copyright & Attribution',
    body: (
      <>
        <p><strong>Effective date:</strong> {EFFECTIVE_DATE}</p>

        <h2>Original Content Declaration</h2>
        <p>All learning content in {PRODUCT_NAME} — including, but not limited to, grammar explanations, example sentences, dialogues, reading passages, listening scripts, speaking prompts, writing prompts, model answers, and assessment questions — has been <strong>written exclusively for this product</strong> by {COMPANY_NAME}.</p>
        <p>No content has been copied from copyrighted textbooks, courses, or third-party sources. Where common idiomatic expressions, proverbs, or grammatical examples are used, they are part of the public domain of the English language itself.</p>

        <h2>Audio (Listening Practice)</h2>
        <p>Listening passages are generated <strong>on-device</strong> using your browser's built-in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" target="_blank" rel="noreferrer">Web Speech API</a> (Text-to-Speech). No copyrighted audio files are distributed with this product.</p>

        <h2>Speech Recognition</h2>
        <p>Pronunciation feedback is powered by your browser's Web Speech Recognition API. This is a free, browser-native feature provided by your operating system or browser vendor.</p>

        <h2>Open-Source Software</h2>
        <p>This product uses the following open-source libraries, each under permissive licenses (MIT or Apache 2.0):</p>
        <ul>
          <li><strong>React</strong> &mdash; MIT License &copy; Meta Platforms, Inc.</li>
          <li><strong>Vite</strong> &mdash; MIT License</li>
          <li><strong>Tailwind CSS</strong> &mdash; MIT License</li>
          <li><strong>React Router</strong> &mdash; MIT License</li>
          <li><strong>Lucide Icons</strong> &mdash; ISC License</li>
          <li><strong>Supabase JS</strong> &mdash; MIT License</li>
        </ul>
        <p>Full license texts are available in the corresponding library repositories.</p>

        <h2>CEFR Framework</h2>
        <p>The Common European Framework of Reference for Languages (CEFR) — A1 through C2 — is a public framework published by the Council of Europe. Our level descriptions are our own original summaries inspired by, but not copied from, official CEFR documents.</p>

        <h2>Trademarks</h2>
        <p>Any third-party trademarks mentioned in this product (e.g., the names of cities, products, or organisations used as examples) remain the property of their respective owners and are used solely for educational illustration.</p>

        <h2>Reporting Copyright Issues</h2>
        <p>If you believe any content in this product infringes your copyright, please contact {CONTACT_EMAIL} with a detailed description, and we will investigate promptly.</p>

        <p className="text-sm text-slate-500 mt-8">&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
      </>
    ),
  },
};

export default function Legal() {
  const { page } = useParams();
  const data = pages[page] || pages.terms;
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-3">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <Icon className="w-7 h-7" />
            <h1 className="text-3xl font-bold">{data.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div
          className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 prose prose-slate max-w-none
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-800 [&_h2]:mt-6 [&_h2]:mb-2
            [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-3
            [&_ul]:space-y-1 [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:text-slate-600
            [&_strong]:text-slate-800 [&_a]:text-indigo-600 [&_a]:underline"
        >
          {data.body}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {Object.entries(pages).map(([slug, p]) =>
            slug === page ? null : (
              <Link key={slug} to={`/legal/${slug}`} className="text-indigo-600 hover:underline">
                {p.title} &rarr;
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
