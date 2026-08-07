'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Image, FileText, MessageSquare, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Stats {
  products: number;
  gallery: number;
  posts: number;
  enquiries: number;
  unread: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ products: 0, gallery: 0, posts: 0, enquiries: 0, unread: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const [pRes, gRes, bRes, eRes, uRes] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_items').select('id', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
        supabase.from('enquiries').select('id', { count: 'exact', head: true }),
        supabase.from('enquiries').select('id', { count: 'exact', head: true }).eq('is_read', false),
      ]);
      setStats({
        products: pRes.count || 0,
        gallery: gRes.count || 0,
        posts: bRes.count || 0,
        enquiries: eRes.count || 0,
        unread: uRes.count || 0,
      });
      setLoading(false);
    }
    fetchStats();
  }, []);

  const cards = [
    { label: 'Products', value: stats.products, icon: Package, href: '/admin/products', color: 'bg-blue-50 text-blue-600' },
    { label: 'Gallery Items', value: stats.gallery, icon: Image, href: '/admin/gallery', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Blog Posts', value: stats.posts, icon: FileText, href: '/admin/blog', color: 'bg-amber-50 text-amber-600' },
    { label: 'Enquiries', value: stats.enquiries, badge: stats.unread > 0 ? `${stats.unread} unread` : undefined, icon: MessageSquare, href: '/admin/enquiries', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">Overview of your website content</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center`}>
                <card.icon className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
            </div>
            <div className="text-2xl font-bold text-slate-800">{loading ? '-' : card.value}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-500">{card.label}</span>
              {card.badge && (
                <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-xs font-medium">{card.badge}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-700 mb-3">Quick Actions</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/admin/products" className="px-4 py-3 rounded-lg bg-slate-50 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-center font-medium">
            + Add Product
          </Link>
          <Link href="/admin/gallery" className="px-4 py-3 rounded-lg bg-slate-50 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-center font-medium">
            + Add Gallery Image
          </Link>
          <Link href="/admin/blog" className="px-4 py-3 rounded-lg bg-slate-50 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-600 transition-colors text-center font-medium">
            + Write Blog Post
          </Link>
          <Link href="/admin/enquiries" className="px-4 py-3 rounded-lg bg-slate-50 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-colors text-center font-medium">
            View Enquiries
          </Link>
        </div>
      </div>
    </div>
  );
}
