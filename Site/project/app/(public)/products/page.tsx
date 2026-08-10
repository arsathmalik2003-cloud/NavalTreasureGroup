'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Fish,
  Beef,
  Leaf,
  Cherry,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCat);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'seafood', label: 'Seafood & Marine' },
    { id: 'meat', label: 'Meat Products' },
    { id: 'vegetable_powder', label: 'Vegetable Powders' },
    { id: 'fruit_powder', label: 'Fruit Powders' },
  ];

  const allProducts = [
    {
      id: 'dry-seafood',
      name: 'Dry Seafood',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Selected dried seafood products graded according to international market specifications.',
      specs: ['Export Grade', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-1.png',
    },
    {
      id: 'sea-cucumber',
      name: 'Sea Cucumber',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried sea cucumber sourced with documented origin compliance.',
      specs: ['Export Standard', 'Size Graded', 'Sourced to Order'],
      image: '/images/products/product-2.png',
    },
    {
      id: 'fish-maw',
      name: 'Fish Maw',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Grade A fish maw products for institutional and culinary international markets.',
      specs: ['High Clarity', 'Verified Harvest', 'Bulk Cartons'],
      image: '/images/products/product-3.png',
    },
    {
      id: 'grouper-fish',
      name: 'Grouper Fish',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Chilled and frozen grouper fish sourced with strict cold-chain quality control.',
      specs: ['IQF / Chilled', 'Custom Sizing', 'Cold Chain Audited'],
      image: '/images/products/product-4.png',
    },
    {
      id: 'dried-anchovies',
      name: 'Dried Anchovies',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried anchovies carefully selected and naturally dried for excellent flavor, quality, and shelf stability. Suitable for domestic and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-8.png',
    },
    {
      id: 'dried-prawns',
      name: 'Dried Prawns / Shrimp',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried prawns carefully selected and processed for rich flavor, consistent quality, and extended shelf life. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-9.png',
    },
    {
      id: 'dried-sardines',
      name: 'Dried Sardines',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried sardines carefully selected and naturally processed to preserve their rich flavor, nutritional value, and quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-10.png',
    },
    {
      id: 'dried-mackerel',
      name: 'Dried Mackerel',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried mackerel carefully selected and traditionally processed to retain its rich taste, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-11.png',
    },
    {
      id: 'dried-bombay-duck',
      name: 'Dried Bombay Duck',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried Bombay duck carefully selected and traditionally dried to preserve its distinctive flavor, delicate texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-12.png',
    },
    {
      id: 'dried-ribbon-fish',
      name: 'Dried Ribbon Fish',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried ribbon fish carefully selected and traditionally processed to preserve its distinctive flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-13.png',
    },
    {
      id: 'dried-squid',
      name: 'Dried Squid',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried squid carefully selected and expertly processed to preserve its rich seafood flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-14.png',
    },
    {
      id: 'dried-shark',
      name: 'Dried Shark',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried shark carefully selected and traditionally processed to preserve its rich flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-15.png',
    },
    {
      id: 'dried-stingray',
      name: 'Dried Stingray',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried stingray carefully selected and traditionally processed to preserve its rich flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-16.png',
    },
    {
      id: 'dried-croaker',
      name: 'Dried Croaker',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried croaker carefully selected and traditionally processed to preserve its rich flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-17.png',
    },
    {
      id: 'dried-catfish',
      name: 'Dried Catfish',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried catfish carefully selected and traditionally processed to preserve its rich flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-18.png',
    },
    {
      id: 'dried-flying-fish',
      name: 'Dried Flying Fish',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried flying fish carefully selected and traditionally processed to preserve its distinctive flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-19.png',
    },
    {
      id: 'dried-cuttlefish',
      name: 'Dried Cuttlefish',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried cuttlefish carefully selected and expertly processed to preserve its rich flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-20.png',
    },
    {
      id: 'dried-clams',
      name: 'Dried Clams',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium dried clams carefully selected and naturally processed to preserve their rich seafood flavor, firm texture, and natural quality. Suitable for retail, wholesale, and international seafood markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-21.png',
    },
    {
      id: 'sandfish-sea-cucumber',
      name: 'Sandfish / Sand Sea Cucumber',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium sandfish carefully selected and expertly processed to preserve its natural quality, firm texture, and distinctive seafood characteristics. Suitable for wholesale, specialty seafood, and international export markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-22.png',
    },
    {
      id: 'white-teatfish-sea-cucumber',
      name: 'White Teatfish (Sea Cucumber)',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium white teatfish carefully selected and expertly processed to preserve its natural quality, firm texture, and distinctive characteristics. Suitable for specialty seafood, wholesale, and international export markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-23.png',
    },
    {
      id: 'black-teatfish-sea-cucumber',
      name: 'Black Teatfish (Sea Cucumber)',
      category: 'seafood',
      tag: 'Seafood & Marine Products',
      desc: 'Premium black teatfish carefully selected and expertly processed to preserve its natural quality, firm texture, and distinctive characteristics. Suitable for specialty seafood, wholesale, and international export markets.',
      specs: ['Export Grade', 'Size Graded', 'Moisture Audited', 'Custom Packaging'],
      image: '/images/products/product-24.png',
    },
    {
      id: 'commercial-meat',
      name: 'Commercial Meat Products',
      category: 'meat',
      tag: 'Meat Products',
      desc: 'Dependable sourcing and supply planning for international commercial meat buyers.',
      specs: ['Traceable Origin', 'Verified Slaughter', 'Refrigerated Supply'],
      image: '/images/products/product-5.png',
    },
    {
      id: 'vegetable-powders',
      name: 'Dehydrated Vegetable Powders',
      category: 'vegetable_powder',
      tag: 'Dehydrated Vegetable Powders',
      desc: 'Shelf-stable vegetable ingredients for industrial food manufacturing and seasoning.',
      specs: ['Extended Shelf Life', 'Moisture < 8%', 'Mesh Fineness Graded'],
      image: '/images/products/product-6.png',
    },
    {
      id: 'fruit-powders',
      name: 'Dehydrated Fruit Powders',
      category: 'fruit_powder',
      tag: 'Dehydrated Fruit Powders',
      desc: 'Highly soluble fruit powders for beverages, confectionery, and nutritional applications.',
      specs: ['High Solubility', 'Custom Flavor Profile', 'Hygienic Foil Drums'],
      image: '/images/products/product-7.png',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen pb-24">
      {/* 1. COMPACT HERO & CATEGORY PILL FILTER */}
      <section className="bg-white border-b border-[#ececee] pt-16 pb-16 md:pt-20 md:pb-20">
        <ScrollReveal animation="fade-up">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5a00]" />
              VISUAL PRODUCT CATALOG
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-[#09090b]">
              Quality Food Products for International Markets
            </h1>
            <p className="mt-5 text-base md:text-lg text-[#52525b] leading-relaxed">
              Explore our portfolio of seafood, meat, dehydrated vegetable powders, and dehydrated fruit powders. Click any item to request specifications and availability.
            </p>
          </div>

          {/* Awesomic Pill Filter */}
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-[10000px] text-xs font-bold transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-[#09090b] text-white border-[#09090b] shadow-sm scale-105'
                    : 'bg-white text-[#52525b] border-[#ececee] hover:border-[#d4d4d8] hover:text-[#09090b]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 2. COMPACT VISUAL PRODUCT GRID WITH CURATED PHOTOGRAPHY */}
      <section className="py-16 bg-[#f4f4f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div key={`grid-${selectedCategory}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[36px] border border-[#ececee] overflow-hidden flex flex-col justify-between hover:border-[#d4d4d8] transition-all hover-card-lift"
              >
                {/* Product Image */}
                <div className="h-60 overflow-hidden bg-[#e4e4e7] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-[10000px] bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#09090b] border border-[#ececee] uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Product Details & Specs */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#09090b]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#52525b] mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Bulleted Specification Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] bg-[#f4f4f5] border border-[#ececee] text-[11px] font-semibold text-[#09090b]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#ff5a00]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* One-Click Enquiry Action */}
                  <div className="mt-8 pt-4 border-t border-[#ececee] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#71717a]">
                      Custom Specifications
                    </span>
                    <Link
                      href={`/contact?product=${encodeURIComponent(item.name)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] hover:text-[#ff5a00] transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff5a00]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. CUSTOM SOURCING BANNER (COMPACT) */}
          <ScrollReveal animation="fade-up" delay={80}>
          <div className="mt-16 bg-[#09090b] text-white rounded-[36px] p-10 md:p-14 border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-[12px] bg-[#27272a] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-3">
                CUSTOM SOURCING
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Looking for a Specific Product Not Listed?
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-2 max-w-xl">
                Contact our team with your exact volume, destination, and product requirements. We leverage our network across Asia to fulfill custom orders.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-[14px] bg-white text-[#09090b] text-sm font-bold hover:bg-[#ececee] transition-all inline-flex items-center gap-2"
              >
                <span>Send Custom Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
