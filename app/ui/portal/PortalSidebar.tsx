'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PawPrint,
  Calendar,
  ClipboardList,
  User,
  Plus,
  Home,
} from 'lucide-react';
import { useAuth } from '@/app/_lib/AuthContext';
import { Button } from '../components/Button';

const navItems = [
  {
    href: '/portal/mascotas',
    label: 'Mis Mascotas',
    icon: PawPrint,
  },
  {
    href: '/portal/citas',
    label: 'Mis Citas',
    icon: Calendar,
  },
  {
    href: '/portal/historial',
    label: 'Historial Clínico',
    icon: ClipboardList,
  },
  {
    href: '/portal/solicitudes',
    label: 'Mis Solicitudes',
    icon: ClipboardList,
  },
  {
    href: '/portal/perfil',
    label: 'Mi Perfil',
    icon: User,
  },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const { usuario, isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return null;
  }

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-zinc-200/70 bg-white lg:flex">
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-200/70">
                <Home className="h-4 w-4" />
              </span>
              Volver al inicio
            </Link>
          </li>

          <li className="pt-4">
            <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Gestión
            </p>
          </li>

          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname?.startsWith(item.href) && item.href !== '/portal');

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-900/20'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white/10'
                        : 'bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200/70'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-zinc-200/70 p-4">
        <Link href="/portal/citas/nueva">
          <Button className="flex w-full justify-center gap-2 rounded-xl">
            <Plus className="h-4 w-4" />
            Nueva Cita
          </Button>
        </Link>
      </div>
    </aside>
  );
}
