'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LoginButton, RegisterButton } from './components/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import SessionMenu from './components/SessionMenu';
import {
  PawPrint,
  Calendar,
  ClipboardList,
  User,
  LayoutDashboard,
  Home,
  X,
  Menu,
} from 'lucide-react';
import MobileNavMenu from './components/MobileNavMenu';
import { logout } from '../_lib/actions/auth';

export const publicNavLinks = [
  { href: '/', label: 'Inicio', icon: <Home className="h-4 w-4" /> },
  {
    href: '/servicios',
    label: 'Servicios',
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    href: '/adopcion',
    label: 'Adopción',
    icon: <PawPrint className="h-4 w-4" />,
  },
  {
    href: '/campanas',
    label: 'Campañas',
    icon: <ClipboardList className="h-4 w-4" />,
  },
  {
    href: '/informacion',
    label: 'Información',
    icon: <ClipboardList className="h-4 w-4" />,
  },
];

const authenticatedNavLinks = [
  {
    href: '/portal/mascotas',
    label: 'Mis Mascotas',
    icon: <PawPrint className="h-4 w-4" />,
  },
  {
    href: '/portal/citas',
    label: 'Mis Citas',
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    href: '/portal/historial',
    label: 'Historial Clínico',
    icon: <ClipboardList className="h-4 w-4" />,
  },
  {
    href: '/portal/solicitudes',
    label: 'Mis Solicitudes',
    icon: <ClipboardList className="h-4 w-4" />,
  },
  {
    href: '/portal/perfil',
    label: 'Mi Perfil',
    icon: <User className="h-4 w-4" />,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { status } = useSession();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    await signOut({ redirectTo: '/' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white sm:shadow-sm sm:shadow-gray-200/40">
      <div className="max-w-7xls mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Acción Mascota - Municipalidad de Algarrobo"
              width={140}
              height={60}
              className="h-16 w-auto sm:h-24"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="-mb-0.5 text-[8px] font-medium tracking-wide text-gray-400 uppercase sm:text-[10px]">
                Municipalidad de
              </span>
              <span className="text-xs font-semibold text-gray-700 sm:text-sm">
                Algarrobo
              </span>
            </div>
          </Link>

          {/* (Desktop) Links publicos */}
          <nav className="hidden items-center gap-1 md:flex">
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md rounded-lg px-3 py-2 transition-colors outline-none ${pathname === link.href ? 'bg-slate-50 text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </nav>

          {/* (Desktop) Menu de sesion/navegacion y botones de autenticacion */}
          <div className="hidden items-center gap-2 sm:flex">
            {status !== 'authenticated' ? (
              <div className="flex gap-2">
                <LoginButton>Iniciar Sesión</LoginButton>
                <RegisterButton>Registrarse</RegisterButton>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {!pathname.includes('portal') && (
                  <Link
                    href="/portal/mascotas"
                    className="text-md rounded-lg px-3 py-2 text-slate-600 transition-colors outline-none hover:text-emerald-700"
                  >
                    Ir al Portal
                  </Link>
                )}
                <SessionMenu
                  authenticatedNavLinks={authenticatedNavLinks}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              </div>
            )}
          </div>

          {/* (Movil) Boton toggle de navegacion */}
          <div className="flex items-center gap-4 md:hidden">
            {!pathname.includes('portal') && (
              <Link
                href="/portal/mascotas"
                className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors outline-none hover:text-emerald-700"
              >
                Ir al Portal
              </Link>
            )}
            <button
              className="group relative flex aspect-square h-12 cursor-pointer items-center justify-center rounded-xl bg-emerald-800/90 font-semibold text-white shadow-lg shadow-gray-200 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>

          {/* (Movil) Panel de navegacion */}
          {mobileMenuOpen && (
            <MobileNavMenu
              publicNavLinks={publicNavLinks}
              authenticatedNavLinks={authenticatedNavLinks}
              setMobileMenuOpen={setMobileMenuOpen}
              handleLogout={handleLogout}
            />
          )}
        </div>
      </div>
    </header>
  );
}
