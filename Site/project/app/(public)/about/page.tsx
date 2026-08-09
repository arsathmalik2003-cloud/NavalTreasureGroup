'use client';

import { useState } from 'react';
import {
  Award,
  Leaf,
  Shield,
  CheckCircle2,
  HeartHandshake,
  TrendingUp,
  Sparkles,
  Globe,
  Layers,
  Users,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'sustainability' | 'future'>(
    'sustainability'
  );

  const kpis = [
    { value: '4+', label: 'Core Product Categories' },
    { value: '100%', label: 'Quality Audited Supply' },
    { value: '10+', label: 'Asia & Global Trade Routes' },
    { value: '24/7', label: 'Logistics & Customs Coordination' },
  ];

  const coreValues = [
    {
      title: 'Quality',
      desc: 'Consistent grading and specifications across all food product categories.',
      icon: Award,
    },
    {
      title: 'Responsible Sourcing',
      desc: 'Working exclusively with verified suppliers and ethical production standards.',
      icon: Leaf,
    },
    {
      title: 'Transparency',
      desc: 'Clear communication, traceable origin paperwork, and institutional integrity.',
      icon: Shield,
    },
    {
      title: 'Reliability',
      desc: 'Dependable execution across sourcing, shipping, and container allotment.',
      icon: CheckCircle2,
    },
    {
      title: 'Customer Focus',
      desc: 'Tailored packaging, volume flexibility, and responsive commercial solutions.',
      icon: HeartHandshake,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Optimizing digital documentation, customs workflows, and logistics routes.',
      icon: TrendingUp,
    },
  ];

  const sustainabilityPoints = [
    'Support responsible sourcing practices across all seafood and agricultural lines',
    'Build stronger relationships with ethical local producers and regional fisheries',
    'Respect the communities connected to our international business activities',
    'Reduce unnecessary environmental impact through optimized container loading',
    'Improve supply chain transparency with verifiable certificate documentation',
    'Explore efficient and sustainable food preservation and dehydration technologies',
    'Remain open to modern packaging formats that minimize post-harvest waste',
  ];

  const futurePillars = [
    {
      title: 'Product Diversification',
      desc: 'Expanding our portfolio based on customer demand and emerging market needs.',
    },
    {
      title: 'Geographic Expansion',
      desc: 'Developing trade partnerships across new East Asian and international markets.',
    },
    {
      title: 'Digital Transformation',
      desc: 'Using e-Phyto and automated customs documentation for zero-friction clearance.',
    },
    {
      title: 'Strategic Partnerships',
      desc: 'Building long-term alliances with distributors, shippers, and port authorities.',
    },
    {
      title: 'Responsible Growth',
      desc: 'Scaling commercial volume while upholding rigorous quality and ethical standards.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Sultan Seyed Ibrahim',
      role: 'Chief Operating Officer & Managing Director',
      bio: "Oversees operational direction, business activities, and key strategic development across NTG's trade network.",
      image: '/images/team/member-1.png',
    },

    {
      name: 'Dr. Mohamed Halideen',
      role: 'Director & Chief Executive Officer',
      bio: 'Responsible for executive leadership and strategic business direction, supporting long-term international expansion.',
      image: '/images/team/member-3.png',
    },
    {
      name: 'Mr. Syed Ashiqeen',
      role: 'Chief Sales Officer',
      bio: 'Oversees sales development and client relationships, identifying market opportunities across Asia and global hubs.',
      image: '/images/team/member-4.png',
    },
    {
      name: 'Mr. Vilva Buvaneswhar',
      role: 'Head of Procurement',
      bio: 'Leads procurement, supplier coordination, and sourcing audits to guarantee consistent volume availability.',
      image: '/images/team/member-5.png',
    },
    {
      name: 'Mr. Mohamed Ahraf',
      role: 'QA Specialist',
      bio: 'Manages quality assurance, laboratory testing verification, and phytosanitary compliance across all shipments.',
      image: '/images/team/member-6.png',
    },
  ];

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen pb-24">
      {/* 1. COMPACT HERO & 4-COLUMN KPI BAR */}
      <section className="bg-white border-b border-[#ececee] pt-16 pb-16 md:pt-20 md:pb-20">
        <ScrollReveal animation="fade-up">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff5a00]" />
                ABOUT NAVAL TREASURE GROUP
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-[#09090b]">
                Built on Relationships. Driven by Reliable Trade.
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#52525b] leading-relaxed">
                Naval Treasure Group International  is an international food products sourcing and trading company focused on connecting quality seafood, meat, and dehydrated powders with global markets.
              </p>
            </div>

            {/* 4-Column Scannable KPI / Trust Bar */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-[#f4f4f5] rounded-[24px] border border-[#ececee] p-6 text-center"
                >
                  <div className="text-3xl font-black text-[#09090b] tracking-tight">
                    {kpi.value}
                  </div>
                  <div className="text-xs font-semibold text-[#71717a] mt-1 uppercase tracking-wider">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. COMPACT OUR STORY & VISION/MISSION SIDE BY SIDE */}
      <section className="py-20 bg-[#f4f4f5]">
        <ScrollReveal animation="fade-up" delay={60}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Our Story Card */}
              <div className="lg:col-span-6 bg-white rounded-[36px] border border-[#ececee] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-4">
                    OUR STORY
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#09090b] mb-4">
                    Connecting Products, People, and Markets
                  </h2>
                  <p className="text-sm text-[#52525b] leading-relaxed">
                    The global food trade brings together producers, suppliers, buyers, distributors, and logistics providers. Naval Treasure Group operates within this ecosystem by coordinating dependable cross-border connections.
                  </p>
                  <p className="mt-4 text-sm text-[#52525b] leading-relaxed">
                    Our role is to understand market requirements, identify suitable sourcing opportunities, and support the movement of products through organized trade and supply coordination.
                  </p>
                </div>
              </div>

              {/* Vision & Mission Card */}
              <div className="lg:col-span-6 bg-[#09090b] text-white rounded-[36px] border border-[#27272a] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-[12px] bg-[#27272a] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-4">
                    VISION & MISSION
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Responsible & Customer-Focused
                  </h2>
                  <div className="space-y-4 text-sm text-[#a1a1aa]">
                    <div>
                      <strong className="text-white block mb-1">Our Vision:</strong>
                      To build a forward-looking international trading business that grows through sustainable sourcing, dependable supply, and practical innovation.
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Our Mission:</strong>
                      To deliver quality products and dependable international trade support through:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a00]" />
                        <span>Verified quality sourcing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a00]" />
                        <span>Transparent processes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a00]" />
                        <span>Reliable coordination</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a00]" />
                        <span>Long-term partnerships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. 6 CORE VALUES (CRISP BADGE CARDS) */}
      <section className="py-16 bg-white border-y border-[#ececee]">
        <ScrollReveal animation="fade-up" delay={60}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
                CORE PRINCIPLES
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#09090b]">
                The Principles Behind Our Business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val) => (
                <div
                  key={val.title}
                  className="bg-[#f4f4f5] rounded-[28px] border border-[#ececee] p-6 flex items-start gap-4 hover:border-[#d4d4d8] transition-colors"
                >
                  <div className="w-11 h-11 rounded-[14px] bg-white border border-[#ececee] flex items-center justify-center text-[#09090b] shrink-0">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#09090b]">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#52525b] mt-1 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. INTERACTIVE PILL-TAB ACCORDION: SUSTAINABILITY & FUTURE DIRECTION */}
      <section className="py-20 bg-[#f4f4f5]">
        <ScrollReveal animation="fade-up" delay={60}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white rounded-[36px] border border-[#ececee] p-8 md:p-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-[#ececee]">
                <div>
                  <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
                    STRATEGIC DIRECTION
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#09090b]">
                    {activeTab === 'sustainability'
                      ? 'Growing Responsibly'
                      : 'Building for the Future'}
                  </h2>
                </div>

                {/* Awesomic 10000px Pill Tab Selector */}
                <div className="inline-flex p-1.5 bg-[#f4f4f5] rounded-[10000px] border border-[#ececee]">
                  <button
                    onClick={() => setActiveTab('sustainability')}
                    className={`px-5 py-2.5 rounded-[10000px] text-xs font-bold transition-all ${activeTab === 'sustainability'
                        ? 'bg-[#09090b] text-white shadow-sm'
                        : 'text-[#52525b] hover:text-[#09090b]'
                      }`}
                  >
                    Sustainability Focus
                  </button>
                  <button
                    onClick={() => setActiveTab('future')}
                    className={`px-5 py-2.5 rounded-[10000px] text-xs font-bold transition-all ${activeTab === 'future'
                        ? 'bg-[#09090b] text-white shadow-sm'
                        : 'text-[#52525b] hover:text-[#09090b]'
                      }`}
                  >
                    5 Future Pillars
                  </button>
                </div>
              </div>

              {/* Content Display */}
              {activeTab === 'sustainability' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sustainabilityPoints.map((pt) => (
                    <div
                      key={pt}
                      className="bg-[#f4f4f5] rounded-[18px] border border-[#ececee] p-4 flex items-center gap-3"
                    >
                      <Leaf className="w-4 h-4 text-[#ff5a00] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#09090b]">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {futurePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="bg-[#f4f4f5] rounded-[24px] border border-[#ececee] p-6"
                    >
                      <h3 className="text-base font-bold text-[#09090b] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#52525b] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4.5 FOUNDER TRIBUTE SECTION */}
      <section className="py-20 bg-white border-t border-[#ececee]">
        <ScrollReveal animation="fade-up" delay={60}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#09090b] text-white rounded-[36px] border border-[#27272a] p-8 md:p-14 overflow-hidden relative shadow-lg">
              {/* Subtle glow effect */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5a00] opacity-20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 lg:pr-8">
                  <span className="inline-block px-3 py-1 rounded-[12px] bg-[#27272a] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-6">
                    OUR FOUNDER (1945 - 2024)
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Mr. Peer Ghani
                  </h2>
                  <div className="space-y-4 text-[#a1a1aa] leading-relaxed text-sm md:text-base">
                    <p>
                      Mr. Peer Ghani is an inspiring example of resilience and compassion. Rising from a life of poverty, he worked tirelessly to pursue education and achieve success despite countless struggles. What makes him remarkable is his decision to use his achievements for the greater good.
                    </p>
                    <p>
                      As a dedicated social worker and respected leader, Mr. Peer Ghani focused on uplifting underprivileged communities through education, healthcare, and development initiatives.
                    </p>
                    <p>
                      Known for his humility, honesty, and people-centered leadership, he continues to inspire trust and hope. His journey from hardship to leadership proves that determination and service can transform lives and create lasting impact.
                    </p>
                  </div>
                </div>

                {/* Image / Graphic Avatar Column */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-[36px] border border-[#3f3f46] bg-[#18181b] overflow-hidden flex items-center justify-center relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/images/team/member.png"
                      alt="Mr. Peer Ghani"
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#ff5a00]/10 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. 6 EXECUTIVE LEADERSHIP PHOTO CARDS (COMPACT & SCANABLE) */}
      <section className="py-20 bg-[#f4f4f5] border-t border-[#ececee]">
        <ScrollReveal animation="fade-up" delay={60}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-xl mb-12">
              <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
                EXECUTIVE MANAGEMENT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#09090b]">
                Leadership & Management
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {leadershipTeam.map((leader) => (
                <div
                  key={leader.name}
                  className="group bg-[#f4f4f5] rounded-[28px] border border-[#ececee] overflow-hidden flex flex-col hover:border-[#d4d4d8] transition-all"
                >
                  {/* 1:1 Square Photo */}
                  <div className="aspect-square w-full overflow-hidden bg-[#e4e4e7] relative shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-none group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out pointer-events-none" />
                  </div>

                  {/* Compact Content Section */}
                  <div className="p-5 flex-1 flex flex-col justify-start">
                    <h3 className="text-base font-bold text-[#09090b] leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-[10px] font-bold text-[#ff5a00] uppercase tracking-wider mt-0.5 mb-2.5">
                      {leader.role}
                    </p>
                    <p className="text-xs text-[#52525b] leading-relaxed line-clamp-3">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
