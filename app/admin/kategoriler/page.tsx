"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Trash2, Plus, Tag } from "lucide-react";

export default function KategorilerPage() {
  const supabase = createClient();
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Yeni Kategori Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    type: "blog", // varsayılan
  });

  const fetchCategories = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setCategories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const { data, error } = await supabase
      .from("categories")
      .insert([formData])
      .select();

    if (!error && data) {
      setCategories([data[0], ...categories]);
      setFormData({ title: "", slug: "", type: formData.type }); // Formu temizle
    } else {
      alert("Hata oluştu: " + error?.message);
    }
    setIsSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu kategoriyi silmek istediğinize emin misiniz? (Bağlı yazılar etkilenebilir)")) return;

    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (!error) {
      setCategories(categories.filter((c) => c.id !== id));
    } else {
      alert("Silinirken hata oluştu.");
    }
  };

  // Kategorileri türlerine göre ayırıyoruz (Tabloda gruplamak için)
  const blogCategories = categories.filter((c) => c.type === "blog");
  const storyCategories = categories.filter((c) => c.type === "success_story");

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Tag className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Kategori Yönetimi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SOL TARAF: YENİ EKLEME FORMU */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Yeni Kategori Ekle</h3>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Türü</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border p-2 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="blog">Blog Kategorisi</option>
                  <option value="success_story">Başarı Hikayesi Kategorisi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Adı</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  required
                  className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                <input
                  type="text"
                  value={formData.slug}
                  readOnly
                  className="w-full border p-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-mono outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSaving || !formData.title}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <Plus className="w-5 h-5" />
                {isSaving ? "Ekleniyor..." : "Ekle"}
              </button>
            </form>
          </div>
        </div>

        {/* SAĞ TARAF: KATEGORİ LİSTELERİ */}
        <div className="lg:col-span-2 space-y-8">
          {isLoading ? (
            <div className="text-gray-500 bg-white p-8 rounded-xl shadow-sm border text-center">Kategoriler yükleniyor...</div>
          ) : (
            <>
              {/* Blog Kategorileri Tablosu */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-blue-50 px-6 py-3 border-b border-blue-100">
                  <h3 className="font-semibold text-blue-800">Blog Kategorileri ({blogCategories.length})</h3>
                </div>
                {blogCategories.length === 0 ? (
                  <p className="p-6 text-gray-500 text-sm">Henüz blog kategorisi eklenmemiş.</p>
                ) : (
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y">
                      {blogCategories.map((cat) => (
                        <tr key={cat.id} className="hover:bg-gray-50">
                          <td className="px-6 py-3 font-medium text-gray-800">{cat.title}</td>
                          <td className="px-6 py-3 text-gray-500 font-mono">/{cat.slug}</td>
                          <td className="px-6 py-3 text-right">
                            <button onClick={() => handleDelete(cat.id)} className="text-gray-400 hover:text-red-600 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Başarı Hikayeleri Kategorileri Tablosu */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-100">
                  <h3 className="font-semibold text-emerald-800">Başarı Hikayeleri Kategorileri ({storyCategories.length})</h3>
                </div>
                {storyCategories.length === 0 ? (
                  <p className="p-6 text-gray-500 text-sm">Henüz başarı hikayesi kategorisi eklenmemiş.</p>
                ) : (
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y">
                      {storyCategories.map((cat) => (
                        <tr key={cat.id} className="hover:bg-gray-50">
                          <td className="px-6 py-3 font-medium text-gray-800">{cat.title}</td>
                          <td className="px-6 py-3 text-gray-500 font-mono">/{cat.slug}</td>
                          <td className="px-6 py-3 text-right">
                            <button onClick={() => handleDelete(cat.id)} className="text-gray-400 hover:text-red-600 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}