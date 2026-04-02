'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PawPrint,
  Calendar,
  ClipboardList,
  User,
  Plus,
  Stethoscope,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
import { useAuth } from '@/app/_lib/AuthContext';
import { Button } from '../components/Button';

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
    <aside className="hidden w-64 flex-col border-r border-gray-200/60 bg-white shadow-lg shadow-gray-200/80 lg:flex">
      <div className="flex items-center gap-2.5 border-b border-gray-200/60 p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
          <Stethoscope className="size-5" />
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">Acción Mascota</p>
          <p className="text-muted-foreground truncate text-xs">
            {'Panel Admin'}
          </p>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  pathname === item.href ||
                  (pathname?.startsWith(item.href) && item.href !== '/admin')
                    ? 'bg-emerald-700/5 font-medium text-emerald-700'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-100/80'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
