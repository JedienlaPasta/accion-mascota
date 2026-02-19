'use client';

import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import {
  Menu,
  X,
  User,
  LogOut,
  PawPrint,
  Calendar,
  Settings,
} from 'lucide-react';
import { useAuth } from '../_lib/AuthContext';
import { Button } from './components/Button';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/informacion', label: 'Información' },
  { href: '/campanas', label: 'Campañas' },
  { href: '/emergencias', label: 'Emergencias' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { usuario, isLoggedIn, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white shadow-xs shadow-gray-200/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Acción Mascota - Municipalidad de Algarrobo"
              width={140}
              height={60}
              className="h-8 w-auto sm:h-20"
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground hover:bg-secondary font-mediums rounded-md px-3 py-2 text-sm text-gray-800 transition-colors"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            {/* {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="gap-2 bg-transparent">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {usuario?.nombre.split(' ')[0]}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{usuario?.nombre}</p>
                    <p className="text-muted-foreground text-xs">
                      {usuario?.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/portal/mascotas" className="cursor-pointer">
                      <PawPrint className="mr-2 h-4 w-4" />
                      Mis Mascotas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/portal/citas" className="cursor-pointer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Mis Citas
                    </Link>
                  </DropdownMenuItem>
                  {(usuario?.rol === 'funcionario' ||
                    usuario?.rol === 'veterinario' ||
                    usuario?.rol === 'admin') && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          Panel Administrativo
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-destructive cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : ( */}
            <Link href="/login">
              <Button className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Iniciar Sesión</span>
              </Button>
            </Link>
            {/* )} */}

            {/* Mobile Menu Button */}
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
        {mobileMenuOpen && (
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
        )}
      </div>
    </header>
  );
}
