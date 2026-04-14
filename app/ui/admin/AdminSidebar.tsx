'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PawPrint,
  Calendar,
  ClipboardList,
  User,
  Stethoscope,
  LayoutDashboard,
  Settings,
  Home,
} from 'lucide-react';
import { useAuth } from '@/app/_lib/AuthContext';

const navItems = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/admin/citas',
    label: 'Citas',
    icon: Calendar,
  },
  {
    href: '/admin/mascotas',
    label: 'Mascotas',
    icon: PawPrint,
  },
  {
    href: '/admin/propietarios',
    label: 'Propietarios',
    icon: User,
  },
  {
    href: '/admin/atenciones',
    label: 'Atenciones',
    icon: ClipboardList,
  },
  {
    href: '/admin/configuracion',
    label: 'Configuración',
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { usuario, isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return null;
  }

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-zinc-200/70 bg-white lg:flex">
      {/* <div className="flex items-center gap-2.5 border-b border-gray-200/60 p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
          <Stethoscope className="size-5" />
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">Acción Mascota</p>
          <p className="text-muted-foreground truncate text-xs">
            {'Panel Admin'}
          </p>
        </div>
      </div> */}

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
              (pathname?.startsWith(item.href) && item.href !== '/admin');

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-800/90 text-white shadow-sm shadow-emerald-900/20'
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
    </aside>
  );
}
