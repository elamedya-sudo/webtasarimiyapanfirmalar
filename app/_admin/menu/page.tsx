"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Trash2, Plus, Edit2, ListTree, CornerDownRight, X } from "lucide-react";

export default function MenuYonetimiPage() {
  const supabase = createClient();
  const [menus, setMenus] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // Düzenleme modu için state
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    parent_id: "",
    sort_order: 0,
  });

  const fetchMenus = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("menus")
      .select("*")
      .order("sort_order", { ascending: true });

    if (data) setMenus(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const payload = {
      title: formData.title,
      url: formData.url,
      parent_id: formData.parent_id === "" ? null : formData.parent_id,
      sort_order: formData.sort_order,
    };

    if (editingId) {
      // Güncelleme İşlemi
      const { error } = await supabase.from("menus").update(payload).eq("id", editingId);
      if (!error) {
        setMenus(menus.map(m => m.id === editingId ? { ...m, ...payload } : m));
        resetForm();
      } else {
        alert("Güncellenirken hata oluştu: " + error.message);
      }
    } else {
      // Yeni Ekleme İşlemi
      const { data, error } = await supabase.from("menus").insert([payload]).select();
      if (!error && data) {
        setMenus([...menus, data[0]]);
        resetForm();
      } else {
        alert("Eklenirken hata oluştu: " + error?.message);
      }
    }
    setIsSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu menüyü silmek istediğinize emin misiniz? (Alt menüleri varsa onlar da silinir!)")) return;

    const { error } = await supabase.from("menus").delete().eq("id", id);
    if (!error) {
      setMenus(menus.filter((m) => m.id !== id && m.parent_id !== id));
    } else {
      alert("Silinirken hata oluştu.");
    }
  };

  const handleEdit = (menu: any) => {
    setEditingId(menu.id);
    setFormData({
      title: menu.title,
      url: menu.url,
      parent_id: menu.parent_id || "",
      sort_order: menu.sort_order || 0,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: "", url: "", parent_id: "", sort_order: 0 });
  };

  // Menüleri hiyerarşik olarak ayırıyoruz
  const parentMenus = menus.filter(m => !m.parent_id).sort((a,b) => a.sort_order - b.sort_order);
  const getChildren = (parentId: string) => menus.filter(m => m.parent_id === parentId).sort((a,b) => a.sort_order - b.sort_order);

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <ListTree className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Menü Yönetimi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SOL TARAF: FORM */}
        <div className="lg:col-span-1">
          <div className={`bg-white p-6 rounded-xl shadow-sm border sticky top-6 transition-colors ${editingId ? 'border-amber-400 ring-4 ring-amber-50' : 'border-gray-100'}`}>
            <div className="flex items-center justify-between mb-4 border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {editingId ? "Menüyü Düzenle" : "Yeni Menü Ekle"}
              </h3>
              {editingId && (
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 transition-colors" title="İptal Et">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Menü Başlığı</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required placeholder="Örn: Kurumsal" className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL / Bağlantı</label>
                <input type="text" value={formData.url} onChange={(e) => setFormData({...formData, url: e.target.value})} required placeholder="Örn: /kurumsal veya https://..." className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Üst Menü (Opsiyonel)</label>
                <select value={formData.parent_id} onChange={(e) => setFormData({...formData, parent_id: e.target.value})} className="w-full border p-2 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">-- Ana Menü Olsun --</option>
                  {parentMenus.map(pm => (
                    // Bir menü kendisini üst menü olarak seçemez
                    pm.id !== editingId && <option key={pm.id} value={pm.id}>{pm.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sıralama (Küçükten Büyüğe)</label>
                <input type="number" value={formData.sort_order} onChange={(e) => setFormData({...formData, sort_order: parseInt(e.target.value)})} className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <button type="submit" disabled={isSaving} className={`w-full flex items-center justify-center gap-2 text-white py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${editingId ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                {editingId ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                {isSaving ? "Kaydediliyor..." : (editingId ? "Değişiklikleri Kaydet" : "Menü Ekle")}
              </button>
            </form>
          </div>
        </div>

        {/* SAĞ TARAF: MENÜ AĞACI */}
        <div className="lg:col-span-2 space-y-4">
          {isLoading ? (
            <div className="text-gray-500 bg-white p-8 rounded-xl shadow-sm border text-center">Menüler yükleniyor...</div>
          ) : parentMenus.length === 0 ? (
            <div className="text-gray-500 bg-white p-8 rounded-xl shadow-sm border text-center">Henüz menü eklenmemiş. Soldaki formu kullanarak ilk menüyü oluşturun.</div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y">
                {parentMenus.map((parent) => (
                  <li key={parent.id} className="flex flex-col">
                    {/* Ana Menü Satırı */}
                    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{parent.sort_order}</span>
                        <div>
                          <span className="font-bold text-gray-800 text-lg">{parent.title}</span>
                          <span className="ml-3 text-gray-400 font-mono text-sm">{parent.url}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleEdit(parent)} className="p-2 text-gray-400 hover:text-amber-600 transition-colors bg-white border rounded shadow-sm">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(parent.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors bg-white border rounded shadow-sm">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Alt Menüleri Varsa Listele */}
                    {getChildren(parent.id).length > 0 && (
                      <ul className="bg-gray-50 border-t border-gray-100">
                        {getChildren(parent.id).map((child) => (
                          <li key={child.id} className="flex items-center justify-between px-6 py-3 pl-14 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0">
                            <div className="flex items-center gap-3">
                              <CornerDownRight className="w-4 h-4 text-gray-400" />
                              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold">{child.sort_order}</span>
                              <span className="font-medium text-gray-700">{child.title}</span>
                              <span className="ml-2 text-gray-400 font-mono text-xs">{child.url}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => handleEdit(child)} className="p-1.5 text-gray-400 hover:text-amber-600 transition-colors">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(child.id)} className="p-1.5 text-gray-400 hover:text-red-600 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}