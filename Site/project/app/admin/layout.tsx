'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
  ShieldCheck,
  LayoutDashboard,
  Package,
  Image as ImageIcon,
  FileText,
  MessageSquare,
  LogOut,
  Menu,
  ChevronRight,
} from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/blog', label: 'Blog Posts', icon: FileText },
  { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f4f5]">
        <div className="w-6 h-6 border-2 border-[#09090b]/20 border-t-[#09090b] rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-[#f4f4f5] flex text-[#09090b]">
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#09090b]/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#ececee] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#ececee]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#09090b] flex items-center justify-center text-white font-bold text-sm">
              NT
            </div>
            <div>
              <div className="font-bold text-sm text-[#09090b]">NTG Admin</div>
              <div className="text-[11px] text-[#71717a] font-medium">
                Trade Desk Portal
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#09090b] text-white shadow-sm'
                    : 'text-[#52525b] hover:bg-[#f4f4f5] hover:text-[#09090b]'
                }`}
              >
                <link.icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-white' : 'text-[#71717a]'
                  }`}
                />
                {link.label}
                {isActive && (
                  <ChevronRight className="w-3.5 h-3.5 ml-auto text-white" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#ececee]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] text-sm font-medium text-[#71717a] hover:bg-red-50 hover:text-red-600 w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-[12px] text-xs text-[#71717a] hover:text-[#09090b] mt-1 transition-colors"
          >
            <span>&larr; Return to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-[#ececee] px-6 h-16 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-[#f4f4f5]"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5 text-[#09090b]" />
          </button>
          <h1 className="text-base font-bold text-[#09090b]">
            {sidebarLinks.find((l) => l.href === pathname)?.label || 'Admin'}
          </h1>
          <div className="ml-auto text-xs text-[#71717a] font-medium">
            {session.user.email}
          </div>
        </header>
        <div className="flex-1 p-6 lg:p-10">{children}</div>
      </div>
    </div>
  );
}

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isSignUp) {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        setError(signUpError.message);
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setError(signInError.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18181b] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-[14px] bg-[#09090b] border border-[#3f3f46] flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6 text-[#ff5a00]" />
          </div>
          <h1 className="text-xl font-bold text-white">NTG Trade Portal</h1>
          <p className="text-sm text-[#a1a1aa] mt-1">
            Sign in to access corporate management
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[28px] border border-[#ececee] p-8 shadow-xl space-y-4"
        >
          {error && (
            <div className="p-3.5 rounded-[12px] bg-red-50 border border-red-100 text-red-700 text-xs">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="admin-email"
              className="block text-xs font-bold text-[#3f3f46] uppercase tracking-wider mb-1.5"
            >
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#f4f4f5] border border-[#ececee] text-[#09090b] px-3.5 py-2.5 rounded-[12px] text-sm focus:outline-none focus:border-[#09090b] transition-colors"
              placeholder="admin@navaltreasure.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-xs font-bold text-[#3f3f46] uppercase tracking-wider mb-1.5"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#f4f4f5] border border-[#ececee] text-[#09090b] px-3.5 py-2.5 rounded-[12px] text-sm focus:outline-none focus:border-[#09090b] transition-colors"
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-[12px] bg-[#09090b] text-white text-sm font-semibold shadow-btn-dark hover:bg-[#18181b] transition-all disabled:opacity-60"
          >
            {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="w-full text-center text-xs text-[#71717a] hover:text-[#09090b] transition-colors pt-2"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : 'First time? Create admin account'}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            &larr; Back to public website
          </Link>
        </div>
      </div>
    </div>
  );
}
