import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const roles = req.auth?.user?.roles || [];

  const publicRoutes = [
    '/',
    '/login',
    '/registro',
    '/servicios',
    '/adopcion',
    '/campanas',
    '/informacion',
    '/emergencias',
    '/privacidad',
  ];

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAdminRoute = nextUrl.pathname.startsWith('/administrador');
  const isVeterinarioRoute = nextUrl.pathname.startsWith('/veterinario');
  const isAdministrativoRoute = nextUrl.pathname.startsWith('/administrativo');

  // Proteger rutas privadas
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  // Autorizacion por roles
  // Ruta administrador
  if (isAdminRoute && !roles.includes('Administrador')) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  // Ruta veterinario
  if (
    isVeterinarioRoute &&
    !(roles.includes('Veterinario') || roles.includes('Administrador'))
  ) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  // Ruta administrativo
  if (
    isAdministrativoRoute &&
    (!roles.includes('Administrativo') ||
      roles.includes('Veterinario') ||
      roles.includes('Administrador'))
  ) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  // Redireccion post login
  const isAuthRoute =
    nextUrl.pathname === '/login' || nextUrl.pathname === '/registro';

  if (isLoggedIn && isAuthRoute) {
    if (roles.includes('Administrador')) {
      return NextResponse.redirect(new URL('/administrador', nextUrl));
    }
    if (roles.includes('Veterinario')) {
      return NextResponse.redirect(new URL('/veterinario', nextUrl));
    }
    if (roles.includes('Administrativo')) {
      return NextResponse.redirect(new URL('/administrativo', nextUrl));
    }

    return NextResponse.redirect(new URL('/portal/mascotas', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)).*)',
  ],
};
