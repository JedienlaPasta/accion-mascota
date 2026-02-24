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
    <aside className="border-border bg-card hidden w-64 flex-col border-r lg:flex">
      <div className="border-border border-b p-4">
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
              className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
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
                // className={cn(
                //   "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                //   pathname === item.href ||
                //     (pathname?.startsWith(item.href) && item.href !== "/portal")
                //     ? "bg-primary/10 text-primary font-medium"
                //     : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                // )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-border border-t p-4">
        <Link
          href="/portal/citas/nueva"
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Nueva Cita
        </Link>
      </div>
    </aside>
  );
}
