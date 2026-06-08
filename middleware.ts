import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  // Supabase için Response objesini hazırlıyoruz
  let supabaseResponse = NextResponse.next({
    request,
  })

  // Supabase SSR İstemcisini oluşturuyoruz
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 1. Kullanıcının oturumunu kontrol et
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAuthRoute = request.nextUrl.pathname.startsWith('/admin/login')
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

  // KURAL 1: Kullanıcı giriş YAPMAMIŞSA ve admin sayfalarında geziyorsa (login hariç) -> Logine gönder
  if (!user && isAdminRoute && !isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // KURAL 2: Kullanıcı giriş YAPMIŞSA ve login sayfasına girmeye çalışıyorsa -> Panele gönder
  if (user && isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  // KURAL 3: ROL BAZLI YETKİLENDİRME (RBAC)
  // Eğer kullanıcı giriş yapmışsa ve admin paneli içindeyse rolünü kontrol et
  if (user && isAdminRoute && !isAuthRoute) {
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('id', user.id)
      .single()

    const userRole = roleData?.role || 'editor'

    // Örnek Kısıtlama: Editörler "Genel Ayarlar" sayfasına giremez!
    if (userRole !== 'super_admin' && request.nextUrl.pathname.startsWith('/admin/ayarlar')) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin' // Yetkisi yoksa panelin anasayfasına geri şutla
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}

// Middleware'in sadece hangi sayfalarda çalışacağını belirliyoruz (Performans için önemli)
export const config = {
  matcher: [
    '/admin/:path*',
  ],
}