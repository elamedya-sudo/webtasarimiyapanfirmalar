"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ImageUpload from "@/components/ImageUpload";

export default function AyarlarPage() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    company_name: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    map_iframe: "",
    footer_text: "",
    logo_light: "",
    logo_dark: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  });

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from("settings").select("*").eq("id", 1).single();
      if (data) {
        const sm = data.social_media || {};
        setFormData({
          ...data,
          instagram: sm.instagram || "",
          facebook: sm.facebook || "" ,
          linkedin: sm.linkedin || "",
          twitter: sm.twitter || "",
          youtube: sm.youtube || "",
        });
      }
      setIsLoading(false);
    }
    fetchSettings();
  }, [supabase]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const { instagram, facebook, linkedin, twitter, youtube, ...rest } = formData;
    const payload = { ...rest, social_media: { instagram, facebook, linkedin, twitter, youtube } };

    const { error } = await supabase.from("settings").update(payload).eq("id", 1);
    setMessage(error ? { type: "error", text: "Hata oluştu!" } : { type: "success", text: "Başarıyla güncellendi." });
    setIsSaving(false);
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  if (isLoading) return <div className="p-8 text-gray-500">Yükleniyor...</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <h1 className="text-3xl font-bold text-gray-800">Sistem Ayarları</h1>
      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Kurumsal Bilgiler</h3>
            <input type="text" placeholder="Firma Adı" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} className="w-full border p-2 rounded-lg" />
            <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="Telefon" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="border p-2 rounded-lg" />
               <input type="text" placeholder="WhatsApp" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="border p-2 rounded-lg" />
            </div>
            <textarea placeholder="Adres" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border p-2 rounded-lg" rows={3} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Sosyal Medya & Harita</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Instagram" value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})} className="border p-2 rounded-lg text-sm" />
              <input type="text" placeholder="LinkedIn" value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})} className="border p-2 rounded-lg text-sm" />
            </div>
            <textarea placeholder="Google Maps Iframe" value={formData.map_iframe} onChange={e => setFormData({...formData, map_iframe: e.target.value})} className="w-full border p-2 rounded-lg font-mono text-xs" rows={4} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Logolar</h3>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Logo (Açık Tema)</label>
              <ImageUpload value={formData.logo_light} onChange={url => setFormData({...formData, logo_light: url})} folder="logos" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Logo (Koyu Tema)</label>
              <ImageUpload value={formData.logo_dark} onChange={url => setFormData({...formData, logo_dark: url})} folder="logos" />
            </div>
          </div>
          <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50">
            {isSaving ? "Güncelleniyor..." : "Değişiklikleri Kaydet"}
          </button>
          {message.text && <div className={`p-3 rounded-lg text-center text-sm font-medium ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{message.text}</div>}
        </div>
      </form>
    </div>
  );
}