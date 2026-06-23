import { logout } from '@/app/_lib/actions/auth';
import {
  Calendar,
  ChevronDown,
  LogOut,
  Menu,
  PawPrint,
  Settings,
  X,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button, LoginButton } from './Button';

type SessionMenuProps = {
  navLinks: {
    href: string;
    label: string;
  }[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export default function SessionMenu({
  navLinks,
  mobileMenuOpen,
  setMobileMenuOpen,
}: SessionMenuProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!userMenuOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const el = userMenuRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setUserMenuOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [userMenuOpen]);

  const handleLogout = async () => {
    setUserMenuOpen(false);
    await logout();
    await signOut({ redirectTo: '/' });
  };

  const userName = session?.user?.name?.split(' ')[0] || 'Gestion Interna';

  return (
    <div className="relative flex w-fit items-center gap-2">
      {/* Desktop: User Menu */}
      <div className="hidden md:block" ref={userMenuRef}>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200/70 bg-gray-50 py-1 pr-3 pl-1 text-zinc-800 transition-colors"
          aria-haspopup="menu"
          aria-expanded={userMenuOpen}
          onClick={() => setUserMenuOpen((prev) => !prev)}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-emerald-800/80 text-sm font-bold text-zinc-50 uppercase">
            {userName.charAt(0)}
          </span>
          <ChevronDown className="size-4 text-zinc-400" />
        </button>

        {userMenuOpen && (
          <div
            role="menu"
            className="absolute top-full right-0 mt-2 w-56 overflow-hidden rounded-xl border border-zinc-200 bg-white px-2 shadow-lg shadow-gray-700/20"
          >
            <div className="mb-2 border-b border-zinc-200 px-2 py-3">
              <p className="truncate text-sm font-semibold text-zinc-900">
                {session?.user?.name}
              </p>
              <p className="truncate text-[11px] text-zinc-500">
                {session?.user?.email ||
                  `${userName.split(' ')[0].toLowerCase()}@example.com`}
              </p>
            </div>

            <div className="mb-2 flex flex-col border-b border-zinc-200 pb-2">
              <Link
                role="menuitem"
                href="/portal/mascotas"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setUserMenuOpen(false)}
              >
                {/* <PawPrint className="h-4 w-4" /> */}
                Mis Mascotas
              </Link>
              <Link
                role="menuitem"
                href="/portal/citas"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setUserMenuOpen(false)}
              >
                {/* <Calendar className="h-4 w-4" /> */}
                Citas Agendadas
              </Link>
              <Link
                role="menuitem"
                href="/portal/historial"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setUserMenuOpen(false)}
              >
                {/* <Calendar className="h-4 w-4" /> */}
                Historial Clínico
              </Link>
              <Link
                role="menuitem"
                href="/portal/solicitudes"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setUserMenuOpen(false)}
              >
                {/* <Calendar className="h-4 w-4" /> */}
                Solicitudes
              </Link>

              <Link
                role="menuitem"
                href="/portal/configuracion"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setUserMenuOpen(false)}
              >
                {/* <Settings className="h-4 w-4" /> */}
                Configuración
              </Link>
            </div>

            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="mb-2 flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-rose-600 transition-colors hover:bg-rose-50/60"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>

      {/* Mobile: Menu Button */}
      <Button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Mobile: Navigation Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Panel lateral para movil */}
          <nav className="relative flex w-80 flex-col gap-4 bg-white p-6 shadow-2xl">
            {/* Cerrar Menu */}
            <button
              className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="size-5" />
            </button>

            {/* Info usuario */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-800/80 text-2xl font-bold text-white uppercase">
                  {userName.charAt(0)}
                </span>
                <div>
                  <p className="truncate text-sm font-semibold text-zinc-900">
                    {session?.user?.name}
                  </p>
                  <p className="truncate text-xs text-zinc-500">
                    {session?.user?.email ||
                      `${userName.split(' ')[0].toLowerCase()}@example.com`}
                  </p>
                </div>
              </div>
            </div>

            {/* Navegacion Publica */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Navegacion Portal */}
            <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
              <Link
                href="/portal/mascotas"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PawPrint className="h-4 w-4" />
                Mis Mascotas
              </Link>
              <Link
                href="/portal/citas"
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Mis Citas
              </Link>

              {(session?.user?.roles.includes('Funcionario') ||
                session?.user?.roles.includes('Veterinario') ||
                session?.user?.roles.includes('Administrador')) && (
                <Link
                  href="/admin"
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-zinc-700 transition-colors hover:bg-zinc-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  Panel Administrativo
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
              {/* Logout */}
              {status === 'authenticated' ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 flex w-full items-center gap-2 rounded-lg bg-rose-50 px-3 py-3 text-left text-sm text-rose-600 transition-colors hover:bg-rose-100"
                >
                  <LogOut className="h-4 w-4" />
                  Cerrar Sesión
                </button>
              ) : (
                <LoginButton>Iniciar Sesión</LoginButton>
              )}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
