'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <div className="h-64 bg-slate-50 rounded-lg animate-pulse" /> });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'link', 'image'],
      [{ align: [] }],
      ['clean'],
    ],
  }), []);

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'blockquote', 'link', 'image', 'align',
  ];

  return (
    <div className="[&_.ql-toolbar]:rounded-t-lg [&_.ql-toolbar]:border-slate-200 [&_.ql-container]:rounded-b-lg [&_.ql-container]:border-slate-200 [&_.ql-editor]:min-h-[250px] [&_.ql-editor]:text-sm">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your blog post content here..."
      />
    </div>
  );
}
