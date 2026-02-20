'use client';

import Link from 'next/link';
import { PawPrint, UserPlus, LogIn } from 'lucide-react';
import { useAuth } from '../../_lib/AuthContext';
import { Button, RoundMutedButton } from '../components/Button';

export function CTASection() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <section className="from-primary/10 via-background to-accent/10 bg-gradient-to-br py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <PawPrint className="text-primary h-8 w-8" />
          </div>
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Gestiona tus mascotas
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            Accede a tu portal para ver el historial de tus mascotas, agendar
            citas y más.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/portal/mascotas">
              <Button className="w-full gap-2 sm:w-auto">
                <PawPrint className="h-5 w-5" />
                Ver mis mascotas
              </Button>
            </Link>
            <Link href="/portal/citas/nueva">
              <Button className="w-full gap-2 bg-transparent sm:w-auto">
                Agendar una cita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-emerald-800/5 py-16 lg:py-36">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <PawPrint className="h-8 w-8 text-emerald-800" />
        </div>
        <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
          Únete al Portal Mascota
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg text-pretty">
          Registra a tus mascotas, agenda citas en línea, revisa su historial
          médico y recibe recordatorios de vacunas. Todo en un solo lugar.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/registro">
            <Button className="w-full gap-2 sm:w-auto">
              <UserPlus className="h-5 w-5" />
              Crear una cuenta
            </Button>
          </Link>
          <Link href="/login">
            <RoundMutedButton className="w-full gap-2 bg-transparent sm:w-auto">
              <LogIn className="h-5 w-5" />
              Ya tengo cuenta
            </RoundMutedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
