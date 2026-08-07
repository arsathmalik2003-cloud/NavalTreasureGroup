'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Fish,
  Beef,
  Leaf,
  Cherry,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Ship,
  TrendingUp,
  FileText,
  Users,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    {
      title: 'Seafood & Marine Products',
      subtitle: 'Dry Seafood • Sea Cucumber • Fish Maw • Grouper Fish',
      href: '/products?category=seafood',
      image: '/images/categories/category-1.png',
      badge: 'Marine Category',
      colSpan: 'lg:col-span-7',
    },
    {
      title: 'Meat Products',
      subtitle: 'Traceable Sourcing • Quality Audited Commercial Supply',
      href: '/products?category=meat',
      image: '/images/categories/category-2.png',
      badge: 'Commercial Meat',
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Dehydrated Vegetable Powders',
      subtitle: 'Shelf-Stable • Moisture Controlled Ingredients',
      href: '/products?category=vegetable_powder',
      image: '/images/categories/category-3.png',
      badge: 'Industrial Ingredients',
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Dehydrated Fruit Powders',
      subtitle: 'Versatile Solubility • Custom Flavour Specifications',
      href: '/products?category=fruit_powder',
      image: '/images/categories/category-4.png',
      badge: 'Food & Beverage',
      colSpan: 'lg:col-span-7',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Identify market specifications, grading standards, and volume requirements.',
    },
    {
      num: '02',
      title: 'Source',
      desc: 'Coordinate with verified international producers and regional suppliers.',
    },
    {
      num: '03',
      title: 'Inspect & Prepare',
      desc: 'Verify product quality, phytosanitary standards, and customs compliance.',
    },
    {
      num: '04',
      title: 'Deliver & Support',
      desc: 'Manage vessel assignment, container allotment, and port delivery.',
    },
  ];

  const whyUsSlides = [
    {
      num: '01',
      title: 'Quality Sourcing',
      desc: 'Strict inspection standards across every food product line.',
      icon: ShieldCheck,
      image: '/images/reason/reason-1.png',
      tag: 'Verified Lab Standards',
    },
    {
      num: '02',
      title: 'International Network',
      desc: 'Active commercial relationships across Asia and global hubs.',
      icon: Globe,
      image: '/images/reason/reason-2.png',
      tag: 'Asia & Global Ports',
    },
    {
      num: '03',
      title: 'End-to-End Traceability',
      desc: 'Documented origin and supply chain transparency.',
      icon: Layers,
      image: '/images/reason/reason-3.png',
      tag: 'Origin Audited Supply',
    },
    {
      num: '04',
      title: 'Logistics Coordination',
      desc: 'Container allotment & port-to-port vessel support.',
      icon: Ship,
      image: '/images/reason/reason-4.png',
      tag: 'Port Klang Terminal',
    },
    {
      num: '05',
      title: 'Customs & Compliance',
      desc: 'Standardized phytosanitary & institutional trade paperwork.',
      icon: FileText,
      image: '/images/reason/reason-5.png',
      tag: 'Zero-Friction Clearance',
    },
    {
      num: '06',
      title: 'Dedicated Partnerships',
      desc: 'Responsive communication & dependable commercial execution.',
      icon: Users,
      image: '/images/reason/reason-6.png',
      tag: 'Dependable Trade Team',
    },
  ];

  const handlePrev = useCallback(() => {
    setSlideIdx((prev) =>
      prev === 0 ? whyUsSlides.length - 1 : prev - 1
    );
  }, [whyUsSlides.length]);

  const handleNext = useCallback(() => {
    setSlideIdx((prev) => (prev + 1) % whyUsSlides.length);
  }, [whyUsSlides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  useEffect(() => {
    if (isUserPaused || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isUserPaused, isHovered, handleNext]);

  // Generate 3 visible cards wrapping cleanly around the array
  const visibleCards = [0, 1, 2].map(
    (offset) => whyUsSlides[(slideIdx + offset) % whyUsSlides.length]
  );

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen">
      {/* 1. COMPACT VISUAL HERO */}
      <section className="bg-white border-b border-[#ececee] pt-14 pb-20 md:pt-20 md:pb-24">
        <ScrollReveal animation="fade-up">
          <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Punchy Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ff5a00]" />
                INTERNATIONAL FOOD TRADE & SOURCING
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-[#09090b]">
                Connecting Quality Products with Global Markets
              </h1>
              <p className="text-base md:text-lg text-[#52525b] leading-relaxed max-w-xl">
                Naval Treasure Group International is a reliable partner in international food trade—connecting producers, buyers, and logistics across borders with zero friction.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="px-7 py-4 rounded-[14px] bg-[#09090b] text-white text-sm font-bold shadow-btn-dark hover:bg-[#18181b] transition-all flex items-center gap-2"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-4 rounded-[14px] bg-[#f4f4f5] text-[#09090b] border border-[#ececee] text-sm font-bold hover:border-[#d4d4d8] hover:bg-[#ececee] transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right: High-Res Maritime Trade Visual Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[36px] overflow-hidden border border-[#ececee] shadow-lg bg-[#e4e4e7] h-[360px] group">
                <img
                  src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="International Cargo Logistics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 rounded-[10000px] bg-white/95 text-[#09090b] text-[11px] font-bold uppercase tracking-wider w-fit mb-2">
                    GLOBAL CARGO ALLOTMENT
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Port Klang & Regional Distribution
                  </h3>
                  <p className="text-xs text-[#d4d4d8] mt-1">
                    Verified container logistics & phytosanitary customs compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 2. 4-CARD VISUAL BENTO PREVIEW (NO LONG PARAGRAPHS) */}
      <section className="py-20 bg-[#f4f4f5]">
        <ScrollReveal animation="fade-up" delay={80}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-[12px] bg-white border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-3">
                CORE PORTFOLIO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#09090b]">
                What We Source & Supply
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5a00] hover:underline"
            >
              <span>View full specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group ${cat.colSpan} bg-white rounded-[36px] border border-[#ececee] overflow-hidden hover:border-[#d4d4d8] transition-all flex flex-col justify-between block`}
              >
                {/* Top Half: Raw Unobstructed Photography (Zero Dark Overlays) */}
                <div className="h-60 overflow-hidden bg-[#f4f4f5] relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-3 py-1 rounded-[12px] bg-white/95 border border-[#ececee] text-[11px] font-bold text-[#09090b] uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Editorial Card Body (28px padding, 20px Cosmica weight 600, Tag pills) */}
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between bg-white border-t border-[#ececee]">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#09090b] group-hover:text-[#ff5a00] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-medium text-[#52525b] mt-2 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ececee] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-transparent border border-[#ececee] text-xs font-medium text-[#18181b] group-hover:border-[#d4d4d8] transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#52525b] group-hover:text-[#09090b]" />
                    </span>
                    <div className="w-9 h-9 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-[#09090b] flex items-center justify-center group-hover:bg-[#09090b] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 3. SCANNABLE 4-STEP PROCESS BAR */}
      <section className="py-16 bg-white border-y border-[#ececee]">
        <ScrollReveal animation="fade-up" delay={80}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-xl mb-12">
            <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
              STREAMLINED EXECUTION
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#09090b]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#f4f4f5] rounded-[28px] border border-[#ececee] p-6 relative"
              >
                <div className="text-2xl font-black text-[#ff5a00] mb-3 font-mono">
                  {step.num}.
                </div>
                <h3 className="text-lg font-bold text-[#09090b] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 4. PREMIUM INTERACTIVE "WHY WORK WITH US" IMAGE SLIDER */}
      <section className="py-20 bg-[#f4f4f5]">
        <ScrollReveal animation="fade-up" delay={60}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header + Interactive Slider Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-[12px] bg-white border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-3">
                RELIABLE TRADE PARTNER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#09090b]">
                Why Work With Us
              </h2>
            </div>

            {/* Previous / Next Arrow Controls + Pause / Resume Button */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsUserPaused(!isUserPaused)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-[14px] text-xs font-bold transition-all select-none shadow-sm border ${
                  isUserPaused
                    ? 'bg-[#09090b] text-white border-[#09090b] hover:bg-[#27272a]'
                    : 'bg-white text-[#09090b] border-[#ececee] hover:border-[#d4d4d8]'
                }`}
                title={isUserPaused ? "Click to resume auto-play" : "Click to pause auto-play"}
              >
                {isUserPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#ff5a00] fill-current" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#ff5a00] fill-current" />
                    <span>Pause</span>
                  </>
                )}
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Reason"
                  className="w-12 h-12 rounded-[16px] bg-white border border-[#ececee] hover:border-[#d4d4d8] text-[#09090b] hover:bg-[#ececee] transition-all flex items-center justify-center shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Reason"
                  className="w-12 h-12 rounded-[16px] bg-white border border-[#ececee] hover:border-[#d4d4d8] text-[#09090b] hover:bg-[#ececee] transition-all flex items-center justify-center shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Smooth Sliding Auto-Carousel Track Container - Pauses on Hover */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-hidden -mx-3 py-4"
          >
            <div
              className="flex transition-transform duration-700 ease-out carousel-track"
              style={{
                '--slide-idx': slideIdx,
              } as React.CSSProperties}
            >
              {[...whyUsSlides, ...whyUsSlides].map((slide, idx) => {
                const IconComp = slide.icon;
                return (
                  <div
                    key={`${slide.num}-${idx}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                  >
                    <div className="group relative h-96 rounded-[36px] overflow-hidden border border-[#ececee] bg-white shadow-sm block transition-all hover-card-lift">
                      {/* Background Trade Photo */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* High-Contrast Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 flex flex-col justify-between p-8">
                        {/* Top Tag & Icon Badge */}
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 rounded-[10000px] bg-white/95 backdrop-blur-md text-[#09090b] text-[11px] font-bold uppercase tracking-wider">
                            {slide.tag}
                          </span>
                          <div className="w-10 h-10 rounded-[14px] bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#ff5a00] transition-colors">
                            <IconComp className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Bottom Headline & Concise Copy */}
                        <div>
                          <div className="text-xs font-mono font-bold text-[#ff5a00] mb-1">
                            {slide.num}. REASON
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#ff5a00] transition-colors">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-[#d4d4d8] mt-2 leading-relaxed">
                            {slide.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clickable Pill Indicators (Dots) */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {whyUsSlides.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setSlideIdx(idx)}
                aria-label={`Jump to slide ${s.num}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  slideIdx === idx
                    ? 'w-10 bg-[#ff5a00]'
                    : 'w-2.5 bg-[#d4d4d8] hover:bg-[#a1a1aa]'
                }`}
              />
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 5. PUNCHY CLOSING CTA */}
      <section className="py-16 bg-[#18181b] text-white border-t border-[#27272a]">
        <ScrollReveal animation="fade-up" delay={60}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#27272a]/80 rounded-[36px] p-10 md:p-14 border border-[#3f3f46] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-[12px] bg-[#18181b] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-3">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl font-bold text-white">
                Looking for a Reliable Trade Partner?
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-2 max-w-xl">
                Contact our team to discuss your product requirements, volume needs, and international trade opportunities.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-[14px] bg-white text-[#09090b] text-sm font-bold hover:bg-[#ececee] transition-all inline-flex items-center gap-2"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
