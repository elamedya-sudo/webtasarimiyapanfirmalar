"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import ImageUpload from "@/components/ImageUpload";
import RichTextEditor from "@/components/RichTextEditor";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function YeniBlogPage() {
  const supabase = createClient();
  const router = useRouter();
  
  const [categories, setCategories] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Form verilerimiz
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category_id: "",
    cover_image: "",
    content: "",
    author: "",
    status: "published",
  });

  // Sayfa açıldığında Blog kategorilerini çek
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase
        .from("categories")
        .select("id, title")
        .eq("type", "blog"); // Sadece blog kategorilerini al
      
      if (data) {
        setCategories(data);
        // Eğer kategori varsa, varsayılan olarak ilkini seçili yap
        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, category_id: data[0].id }));
        }
      }
    }
    fetchCategories();
  }, [supabase]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    
    setFormData({ ...formData, title, slug });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category_id) {
      alert("Lütfen bir kategori seçin! Kategori yoksa önce Kategori Yönetimi sayfasından ekleyin.");
      return;
    }

    setIsSaving(true);
    const { error } = await supabase.from("blogs").insert([formData]);

    if (!error) {
      router.push("/admin/blog");
    } else {
      alert("Hata: " + error.message);
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl space-y-6 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Yeni Blog Yazısı</h1>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SOL TARAF - İÇERİK */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Yazı Başlığı</label>
              <input type="text" value={formData.title} onChange={handleTitleChange} required className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL (Slug)</label>
              <input type="text" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} required className="w-full border p-2 rounded-lg bg-gray-50 font-mono text-sm outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog İçeriği</label>
                <RichTextEditor value={formData.content} onChange={(val) => setFormData({...formData, content: val})} />
            </div>
          </div>
        </div>

        {/* SAĞ TARAF - AYARLAR & GÖRSEL */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">Yayın Ayarları</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select 
                  value={formData.category_id} 
                  onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                  className="w-full border p-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  {categories.length === 0 && <option value="">Kategori Bulunamadı</option>}
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Yazar</label>
                <input type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Örn: Ela Teknoloji Ekibi" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
                <select 
                  value={formData.status} 
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full border p-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="published">Hemen Yayınla</option>
                  <option value="draft">Taslak Olarak Kaydet</option>
                </select>
              </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-4">Kapak Görseli</h3>
              <ImageUpload value={formData.cover_image} onChange={(url) => setFormData({...formData, cover_image: url})} folder="blog" />
           </div>

           <button type="submit" disabled={isSaving} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all disabled:opacity-50">
             <Save className="w-5 h-5" />
             {isSaving ? "Kaydediliyor..." : "İçeriği Kaydet"}
           </button>
        </div>
      </form>
    </div>
  );
}