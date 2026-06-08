"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export default function HizmetlerListPage() {
  const supabase = createClient();
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServices = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setServices(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu hizmeti silmek istediğinize emin misiniz?")) return;

    const { error } = await supabase.from("services").delete().eq("id", id);
    if (!error) {
      setServices(services.filter((s) => s.id !== id));
    } else {
      alert("Silme işlemi sırasında hata: " + error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Hizmetlerimiz</h1>
        <Link
          href="/admin/hizmetler/yeni"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Yeni Hizmet Ekle
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Hizmetler yükleniyor...</div>
        ) : services.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Henüz hiç hizmet eklenmemiş.</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">Görsel</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Hizmet Adı</th>
                <th className="px-6 py-4 font-semibold text-gray-700">URL (Slug)</th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded bg-gray-100 overflow-hidden border">
                      {service.hero_image && (
                        <img src={service.hero_image} alt={service.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{service.title}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-sm">/{service.slug}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/hizmetler/${service.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link href={`/admin/hizmetler/duzenle/${service.id}`} className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleDelete(service.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}