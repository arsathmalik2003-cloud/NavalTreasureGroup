'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery & Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#ececee] py-1 shadow-sm'
          : 'bg-transparent py-1.5'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Left */}
        <Link
          href="/"
          className="flex items-center text-[#09090b] group transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="NAVAL TREASURE GROUP Logo"
            className="w-48 h-24 object-contain"
          />
        </Link>

        {/* Center Nav Links (14px editorial sans) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${active
                    ? 'text-[#09090b] font-semibold'
                    : 'text-[#52525b] hover:text-[#09090b]'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Dark Filled Action Button) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#09090b] text-white text-sm font-medium px-4 py-2.5 rounded-[14px] border border-[#2c2e34] shadow-btn-dark hover:bg-[#18181b] transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-[#a1a1aa]" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl text-[#09090b] hover:bg-[#ececee]/60 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#ececee] px-6 py-6 shadow-xl animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium py-2 border-b border-[#ececee]/50 transition-colors ${active
                      ? 'text-[#09090b] font-semibold'
                      : 'text-[#52525b]'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#09090b] text-white text-sm font-medium py-3 rounded-[14px] shadow-btn-dark"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
