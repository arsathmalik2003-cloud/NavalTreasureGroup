'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Save, FileText, Eye } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { RichTextEditor } from '@/components/admin/RichTextEditor';

interface BlogPost {
  id: string;
  title: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
}

const emptyPost = { title: '', content: '', excerpt: '', featured_image: '', status: 'draft' as string };

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchPosts = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSave = async () => {
    if (!editing || !editing.title?.trim()) return;
    setSaving(true);

    const payload: Record<string, unknown> = {
      title: editing.title,
      content: editing.content || null,
      excerpt: editing.excerpt || null,
      featured_image: editing.featured_image || null,
      status: editing.status || 'draft',
      updated_at: new Date().toISOString(),
    };

    if (editing.status === 'published' && !editing.published_at) {
      payload.published_at = new Date().toISOString();
    }

    if (editing.id) {
      await supabase.from('blog_posts').update(payload).eq('id', editing.id);
    } else {
      await supabase.from('blog_posts').insert(payload);
    }

    setSaving(false);
    setEditing(null);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    await supabase.from('blog_posts').delete().eq('id', id);
    fetchPosts();
  };

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <button onClick={() => setEditing(null)} className="text-sm text-slate-500 hover:text-slate-700 mb-1 flex items-center gap-1">
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <h2 className="text-2xl font-bold text-slate-800">{editing.id ? 'Edit Post' : 'New Blog Post'}</h2>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={editing.status || 'draft'}
              onChange={(e) => setEditing({ ...editing, status: e.target.value })}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <button onClick={handleSave} disabled={saving || !editing.title?.trim()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
              <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Title *</label>
            <input
              value={editing.title || ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              placeholder="Post title"
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Content</label>
            <RichTextEditor value={editing.content || ''} onChange={(val) => setEditing({ ...editing, content: val })} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Excerpt</label>
              <textarea
                value={editing.excerpt || ''} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                rows={3} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
                placeholder="Short summary for the blog listing..."
              />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Featured Image URL</label>
              <input
                value={editing.featured_image || ''} onChange={(e) => setEditing({ ...editing, featured_image: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                placeholder="https://..."
              />
              {editing.featured_image && (
                <img src={editing.featured_image} alt="Preview" className="mt-2 rounded-lg max-h-32 object-cover" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Blog Posts</h2>
          <p className="text-sm text-slate-500 mt-1">Create and manage blog content</p>
        </div>
        <button onClick={() => setEditing({ ...emptyPost })} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-400">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center">
            <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-slate-500 text-sm">No blog posts yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                {post.featured_image ? (
                  <img src={post.featured_image} alt="" className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                ) : (
                  <div className="w-16 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-slate-300" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-800 truncate">{post.title}</h3>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className={`text-xs font-medium ${post.status === 'published' ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {post.status === 'published' && (
                    <a href={`/gallery/${post.id}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600">
                      <Eye className="w-4 h-4" />
                    </a>
                  )}
                  <button onClick={() => setEditing(post)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
