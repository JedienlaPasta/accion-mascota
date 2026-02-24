'use client';

import React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PawPrint, LogIn, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button, RoundMutedButton } from '../../ui/components/Button';
import { useAuth } from '@/app/_lib/AuthContext';
import Input from '@/app/ui/components/Input';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de login
    setTimeout(() => {
      login('ciudadano');
      router.push('/portal/mascotas');
    }, 1000);
  };

  const handleAdminLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login('funcionario');
      router.push('/admin');
    }, 1000);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="mb-8 space-y-2.5 text-center">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          {/* <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <PawPrint className="text-primary h-8 w-8" />
          </div> */}
          <Image
            src="/mascota_icon.png"
            alt="Logo Acción Mascota"
            width={200}
            height={32}
            className="-mt-2 h-20 w-30 place-self-center object-cover"
          />
          <p className="mx-auto inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-800 uppercase">
            Portal ciudadano · Tenencia responsable
          </p>
          <h1 className="text-foreground text-2xl font-bold">
            Portal Acción Mascota
          </h1>
          <p className="text-muted-foreground">
            Ingresa al portal de tenencia responsable de Algarrobo
          </p>
        </div>

        {/* Login Card */}
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white py-6 text-gray-600 shadow-md">
          {/* Form Header */}
          <span className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6">
            <h3 className="font-semibold text-gray-800">Iniciar Sesión</h3>
            <p className="text-sm">
              Ingresa con tu RUT y contraseña para acceder a tu cuenta
            </p>
          </span>
          {/* Form Content */}
          <div className="px-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  nombre="rut"
                  label="RUT"
                  placeHolder="12.345.678-9"
                  value="12.345.678-9"
                  required
                />
                <Input
                  type="password"
                  nombre="password"
                  label="Contraseña"
                  placeHolder="Ingresa tu contraseña"
                  value="demo123"
                  required
                />
              </div>

              <Button
                type="submit"
                className="flex w-full justify-center gap-2"
                disabled={loading}
              >
                <LogIn className="h-4 w-4" />
                {loading ? 'Ingresando...' : 'Ingresar'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                ¿No tienes cuenta?{' '}
                <Link href="/registro" className="text-primary hover:underline">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Login Demo para admin */}
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-6 text-gray-600 shadow-md">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-muted-foreground h-5 w-5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Acceso funcionarios</p>
              <p className="text-muted-foreground text-xs">
                Demo: Ingresa como funcionario
              </p>
            </div>
            <RoundMutedButton
              onClick={handleAdminLogin}
              disabled={loading}
              className=""
            >
              Ingresar
            </RoundMutedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
