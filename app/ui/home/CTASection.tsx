'use client';

import Link from 'next/link';
import { PawPrint, UserPlus, LogIn } from 'lucide-react';
import { useAuth } from '../../_lib/AuthContext';
import {
  Button,
  CTAButton,
  MutedCTAButton,
  RoundMutedButton,
} from '../components/Button';
import Image from 'next/image';

export function CTASection() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <section className="bg-secondary-background py-16 lg:py-36">
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
              <RoundMutedButton className="w-full gap-2 bg-transparent sm:w-auto">
                Agendar una cita
              </RoundMutedButton>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-emerald-800/5 py-16 lg:py-36">
      <div className="mx-auto max-w-4xl space-y-4.5 px-4 text-center sm:px-6 lg:px-8">
        <Image
          src="/mascota_icon.png"
          alt="Logo Acción Mascota"
          width={200}
          height={32}
          className="-mt-2 h-20 w-30 place-self-center object-cover"
        />
        <p className="mx-auto inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-800 uppercase">
          Portal ciudadano · Tenencia responsable
        </p>
        <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
          Únete al Portal Acción Mascota
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg text-pretty">
          Registra a tus mascotas, agenda citas en línea, revisa su historial
          médico y recibe recordatorios de vacunas y esterilizaciones. Todo en
          un solo lugar.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {/* <Link href="/registro">
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
          </Link> */}

          <Link href="/login">
            <CTAButton>Iniciar sesión</CTAButton>
          </Link>

          <Link href="/registro">
            <MutedCTAButton>Crear cuenta</MutedCTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
