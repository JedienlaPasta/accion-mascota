'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  ChevronDown,
  LogOut,
  Menu,
  PawPrint,
  Settings,
  User,
  X,
} from 'lucide-react';
import { useAuth } from '../_lib/AuthContext';
import { Button } from './components/Button';
import Image from 'next/image';

export function SessionHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { usuario, isLoggedIn, logout } = useAuth();

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

  const userName = usuario?.nombre.split(' ')[0] || 'Gestion Interna';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white shadow-sm shadow-gray-200/40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Acción Mascota - Municipalidad de Algarrobo"
              width={140}
              height={60}
              className="h-8 w-auto sm:h-24"
              priority
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="-mb-0.5 text-[10px] font-medium tracking-wide text-gray-400 uppercase">
                Municipalidad de
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Algarrobo
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {!isLoggedIn ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-transparent py-1 pr-3 pl-1 text-zinc-800 transition-colors hover:border-zinc-200/70 hover:bg-gray-50"
                  aria-haspopup="menu"
                  aria-expanded={userMenuOpen}
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-emerald-800/80 text-xl font-bold text-zinc-50">
                    {userName.charAt(0)}
                  </span>
                  <ChevronDown className="size-4 text-zinc-400" />
                </button>

                {userMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-zinc-200 bg-white px-3 shadow-lg shadow-zinc-200"
                  >
                    <div className="mb-1 border-b border-zinc-200 px-2 py-3">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {userName}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {usuario?.email ||
                          `${userName.split(' ')[0].toLowerCase()}@example.com`}
                      </p>
                    </div>

                    <div className="mb-1 flex flex-col gap-1 border-b border-zinc-200 pb-1">
                      <Link
                        role="menuitem"
                        href="/portal/mascotas"
                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <PawPrint className="h-4 w-4" />
                        Mis Mascotas
                      </Link>
                      <Link
                        role="menuitem"
                        href="/portal/citas"
                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Calendar className="h-4 w-4" />
                        Mis Citas
                      </Link>

                      {(usuario?.rol === 'funcionario' ||
                        usuario?.rol === 'veterinario' ||
                        usuario?.rol === 'admin') && (
                        <Link
                          role="menuitem"
                          href="/admin"
                          className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Settings className="h-4 w-4" />
                          Panel Administrativo
                        </Link>
                      )}
                    </div>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                      className="mb-2 flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-rose-600 transition-colors hover:bg-rose-50/60"
                    >
                      <LogOut className="h-4 w-4" />
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Iniciar Sesión</span>
                </Button>
              </Link>
            )}

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
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* {mobileMenuOpen && (
          <nav className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )} */}
      </div>
    </header>
  );
}
