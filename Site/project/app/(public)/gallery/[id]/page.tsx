'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string | null;
  created_at: string;
}

const fallbackAdvisories: Record<string, BlogPost> = {
  'product-insights-seafood-standards': {
    id: 'product-insights-seafood-standards',
    title: 'Product Insights: Quality Standards in Marine Seafood Sourcing',
    excerpt:
      'Articles about seafood, meat, dehydrated vegetable powders, dehydrated fruit powders, and other products in our portfolio.',
    content: `
      <h2>Maintaining Consistent Seafood Standards</h2>
      <p>Seafood is an important part of our product portfolio. We work with sourcing and supply partners to provide selected marine products for commercial and international markets.</p>
      
      <h3>Our Core Sourcing Principles:</h3>
      <ul>
        <li><strong>Dry Seafood Grading:</strong> Selected dried seafood products sourced according to market and customer requirements.</li>
        <li><strong>Sea Cucumber & Fish Maw Audit:</strong> Sourced for customers and markets where these products are required with documented compliance.</li>
        <li><strong>Grouper Fish Supply:</strong> Sourced according to availability, specifications, and customer requirements.</li>
      </ul>

      <h3>Quality Assurance</h3>
      <p>We focus on maintaining consistent product standards and understanding customer requirements across every product category we serve.</p>
    `,
    featured_image:
      'https://images.pexels.com/photos/37931489/pexels-photo-37931489.jpeg?auto=compress&cs=tinysrgb&w=1000',
    published_at: '2026-08-02T10:00:00Z',
    created_at: '2026-08-02T10:00:00Z',
  },
  'international-trade-cross-border-supply': {
    id: 'international-trade-cross-border-supply',
    title: 'International Trade: Navigating Cross-Border Food Supply',
    excerpt:
      'Information and insights related to sourcing, importing, exporting, international supply, and cross-border business.',
    content: `
      <h2>Supporting the Movement of Products Across Markets</h2>
      <p>International trade requires more than simply connecting buyers and sellers. It requires coordination across sourcing, documentation, transportation, logistics, and delivery requirements.</p>
      
      <h3>Key Import & Export Activities:</h3>
      <ul>
        <li><strong>Supplier & Customer Coordination:</strong> We coordinate communication between customers, suppliers, logistics partners, and other stakeholders involved in the transaction.</li>
        <li><strong>Documentation & Customs Planning:</strong> We support the necessary planning and documentation required for the movement of products.</li>
      </ul>

      <h3>Our Commitment</h3>
      <p>Our focus is on maintaining clear communication, organized documentation, and efficient coordination throughout the trade process.</p>
    `,
    featured_image:
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1000',
    published_at: '2026-07-28T10:00:00Z',
    created_at: '2026-07-28T10:00:00Z',
  },
  'logistics-shipping-vessel-assignment': {
    id: 'logistics-shipping-vessel-assignment',
    title: 'Logistics & Shipping: Vessel Assignment & Container Allotment',
    excerpt:
      'Articles covering topics related to vessel coordination, container logistics, shipment planning, and cargo movement.',
    content: `
      <h2>Maritime & Container Logistics Support</h2>
      <p>Naval Treasure Group supports customers and business partners by coordinating key activities involved in the movement of products between source and destination markets.</p>
      
      <h3>Dedicated Logistics Services:</h3>
      <ul>
        <li><strong>Vessel Assignment Support:</strong> Our team works to coordinate suitable vessel arrangements according to shipment requirements, cargo movement, and operational considerations.</li>
        <li><strong>Container Allotment:</strong> We support container allotment and related shipping coordination for businesses involved in international cargo movement.</li>
      </ul>

      <h3>Operational Objective</h3>
      <p>Our objective is to help customers and partners manage container requirements efficiently and maintain smoother logistics operations.</p>
    `,
    featured_image:
      'https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=1000',
    published_at: '2026-07-20T10:00:00Z',
    created_at: '2026-07-20T10:00:00Z',
  },
  'market-updates-asian-trade-demand': {
    id: 'market-updates-asian-trade-demand',
    title: 'Market Updates: Developing Relationships within Asian Food Markets',
    excerpt:
      'Information about changing customer needs, emerging opportunities, and developments relevant to international food markets.',
    content: `
      <h2>Building Connections Across International Markets</h2>
      <p>Naval Treasure Group serves customers and business partners across international markets, with a particular focus on developing relationships within Asia and expanding into new regions.</p>
      
      <h3>Regional Market Development:</h3>
      <ul>
        <li><strong>International Network:</strong> Supported by relationships with suppliers, producers, customers, logistics partners, and local business communities.</li>
        <li><strong>Emerging Opportunities:</strong> As our business develops, we continue to explore new markets and opportunities where our products, sourcing capabilities, and trade services can create meaningful value.</li>
      </ul>
    `,
    featured_image:
      'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1000',
    published_at: '2026-07-14T10:00:00Z',
    created_at: '2026-07-14T10:00:00Z',
  },
  'company-news-network-expansion': {
    id: 'company-news-network-expansion',
    title: 'Company News: Expanding Our International Business Network',
    excerpt:
      'Updates about Naval Treasure Group, business activities, partnerships, events, milestones, and new developments.',
    content: `
      <h2>Building for the Future</h2>
      <p>Our growth strategy is focused on developing a stronger and more capable international business across five key areas: Product Diversification, Geographic Expansion, Digital Transformation, Strategic Partnerships, and Responsible Growth.</p>
      
      <h3>Strategic Priorities:</h3>
      <ul>
        <li><strong>Strategic Partnerships:</strong> Building long-term relationships with reliable suppliers, distributors, logistics companies, and other business partners.</li>
        <li><strong>Responsible Growth:</strong> Growing the business while maintaining quality standards, responsible sourcing practices, professional operations, and positive relationships with communities.</li>
      </ul>
    `,
    featured_image:
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1000',
    published_at: '2026-07-05T10:00:00Z',
    created_at: '2026-07-05T10:00:00Z',
  },
};

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id as string)
          .eq('status', 'published')
          .maybeSingle();

        if (error || !data) {
          if (fallbackAdvisories[id as string]) {
            setPost(fallbackAdvisories[id as string]);
          } else {
            router.push('/gallery');
            return;
          }
        } else {
          setPost(data);
        }
      } catch (e) {
        if (fallbackAdvisories[id as string]) {
          setPost(fallbackAdvisories[id as string]);
        } else {
          router.push('/gallery');
          return;
        }
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchPost();
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="bg-[#f4f4f5] min-h-screen py-24 flex items-center justify-center">
        <div className="text-sm font-semibold text-[#52525b]">
          Loading article...
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen pb-24">
      {/* Editorial Navigation */}
      <div className="bg-white border-b border-[#ececee] py-4">
        <div className="max-w-[800px] mx-auto px-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#52525b] hover:text-[#09090b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights & Gallery</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white border-b border-[#ececee] pt-12 pb-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-center gap-3 text-xs text-[#71717a] mb-4">
            <Calendar className="w-4 h-4 text-[#ff5a00]" />
            <span>
              {post.published_at
                ? new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
                : 'Trade Publication'}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#09090b]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a00]" />
              Naval Treasure Group International
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#09090b] leading-[1.15]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-base md:text-lg text-[#52525b] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featured_image && (
        <div className="max-w-[1000px] mx-auto px-6 -mt-8">
          <div className="rounded-[36px] overflow-hidden border border-[#ececee] shadow-lg bg-[#e4e4e7] h-[400px]">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Body Content */}
      <article className="max-w-[800px] mx-auto px-6 pt-16">
        <div className="bg-white rounded-[36px] border border-[#ececee] p-8 md:p-14 shadow-sm">
          <div
            className="prose prose-zinc max-w-none text-[#18181b] leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Author/Company Sign-off */}
          <div className="mt-14 pt-8 border-t border-[#ececee] flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#09090b] uppercase tracking-wider">
                Published by
              </p>
              <p className="text-sm text-[#52525b] mt-1">
                Naval Treasure Group International  — Corporate Communication & Trade Advisory Team
              </p>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-[14px] bg-[#09090b] text-white text-xs font-semibold hover:bg-[#18181b] transition-all"
            >
              Contact Advisory Team
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
