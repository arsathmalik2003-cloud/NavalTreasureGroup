'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Image as ImageIcon,
  BookOpen,
  ArrowRight,
  Calendar,
  Maximize2,
  X,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function GalleryAndBlogPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'blog'>('gallery');
  const [selectedGalleryCategory, setSelectedGalleryCategory] =
    useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'seafood', label: 'Seafood & Marine' },
    { id: 'sourcing', label: 'Sourcing & Quality' },
    { id: 'logistics', label: 'Port Logistics' },
    { id: 'meetings', label: 'Business & Trade' },
  ];

  const galleryItems = [
    {
      id: '1',
      title: 'Seafood & Marine Product Sourcing',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'Quality inspection of export-ready dry seafood and fish maw.',
      image:
        'https://images.pexels.com/photos/37931489/pexels-photo-37931489.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      title: 'Container Logistics Coordination',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Vessel assignment and container allotment at Port Klang terminal.',
      image:
        'https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      title: 'Trade Delegation & Sourcing Meeting',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'B2B sourcing consultation with regional food trade partners.',
      image:
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      title: 'Dehydrated Vegetable & Fruit Powder QC',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Verifying mesh fineness and moisture control standards.',
      image:
        'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      title: 'Commercial Meat Supply Verification',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Traceability and origin certificate audit for meat shipments.',
      image:
        'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      title: 'Strategic Partnership Expansion',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'Expanding cross-border trade connections across Asia.',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '7',
      title: 'Warehouse & Truck Loading',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Efficient loading and dispatch of goods at the warehouse loading bay.',
      image: '/images/gallery/Warehouse & Truck Loading.png',
    },
    {
      id: '8',
      title: 'Air Freight Operations',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Loading cargo onto heavy transport aircraft for international delivery.',
      image: '/images/gallery/Air Freight Operations.png',
    },
    {
      id: '9',
      title: 'Rail Freight Transport',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Cross-border container transport via freight train.',
      image: '/images/gallery/Rail Freight Transport.png',
    },
    {
      id: '10',
      title: 'Port Terminal Operations',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Container ship loading and unloading at a bustling port terminal.',
      image: '/images/gallery/Port Terminal Operations.png',
    },
    {
      id: '11',
      title: 'Tarmac Cargo Operations',
      category: 'logistics',
      tag: 'Port Logistics',
      caption: 'Ground handling and loading operations for international air freight.',
      image: '/images/gallery/Tarmac Cargo Operations.png',
    },
    {
      id: '12',
      title: 'Global Strategy Meeting',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'Executive team discussing international expansion strategies.',
      image: '/images/gallery/Global Strategy Meeting.png',
    },
    {
      id: '13',
      title: 'Trade Network Planning',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'Mapping out global trade routes and logistics partnerships.',
      image: '/images/gallery/Trade Network Planning.png',
    },
    {
      id: '14',
      title: 'International Partnerships',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'Securing cross-border alliances and commercial trade agreements.',
      image: '/images/gallery/International Partnerships.png',
    },
    {
      id: '15',
      title: 'Global Supply Chain Analytics',
      category: 'meetings',
      tag: 'Business & Trade',
      caption: 'Analyzing market data to optimize global business solutions.',
      image: '/images/gallery/Global Supply Chain Analytics.png',
    },
    {
      id: '16',
      title: 'Premium Meat Assortment',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'High-quality selection of fresh meats meeting international sourcing standards.',
      image: '/images/gallery/Premium Meat Assortment.png',
    },
    {
      id: '17',
      title: 'Fresh Seafood Selection',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Extensive variety of freshly caught seafood displayed on ice to maintain cold chain freshness.',
      image: '/images/gallery/Fresh Seafood Selection.png',
    },
    {
      id: '18',
      title: 'Raw Meat Cuts',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Carefully prepared and inspected raw meat cuts ready for commercial distribution.',
      image: '/images/gallery/Raw Meat Cuts.png',
    },
    {
      id: '19',
      title: 'Marine Seafood Inspection',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Strict quality inspection of fresh seafood to ensure cold chain integrity and global supply reliability.',
      image: '/images/gallery/Marine Seafood Inspection.png',
    },
    {
      id: '20',
      title: 'Premium Shellfish & Seafood',
      category: 'sourcing',
      tag: 'Sourcing & Quality',
      caption: 'Premium selection of shellfish and diverse marine products sourced for wholesale trade.',
      image: '/images/gallery/Premium Shellfish & Seafood.png',
    },
    {
      id: '21',
      title: 'Fresh Marine Harvest',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'Extensive variety of freshly caught seafood including lobster, octopus, and premium fish.',
      image: '/images/gallery/Fresh Marine Harvest.png',
    },
    {
      id: '22',
      title: 'Dried Brown Sea Cucumber',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'Premium dried brown sea cucumbers, naturally processed for culinary export markets.',
      image: '/images/gallery/Dried Brown Sea Cucumber.png',
    },
    {
      id: '23',
      title: 'Dried Black Sea Cucumber',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'Premium dried black sea cucumbers, expertly dried to preserve their firm texture and quality.',
      image: '/images/gallery/Dried Black Sea Cucumber.png',
    },
    {
      id: '24',
      title: 'Assorted Dried Seafood',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'Assortment of dried seafood including squid, anchovies, and shrimp for wholesale supply.',
      image: '/images/gallery/Assorted Dried Seafood.png',
    },
    {
      id: '25',
      title: 'Premium Dried Fish',
      category: 'seafood',
      tag: 'Seafood & Marine',
      caption: 'High-quality dried fish prepared for long shelf life and rich flavor retention.',
      image: '/images/gallery/Premium Dried Fish.png',
    },
  ];

  const blogPosts = [
    {
      id: 'product-insights-seafood-standards',
      title: 'Product Insights: Quality Standards in Marine Seafood Sourcing',
      category: 'Product Insights',
      date: 'August 2, 2026',
      excerpt:
        'How our inspection teams verify moisture thresholds and grading consistency across international dry seafood shipments.',
      readTime: '4 min read',
      image: '/images/blogs/blog-1.png',
    },
    {
      id: 'international-trade-cross-border-supply',
      title: 'International Trade: Navigating Cross-Border Food Supply',
      category: 'International Trade',
      date: 'July 28, 2026',
      excerpt:
        'A practical guide to standardized phytosanitary documentation and customs clearance in East Asian hubs.',
      readTime: '5 min read',
      image: '/images/blogs/blog-2.png',
    },
    {
      id: 'logistics-shipping-vessel-assignment',
      title: 'Logistics & Shipping: Vessel Assignment & Container Allotment',
      category: 'Logistics & Shipping',
      date: 'July 20, 2026',
      excerpt:
        'Optimizing container allotment and port-to-port vessel coordination for refrigerated and shelf-stable cargoes.',
      readTime: '4 min read',
      image: '/images/blogs/blog-3.png',
    },
    {
      id: 'market-updates-asian-trade-demand',
      title: 'Market Updates: Developing Relationships within Asian Food Markets',
      category: 'Market Updates',
      date: 'July 14, 2026',
      excerpt:
        'Analyzing shift in institutional buyer demand toward high-solubility dehydrated vegetable and fruit powders.',
      readTime: '4 min read',
      image: '/images/blogs/blog-4.png',
    },
    {
      id: 'company-news-network-expansion',
      title: 'Company News: Expanding Our International Business Network',
      category: 'Company News',
      date: 'July 5, 2026',
      excerpt:
        'Milestones in scaling our commercial sourcing footprint across Southeast Asia and global trade corridors.',
      readTime: '3 min read',
      image: '/images/blogs/blog-5.png',
    },
  ];

  const filteredGallery =
    selectedGalleryCategory === 'all'
      ? galleryItems
      : galleryItems.filter((i) => i.category === selectedGalleryCategory);

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen pb-24">
      {/* 1. COMPACT HERO & PILL TAB SWITCHER */}
      <section className="bg-white border-b border-[#ececee] pt-16 pb-16 md:pt-20 md:pb-20">
        <ScrollReveal animation="fade-up">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff5a00]" />
                MEDIA & MARKET KNOWLEDGE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-[#09090b]">
                {activeTab === 'gallery'
                  ? 'Inside NAVAL TREASURE GROUP'
                  : 'Insights, Updates & Stories'}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#52525b] leading-relaxed">
                {activeTab === 'gallery'
                  ? 'Visual moments from our sourcing audits, quality inspections, container logistics, and international trade operations.'
                  : 'Brief articles, regulatory updates, and market insights for institutional buyers and trade partners.'}
              </p>

              {/* Awesomic 10000px Pill Switcher */}
              <div className="mt-8 inline-flex p-1.5 bg-[#f4f4f5] rounded-[10000px] border border-[#ececee]">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[10000px] text-xs font-bold transition-all ${activeTab === 'gallery'
                    ? 'bg-[#09090b] text-white shadow-sm scale-105'
                    : 'text-[#52525b] hover:text-[#09090b]'
                    }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Visual Gallery</span>
                </button>
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[10000px] text-xs font-bold transition-all ${activeTab === 'blog'
                    ? 'bg-[#09090b] text-white shadow-sm scale-105'
                    : 'text-[#52525b] hover:text-[#09090b]'
                    }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Trade Insights & Blog</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION A — VISUAL GALLERY */}
      {activeTab === 'gallery' && (
        <section className="py-16 bg-[#f4f4f5]">
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-[1200px] mx-auto px-6">
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedGalleryCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-[10000px] text-xs font-bold transition-all border ${selectedGalleryCategory === cat.id
                      ? 'bg-[#09090b] text-white border-[#09090b]'
                      : 'bg-white text-[#52525b] border-[#ececee] hover:border-[#d4d4d8] hover:text-[#09090b]'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Visual-Only Photo Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxImage(item.image)}
                    className="group rounded-[32px] overflow-hidden cursor-pointer relative aspect-square md:aspect-[4/3] bg-[#e4e4e7] hover-card-lift shadow-sm border border-[#ececee]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle dark gradient overlay on hover for better visibility of icon/tag */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                    <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                      <span className="inline-block px-3 py-1.5 rounded-[12px] bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#09090b] shadow-sm uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="w-14 h-14 rounded-full bg-white text-[#09090b] flex items-center justify-center shadow-xl">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* SECTION B — STREAMLINED BLOG */}
      {activeTab === 'blog' && (
        <section className="py-16 bg-[#f4f4f5]">
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/gallery/${post.id}`}
                    className="group bg-white rounded-[36px] border border-[#ececee] overflow-hidden flex flex-col justify-between hover:border-[#d4d4d8] transition-all hover-card-lift"
                  >
                    <div className="h-56 overflow-hidden bg-[#e4e4e7] relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-[10000px] bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#09090b] border border-[#ececee]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-[11px] text-[#71717a] font-semibold mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#ff5a00]" />
                            <span>{post.date}</span>
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#09090b] mb-2 leading-snug group-hover:text-[#ff5a00] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#52525b] leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#ececee] flex items-center justify-between">
                        <span className="text-xs font-bold text-[#09090b] group-hover:text-[#ff5a00] transition-colors">
                          Read Full Article
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#ff5a00] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* COMPACT BLOG FOOTER BANNER */}
              <div className="mt-16 bg-[#09090b] text-white rounded-[36px] p-10 md:p-14 border border-[#27272a] text-center max-w-4xl mx-auto">
                <span className="inline-block px-3 py-1 rounded-[12px] bg-[#27272a] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-3">
                  STAY CONNECTED
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Stay Connected With Our Trade Advisory
                </h2>
                <p className="mt-3 text-sm text-[#a1a1aa] leading-relaxed max-w-xl mx-auto">
                  Follow our regulatory breakdowns, market demand analyses, and container logistics updates.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#ff5a00] transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Lightbox View"
              className="max-h-[80vh] w-auto rounded-[24px] shadow-2xl object-contain border border-[#27272a]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
