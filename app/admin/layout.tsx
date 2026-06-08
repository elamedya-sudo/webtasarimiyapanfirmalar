"use client"; // Client component yapıyoruz ki çıkış butonuna tıklanabilsin

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { 
  Settings, Layers, PenTool, Award, Home, Briefcase, Menu, LogOut, User, Tag
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const menuItems = [
    { name: "Genel Ayarlar", href: "/admin/ayarlar", icon: <Settings className="w-5 h-5" /> },
    { name: "Anasayfa Yönetimi", href: "/admin/anasayfa", icon: <Home className="w-5 h-5" /> },
    { name: "Hizmetler", href: "/admin/hizmetler", icon: <Layers className="w-5 h-5" /> },
    { name: "Projeler", href: "/admin/projeler", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Blog", href: "/admin/blog", icon: <PenTool className="w-5 h-5" /> },
    { name: "Başarı Hikayeleri", href: "/admin/basari-hikayeleri", icon: <Award className="w-5 h-5" /> },
    { name: "Menü Yönetimi", href: "/admin/menu", icon: <Menu className="w-5 h-5" /> },
    { name: "Kategori Yönetimi", href: "/admin/kategoriler", icon: <Tag className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Ela CMS</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Profil ve Çıkış Alanı */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center gap-3 px-4 py-2 mb-4 text-gray-600">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Yönetici</span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Çıkış Yap</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}