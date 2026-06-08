"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css"; // Yeni paketin CSS dosyası

// Yeni paketi import ediyoruz
const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => (
    <div className="h-64 w-full bg-gray-50 border border-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400">
      Editör Yükleniyor...
    </div>
  )
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
// Editörün araç çubuğunu (toolbar) tüm özelliklerle donatıyoruz
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }], // Yazı rengi ve arka plan rengi
      [{ 'align': [] }], // Sola, ortaya, sağa yaslama
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }], // Liste ve girinti
      ['link', 'video', 'clean'] // Link, video ekleme ve format temizleme
    ],
  };

  return (
    <div className="bg-white relative">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        modules={modules}
        className="h-64 mb-12" 
      />
    </div>
  );
}