import Link from 'next/link';
import { MapPin, Mail, Phone, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f4f5] border-t border-[#ececee] pt-16 pb-12 text-[#18181b]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top 5-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#ececee]">
          {/* Col 1: Company Description (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center text-[#09090b] transition-opacity hover:opacity-80">
                <img
                  src="/images/logo.png"
                  alt="NAVAL TREASURE GROUP Logo"
                  className="w-64 h-32 object-contain"
                />
              </Link>
              <p className="mt-5 text-sm text-[#52525b] leading-relaxed">
                NAVAL TREASURE GROUP  is engaged in food product sourcing, supply, import, export, and international trade services.
              </p>
              <p className="mt-3 text-xs text-[#71717a] leading-relaxed">
                Our product portfolio includes seafood, meat, dehydrated vegetable powders, and dehydrated fruit powders. We work with suppliers, customers, and business partners to support reliable product sourcing and international market connections.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#ececee] text-xs font-medium text-[#18181b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]" />
                Connecting Quality Products, Reliable Partners, and International Markets
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Gallery & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products?category=seafood" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Seafood
                </Link>
              </li>
              <li>
                <Link href="/products?category=meat" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Meat Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=vegetable_powder" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Dehydrated Vegetable Powders
                </Link>
              </li>
              <li>
                <Link href="/products?category=fruit_powder" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Dehydrated Fruit Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Vessel Assignment
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  Container Allotment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#52525b] hover:text-[#09090b] transition-colors">
                  International Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-xs text-[#52525b] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#71717a] mt-0.5" />
                <span>
                  No-13A-2, Block C, Jalan Atmospher, 6 Pusat Perniagaan The Atmosphere, Jalan Putra Permai, Seri Kembangan, Selangor 43300, Malaysia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#71717a]" />
                <a href="tel:+60109156129" className="hover:text-[#09090b] transition-colors font-medium">
                  +60 10 915 6129
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#71717a]" />
                <a href="mailto:ntgseafoods@gmail.com" className="hover:text-[#09090b] transition-colors font-medium">
                  ntgseafoods@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© NAVAL TREASURE GROUP . by Gen2k Conglomerate - 2018</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#09090b] transition-colors">
              About Group
            </Link>
            <Link href="/contact" className="hover:text-[#09090b] transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="hover:text-[#09090b] transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
