"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export default function BlogListPage() {
  const supabase = createClient();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    setIsLoading(true);
    // categories tablosuyla join işlemi yaparak kategori adını da çekiyoruz
    const { data, error } = await supabase
      .from("blogs")
      .select("*, categories(title)")
      .order("created_at", { ascending: false });

    if (data) setBlogs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;

    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (!error) {
      setBlogs(blogs.filter((b) => b.id !== id));
    } else {
      alert("Silme işlemi sırasında hata: " + error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Blog Yazıları</h1>
        <Link
          href="/admin/blog/yeni"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Yeni Yazı Ekle
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Yazılar yükleniyor...</div>
        ) : blogs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Henüz hiç blog yazısı eklenmemiş.</div>
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
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded bg-gray-100 overflow-hidden border">
                      {blog.cover_image && (
                        <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{blog.title}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {blog.categories?.title || <span className="text-red-400 text-sm">Kategori Yok</span>}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {blog.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/blog/${blog.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link href={`/admin/blog/duzenle/${blog.id}`} className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleDelete(blog.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
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