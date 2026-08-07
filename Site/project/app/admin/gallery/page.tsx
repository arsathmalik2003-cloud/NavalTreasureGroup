'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Save, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface GalleryItem {
  id: string;
  image_url: string;
  caption: string | null;
  display_order: number;
  is_published: boolean;
}

export default function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<GalleryItem> | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchItems = async () => {
    const { data } = await supabase.from('gallery_items').select('*').order('display_order');
    if (data) setItems(data);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing || !editing.image_url?.trim()) return;
    setSaving(true);

    if (editing.id) {
      const { id, ...rest } = editing;
      await supabase.from('gallery_items').update(rest).eq('id', id);
    } else {
      await supabase.from('gallery_items').insert(editing);
    }

    setSaving(false);
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this gallery item?')) return;
    await supabase.from('gallery_items').delete().eq('id', id);
    fetchItems();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Gallery</h2>
          <p className="text-sm text-slate-500 mt-1">Manage gallery images</p>
        </div>
        <button
          onClick={() => setEditing({ image_url: '', caption: '', display_order: 0, is_published: true })}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Image
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setEditing(null)}>
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">{editing.id ? 'Edit Image' : 'New Gallery Image'}</h3>
              <button onClick={() => setEditing(null)} className="p-1 rounded hover:bg-slate-100"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL *</label>
                <input
                  value={editing.image_url || ''} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  placeholder="https://..."
                />
                {editing.image_url && (
                  <img src={editing.image_url} alt="Preview" className="mt-2 rounded-lg max-h-40 object-cover" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Caption</label>
                <input
                  value={editing.caption || ''} onChange={(e) => setEditing({ ...editing, caption: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Display Order</label>
                  <input
                    type="number" value={editing.display_order || 0} onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={editing.is_published !== false} onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })} className="rounded border-slate-300 text-blue-600" />
                    <span className="text-sm text-slate-700">Published</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
              <button onClick={handleSave} disabled={saving || !editing.image_url?.trim()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center p-8 text-slate-400">Loading...</div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <p className="text-slate-500 text-sm">No gallery images yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white">
              <img src={item.image_url} alt={item.caption || ''} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button onClick={() => setEditing(item)} className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30"><Pencil className="w-4 h-4" /></button>
                <button onClick={() => handleDelete(item.id)} className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-500/80"><Trash2 className="w-4 h-4" /></button>
              </div>
              <div className="p-3">
                <p className="text-xs text-slate-600 truncate">{item.caption || 'No caption'}</p>
                <span className={`text-[10px] font-medium ${item.is_published ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {item.is_published ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
