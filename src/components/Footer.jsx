import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
      <div className="max-w-3xl mx-auto px-4 text-center text-sm space-y-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/legal/terms" className="hover:text-white">Terms of Service</Link>
          <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/legal/copyright" className="hover:text-white">Copyright</Link>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} English Course. All content is original and protected by copyright.
        </p>
      </div>
    </footer>
  );
}
