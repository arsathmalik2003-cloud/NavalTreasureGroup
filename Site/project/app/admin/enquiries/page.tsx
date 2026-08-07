'use client';

import { useEffect, useState } from 'react';
import { MessageSquare, Mail, Phone, Calendar, Eye, Trash2, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const fetchEnquiries = async () => {
    const { data } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
    if (data) setEnquiries(data);
    setLoading(false);
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const markAsRead = async (id: string) => {
    await supabase.from('enquiries').update({ is_read: true }).eq('id', id);
    setEnquiries((prev) => prev.map((e) => e.id === id ? { ...e, is_read: true } : e));
  };

  const handleView = (enquiry: Enquiry) => {
    setSelected(enquiry);
    if (!enquiry.is_read) markAsRead(enquiry.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this enquiry?')) return;
    await supabase.from('enquiries').delete().eq('id', id);
    if (selected?.id === id) setSelected(null);
    fetchEnquiries();
  };

  const unreadCount = enquiries.filter((e) => !e.is_read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Enquiries</h2>
          <p className="text-sm text-slate-500 mt-1">
            {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-slate-400">Loading...</div>
            ) : enquiries.length === 0 ? (
              <div className="p-8 text-center">
                <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500 text-sm">No enquiries received yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 max-h-[70vh] overflow-y-auto">
                {enquiries.map((eq) => (
                  <button
                    key={eq.id}
                    onClick={() => handleView(eq)}
                    className={`w-full text-left px-4 py-3.5 hover:bg-slate-50 transition-colors ${
                      selected?.id === eq.id ? 'bg-blue-50' : ''
                    } ${!eq.is_read ? 'border-l-2 border-blue-500' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm truncate ${!eq.is_read ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>
                            {eq.name}
                          </span>
                          {!eq.is_read && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">{eq.subject}</p>
                      </div>
                      <span className="text-[10px] text-slate-400 flex-shrink-0">
                        {new Date(eq.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{selected.subject}</h3>
                  <p className="text-sm text-slate-500 mt-1">From {selected.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => handleDelete(selected.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setSelected(null)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 lg:hidden">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href={`mailto:${selected.email}`} className="hover:text-blue-600">{selected.email}</a>
                </div>
                {selected.phone && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <a href={`tel:${selected.phone}`} className="hover:text-blue-600">{selected.phone}</a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {new Date(selected.created_at).toLocaleString()}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-sm font-medium text-slate-700 mb-2">Message</h4>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>

              <div className="mt-6">
                <a
                  href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Reply via Email
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
              <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">Select an enquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
