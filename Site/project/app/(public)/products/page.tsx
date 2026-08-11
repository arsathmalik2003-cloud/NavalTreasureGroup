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
      desc: 'Small, flavorful anchovies cleaned and naturally dried to preserve their taste and quality.',
      specs: ['Cleaned & Sorted', 'Natural Drying', 'Rich Flavor', 'Bulk Supply'],
      image: '/images/products/product-8.png',

    },
   {
  id: 'dried-prawns',
  name: 'Dried Prawns / Shrimp',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Fresh prawns cleaned and dried to retain their natural taste, aroma, and texture.',
  specs: ['Cleaned & Dried', 'Natural Taste', 'Uniform Quality', 'Wholesale Ready'],
  image: '/images/products/product-9.png',
},
  {
  id: 'dried-sardines',
  name: 'Dried Sardines',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Fresh sardines cleaned and dried to maintain their natural flavor and good quality.',
  specs: ['Freshly Processed', 'Rich in Flavor', 'Well Cleaned', 'Long Shelf Life'],
  image: '/images/products/product-10.png',
},
   {
  id: 'dried-mackerel',
  name: 'Dried Mackerel',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Mackerel cleaned and dried to preserve its firm texture, rich taste, and natural seafood flavor.',
  specs: ['Firm Texture', 'Traditional Drying', 'Clean Processed', 'Bulk Available'],
  image: '/images/products/product-11.png',
},
   {
  id: 'dried-bombay-duck',
  name: 'Dried Bombay Duck',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Bombay duck naturally dried to retain its distinctive taste and delicate texture.',
  specs: ['Naturally Dried', 'Delicate Texture', 'Clean & Sorted', 'Market Ready'],
  image: '/images/products/product-12.png',
},
   {
  id: 'dried-ribbon-fish',
  name: 'Dried Ribbon Fish',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Ribbon fish cleaned and dried to preserve its natural flavor, firm texture, and seafood quality.',
  specs: ['Firm & Meaty', 'Cleaned Fish', 'Natural Drying', 'Wholesale Supply'],
  image: '/images/products/product-13.png',
},
 {
  id: 'dried-squid',
  name: 'Dried Squid',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Cleaned squid carefully dried to retain its natural taste, firm bite, and fresh seafood character.',
  specs: ['Cleanly Processed', 'Firm Texture', 'Natural Flavor', 'Ready for Packing'],
  image: '/images/products/product-14.png',
},
   {
  id: 'dried-shark',
  name: 'Dried Shark',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Shark meat cleaned and dried to maintain its firm texture and rich, distinctive seafood taste.',
  specs: ['Firm Cut', 'Clean Processed', 'Rich Taste', 'Bulk Packing'],
  image: '/images/products/product-15.png',
},
   {
  id: 'dried-stingray',
  name: 'Dried Stingray',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Stingray carefully cleaned and dried to retain its distinctive taste and firm, meaty texture.',
  specs: ['Meaty Texture', 'Carefully Cleaned', 'Slow Dried', 'Bulk Supply'],
  image: '/images/products/product-16.png',
},
    {
  id: 'dried-croaker',
  name: 'Dried Croaker',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Croaker fish cleaned and dried to preserve its natural flavor, texture, and traditional seafood taste.',
  specs: ['Naturally Dried', 'Clean & Sorted', 'Rich Seafood Taste', 'Bulk Orders'],
  image: '/images/products/product-17.png',
},
    {
  id: 'dried-catfish',
  name: 'Dried Catfish',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Catfish cleaned and dried to retain its hearty flavor and firm texture for everyday cooking.',
  specs: ['Hearty Flavor', 'Firm Texture', 'Clean Processed', 'Easy to Store'],
  image: '/images/products/product-18.png',
},
   {
  id: 'dried-flying-fish',
  name: 'Dried Flying Fish',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Flying fish cleaned and dried to preserve its distinctive taste and natural seafood character.',
  specs: ['Distinctive Flavor', 'Whole Fish', 'Carefully Dried', 'Storage Friendly'],
  image: '/images/products/product-19.png',
},
    {
  id: 'dried-cuttlefish',
  name: 'Dried Cuttlefish',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Cuttlefish cleaned and dried to maintain its rich seafood flavor and naturally firm texture.',
  specs: ['Rich Seafood Taste', 'Firm Texture', 'Expertly Cleaned', 'Dry Packed'],
  image: '/images/products/product-20.png',
},
    {
  id: 'dried-clams',
  name: 'Dried Clams',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Fresh clams cleaned and dried to retain their natural seafood flavor and rich taste.',
  specs: ['Naturally Processed', 'Cleaned Clams', 'Rich Taste', 'Sealed Packing'],
  image: '/images/products/product-21.png',
},
   {
  id: 'sandfish-sea-cucumber',
  name: 'Sandfish / Sand Sea Cucumber',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Carefully cleaned and dried sandfish with a firm texture and distinctive marine flavor.',
  specs: ['Carefully Cleaned', 'Firm Texture', 'Specialty Product', 'Export Packing'],
  image: '/images/products/product-22.png',
},
   {
  id: 'sandfish-sea-cucumber',
  name: 'Sandfish / Sand Sea Cucumber',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Carefully cleaned and dried sandfish with a firm texture and distinctive marine flavor.',
  specs: ['Carefully Cleaned', 'Firm Texture', 'Specialty Product', 'Export Packing'],
  image: '/images/products/product-22.png',
},
    {
  id: 'black-teatfish-sea-cucumber',
  name: 'Black Teatfish (Sea Cucumber)',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Black teatfish carefully cleaned and dried to maintain its natural form and firm texture.',
  specs: ['Premium Selection', 'Firm Body', 'Clean Processed', 'Specialty Packing'],
  image: '/images/products/product-24.png',
},
   {
  id: 'prickly-redfish-sea-cucumber',
  name: 'Prickly Redfish (Sea Cucumber)',
  category: 'seafood',
  tag: 'Seafood & Marine Products',
  desc: 'Prickly redfish cleaned and dried to preserve its natural appearance, firm texture, and quality.',
  specs: ['Selected Quality', 'Firm Texture', 'Thoroughly Cleaned', 'Specialty Seafood'],
  image: '/images/products/product-25.png',
},
   {
  id: 'commercial-meat',
  name: 'Commercial Meat Products',
  category: 'meat',
  tag: 'Meat Products',
  desc: 'Quality meat products prepared for reliable wholesale supply and commercial buyers.',
  specs: ['Quality Selected', 'Hygienic Handling', 'Cold Chain Ready'],
  image: '/images/products/product-5.png',
},
   {
  id: 'mutton',
  name: 'Mutton',
  category: 'meat',
  tag: 'Meat Products',
  desc: 'Fresh mutton sourced from selected livestock and processed with care for quality, taste, and tenderness.',
  specs: ['Selected Cuts', 'Fresh Processing', 'Hygienic Handling', 'Cold Chain Ready'],
  image: '/images/products/product-26.png',
},
   {
  id: 'chicken',
  name: 'Chicken',
  category: 'meat',
  tag: 'Meat Products',
  desc: 'Fresh chicken sourced from quality poultry and carefully processed for clean handling and natural taste.',
  specs: ['Fresh Supply', 'Quality Checked', 'Clean Processing', 'Chilled Delivery'],
  image: '/images/products/product-27.png',
}, 
 {
  id: 'beef',
  name: 'Beef',
  category: 'meat',
  tag: 'Meat Products',
  desc: 'Quality beef from selected livestock, processed carefully to maintain freshness, flavor, and tenderness.',
  specs: ['Selected Cuts', 'Freshly Processed', 'Quality Inspected', 'Chilled Supply'],
  image: '/images/products/product-28.png',
},
    {
  id: 'lamb',
  name: 'Lamb',
  category: 'meat',
  tag: 'Meat Products',
  desc: 'Tender lamb sourced from selected livestock and handled carefully to retain its fresh taste and quality.',
  specs: ['Tender Cuts', 'Fresh Handling', 'Hygiene Controlled', 'Cold Storage Ready'],
  image: '/images/products/product-29.png',
},
    {
  id: 'vegetable-powders',
  name: 'Dehydrated Vegetable Powders',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Finely processed vegetable powders made from selected vegetables for easy use in food products and cooking.',
  specs: ['Fine Powder', 'Low Moisture', 'Natural Color'],
  image: '/images/products/product-6.png',
},
   {
  id: 'dehydrated-carrot-powder',
  name: 'Dehydrated Carrot Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Carrots finely dried and ground into a smooth powder with a natural color and mild flavor.',
  specs: ['Fine Ground', 'Natural Color', 'Smooth Texture', 'Easy to Blend'],
  image: '/images/products/product-30.png',
},
   {
  id: 'dehydrated-beetroot-powder',
  name: 'Dehydrated Beetroot Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Beetroot gently dried and finely milled to retain its natural color, earthy taste, and smooth consistency.',
  specs: ['Deep Natural Color', 'Fine Milled', 'Earthy Flavor', 'Easy to Mix'],
  image: '/images/products/product-31.png',
},
    {
  id: 'dehydrated-mushroom-powder',
  name: 'Dehydrated Mushroom Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Mushrooms dried and finely ground into a savory powder with a rich aroma and natural flavor.',
  specs: ['Savory Aroma', 'Fine Powder', 'Rich Flavor', 'Quick to Use'],
  image: '/images/products/product-32.png',
},
    {
  id: 'dehydrated-garlic-powder',
  name: 'Dehydrated Garlic Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Fresh garlic dried and finely ground to deliver a strong aroma and bold natural flavor.',
  specs: ['Bold Aroma', 'Fine Ground', 'Strong Flavor', 'Easy to Store'],
  image: '/images/products/product-33.png',
},
    {
  id: 'dehydrated-onion-powder',
  name: 'Dehydrated Onion Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Fresh onions dried and finely milled to provide a smooth powder with a natural savory taste.',
  specs: ['Savory Taste', 'Fine Milled', 'Natural Aroma', 'Smooth Blend'],
  image: '/images/products/product-34.png',
},
   {
  id: 'dehydrated-spinach-powder',
  name: 'Dehydrated Spinach Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Fresh spinach leaves gently dried and powdered to retain their natural green color and mild leafy flavor.',
  specs: ['Green Color', 'Leafy Flavor', 'Fine Texture', 'Easy to Blend'],
  image: '/images/products/product-35.png',
},
   {
  id: 'dehydrated-ginger-powder',
  name: 'Dehydrated Ginger Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Fresh ginger dried and finely ground to preserve its warm aroma, spicy taste, and natural character.',
  specs: ['Warm Aroma', 'Spicy Flavor', 'Fine Ground', 'Easy to Mix'],
  image: '/images/products/product-36.png',
},
   {
  id: 'dehydrated-moringa-leaf-powder',
  name: 'Dehydrated Moringa Leaf Powder',
  category: 'vegetable_powder',
  tag: 'Dehydrated Vegetable Powders',
  desc: 'Moringa leaves gently dried and finely powdered to retain their natural green color and earthy taste.',
  specs: ['Leaf Powder', 'Natural Green', 'Earthy Taste', 'Fine Milled'],
  image: '/images/products/product-37.png',
},
    {
  id: 'fruit-powders',
  name: 'Dehydrated Fruit Powders',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Naturally flavored fruit powders made from selected fruits for convenient use in drinks, foods, and recipes.',
  specs: ['Fruit Based', 'Fine Texture', 'Easy to Blend'],
  image: '/images/products/product-7.png',
},
   {
  id: 'dehydrated-banana-powder',
  name: 'Dehydrated Banana Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Ripe bananas dried and finely powdered to retain their natural sweetness, aroma, and smooth fruit flavor.',
  specs: ['Natural Sweetness', 'Smooth Powder', 'Ripe Fruit', 'Easy to Mix', 'Dry Packed'],
  image: '/images/products/product-38.png',
},
   {
  id: 'dehydrated-mango-powder',
  name: 'Dehydrated Mango Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Ripe mangoes dried and finely ground to capture their bright color, tropical aroma, and naturally sweet flavor.',
  specs: ['Tropical Flavor', 'Bright Color', 'Fine Ground', 'Rich Aroma', 'Food Ready'],
  image: '/images/products/product-39.png',
},
   {
  id: 'dehydrated-pineapple-powder',
  name: 'Dehydrated Pineapple Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Fresh pineapple dried and finely powdered to preserve its tangy taste, tropical aroma, and natural fruit character.',
  specs: ['Tangy Flavor', 'Tropical Aroma', 'Fine Powder', 'Natural Fruit Base', 'Easy to Blend'],
  image: '/images/products/product-40.png',
},
   {
  id: 'dehydrated-papaya-powder',
  name: 'Dehydrated Papaya Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Ripe papaya dried and finely milled to retain its mild sweetness, smooth texture, and natural tropical flavor.',
  specs: ['Mild Sweetness', 'Smooth Texture', 'Tropical Taste', 'Fine Milled', 'Easy to Use'],
  image: '/images/products/product-41.png',
},
    {
  id: 'dehydrated-pomegranate-powder',
  name: 'Dehydrated Pomegranate Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Pomegranate dried and finely powdered to preserve its tangy-sweet taste, rich color, and fruity aroma.',
  specs: ['Tangy-Sweet Taste', 'Rich Color', 'Fruity Aroma', 'Fine Powder', 'Versatile Use'],
  image: '/images/products/product-42.png',
},
   {
  id: 'dehydrated-guava-powder',
  name: 'Dehydrated Guava Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Ripe guava dried and finely ground to retain its sweet tropical flavor, fresh aroma, and natural character.',
  specs: ['Sweet Flavor', 'Fresh Aroma', 'Tropical Fruit', 'Fine Ground', 'Easy to Blend'],
  image: '/images/products/product-43.png',
},
   {
  id: 'dehydrated-grape-powder',
  name: 'Dehydrated Grape Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Ripe grapes dried and finely powdered to preserve their fruity taste, natural sweetness, and pleasant aroma.',
  specs: ['Fruity Taste', 'Natural Sweetness', 'Fine Powder', 'Rich Aroma', 'Blend Friendly'],
  image: '/images/products/product-44.png',
},
    {
  id: 'dehydrated-avocado-powder',
  name: 'Dehydrated Avocado Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Mature avocados dried and finely processed to retain their creamy taste, mild aroma, and natural character.',
  specs: ['Creamy Flavor', 'Smooth Powder', 'Mild Aroma', 'Fine Processed', 'Versatile Ingredient'],
  image: '/images/products/product-45.png',
},
   {
  id: 'dehydrated-orange-powder',
  name: 'Dehydrated Orange Powder',
  category: 'fruit_powder',
  tag: 'Dehydrated Fruit Powders',
  desc: 'Fresh oranges dried and finely powdered to retain their bright citrus flavor, refreshing aroma, and natural color.',
  specs: ['Citrus Flavor', 'Bright Color', 'Fresh Aroma', 'Fine Powder', 'Easy to Blend'],
  image: '/images/products/product-46.png',
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
