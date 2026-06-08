"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export default function BasariHikayeleriListPage() {
  const supabase = createClient();
  const [stories, setStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStories = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("success_stories")
      .select("*, categories(title)")
      .order("created_at", { ascending: false });

    if (data) setStories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu başarı hikayesini silmek istediğinize emin misiniz?")) return;

    const { error } = await supabase.from("success_stories").delete().eq("id", id);
    if (!error) {
      setStories(stories.filter((s) => s.id !== id));
    } else {
      alert("Silme işlemi sırasında hata: " + error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Başarı Hikayeleri</h1>
        <Link
          href="/admin/basari-hikayeleri/yeni"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Yeni Hikaye Ekle
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Hikayeler yükleniyor...</div>
        ) : stories.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Henüz hiç başarı hikayesi eklenmemiş.</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">Görsel</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Başlık</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Kategori</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Durum</th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {stories.map((story) => (
                <tr key={story.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded bg-gray-100 overflow-hidden border">
                      {story.cover_image && (
                        <img src={story.cover_image} alt={story.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{story.title}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {story.categories?.title || <span className="text-red-400 text-sm">Kategori Yok</span>}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${story.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {story.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/basari-hikayeleri/${story.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link href={`/admin/basari-hikayeleri/duzenle/${story.id}`} className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleDelete(story.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
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