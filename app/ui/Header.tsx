'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LoginButton, RegisterButton } from './components/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SessionMenu from './components/SessionMenu';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/adopcion', label: 'Adopción' },
  { href: '/campanas', label: 'Campañas' },
  { href: '/informacion', label: 'Información' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <header className="bg-secondary-backgrounds sticky top-0 z-50 border-b border-gray-200/60 bg-white shadow-sm shadow-gray-200/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none ${pathname === link.href ? 'bg-slate-50 text-emerald-700' : 'text-gray-600'}`}
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              {status !== 'authenticated' ? (
                <div className="flex gap-2">
                  <RegisterButton>Registrarse</RegisterButton>
                  <LoginButton>Iniciar Sesión</LoginButton>
                </div>
              ) : (
                <SessionMenu
                  navLinks={navLinks}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
