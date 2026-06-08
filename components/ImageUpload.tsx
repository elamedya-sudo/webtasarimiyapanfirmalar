"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { UploadCloud, X, Loader2 } from "lucide-react";

interface ImageUploadProps {
  value?: string; // Mevcut görselin URL'si
  onChange: (url: string) => void; // Görsel yüklendiğinde veya silindiğinde tetiklenecek fonksiyon
  folder?: string; // Hangi klasöre yükleneceği (örn: 'logos', 'projects')
}

export default function ImageUpload({ value, onChange, folder = "general" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClient();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      // Dosya adını benzersiz yap (çakışmaları önlemek için)
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;

      // Supabase Storage 'uploads' bucket'ına yükle
      const { error: uploadError } = await supabase.storage
        .from("uploads")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Supabase Yükleme Hatası:", uploadError);
        alert("Görsel yüklenirken bir hata oluştu: " + uploadError.message);
        return;
      }

      // Yüklenen görselin Public URL'sini al
      const { data } = supabase.storage
        .from("uploads")
        .getPublicUrl(filePath);

      // Üst bileşene URL'yi gönder
      onChange(data.publicUrl);

    } catch (error) {
      console.error("Yükleme sırasında beklenmeyen hata:", error);
      alert("Beklenmeyen bir hata oluştu!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      {value ? (
        <div className="relative w-full max-w-sm h-48 rounded-lg overflow-hidden border border-gray-200 group bg-gray-50 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Yüklenen görsel" className="max-w-full max-h-full object-contain p-2" />
          
          {/* Üzerine gelince çıkan silme arayüzü */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={() => onChange("")}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
              title="Görseli Kaldır"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full max-w-sm h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-blue-400 transition-all relative overflow-hidden group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {isUploading ? (
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-3" />
            ) : (
              <UploadCloud className="w-8 h-8 text-gray-400 mb-3 group-hover:text-blue-500 transition-colors" />
            )}
            <p className="mb-2 text-sm text-gray-500 font-medium">
              {isUploading ? "Yükleniyor..." : "Görsel yüklemek için tıklayın"}
            </p>
            <p className="text-xs text-gray-400">SVG, PNG, JPG veya WEBP</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
          />
        </label>
      )}
    </div>
  );
}