"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export default function ProjelerListPage() {
  const supabase = createClient();
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (data) setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (!error) {
      setProjects(projects.filter((p) => p.id !== id));
    } else {
      alert("Silme işlemi sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Projeler</h1>
        <Link
          href="/admin/projeler/yeni"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Yeni Proje Ekle
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Projeler yükleniyor...</div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Henüz hiç proje eklenmemiş.</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">Görsel</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Proje Adı</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Müşteri</th>
                <th className="px-6 py-4 font-semibold text-gray-700">Sıra</th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded bg-gray-100 overflow-hidden border">
                      {project.cover_image && (
                        <img src={project.cover_image} alt={project.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{project.title}</td>
                  <td className="px-6 py-4 text-gray-600">{project.client_name || "-"}</td>
                  <td className="px-6 py-4 text-gray-600">{project.sort_order}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/projeler/${project.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link href={`/admin/projeler/duzenle/${project.id}`} className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleDelete(project.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
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