"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import ImageUpload from "@/components/ImageUpload";
import RichTextEditor from "@/components/RichTextEditor";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function HizmetDuzenlePage() {
  const supabase = createClient();
  const router = useRouter();
  const params = useParams();
  
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    short_description: "",
    content: "",
    hero_image: "",
  });

  useEffect(() => {
    async function fetchService() {
      if (!params.id) return;
      
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", params.id)
        .single();

      if (data) {
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          short_description: data.short_description || "",
          content: data.content || "",
          hero_image: data.hero_image || "",
        });
      } else {
        alert("Hizmet bulunamadı!");
        router.push("/admin/hizmetler");
      }
      setIsLoading(false);
    }

    fetchService();
  }, [params.id, router, supabase]);

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
    setIsSaving(true);

    const { error } = await supabase
      .from("services")
      .update(formData)
      .eq("id", params.id);

    if (!error) {
      router.push("/admin/hizmetler");
    } else {
      alert("Hata: " + error.message);
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-gray-500 font-medium">Hizmet bilgileri yükleniyor...</div>;
  }

  return (
    <div className="max-w-4xl space-y-6 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/hizmetler" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Hizmeti Düzenle</h1>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hizmet Başlığı</label>
              <input type="text" value={formData.title} onChange={handleTitleChange} required className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
              <input type="text" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} required className="w-full border p-2 rounded-lg bg-gray-50 font-mono text-sm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kısa Açıklama (Özet)</label>
                <textarea value={formData.short_description} onChange={(e) => setFormData({...formData, short_description: e.target.value})} rows={3} className="w-full border p-2 rounded-lg resize-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Detaylı Hizmet İçeriği</label>
                <RichTextEditor value={formData.content} onChange={(val) => setFormData({...formData, content: val})} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-4">Hero Görseli</h3>
              <ImageUpload value={formData.hero_image} onChange={(url) => setFormData({...formData, hero_image: url})} folder="services" />
           </div>
           <button type="submit" disabled={isSaving} className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all disabled:opacity-50">
             <Save className="w-5 h-5" />
             {isSaving ? "Güncelleniyor..." : "Değişiklikleri Kaydet"}
           </button>
        </div>
      </form>
    </div>
  );
}