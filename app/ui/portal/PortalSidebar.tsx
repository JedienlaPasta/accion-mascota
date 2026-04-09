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
    <aside className="hidden w-64 flex-col border-r border-gray-200/70 bg-white shadow-lg shadow-gray-200/80 lg:flex">
      <div className="border-b border-gray-200/60 p-4">
        <p className="text-foreground text-sm font-medium">Portal Ciudadano</p>
        <p className="text-muted-foreground truncate text-xs">
          {usuario?.nombre || 'Nombre Usuario'}
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100/80"
            >
              <Home className="h-4 w-4" />
              Volver al inicio
            </Link>
          </li>
          <li className="pt-4">
            <p className="text-muted-foreground mb-2 px-3 text-xs font-medium tracking-wider uppercase">
              Gestión
            </p>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ||
                  (pathname?.startsWith(item.href) && item.href !== '/portal')
                    ? 'bg-emerald-800/90 text-white shadow-md shadow-emerald-800/20'
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

      <div className="border-t border-gray-200/60 p-4">
        <Link href="/portal/citas/nueva">
          <Button className="flex w-full justify-center gap-2 rounded-lg">
            <Plus className="h-4 w-4" />
            Nueva Cita
          </Button>
        </Link>
      </div>
    </aside>
  );
}
