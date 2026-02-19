'use client';

import Link from 'next/link';
import { Calendar, Heart, Shield, ArrowRight, PawPrint } from 'lucide-react';
import { useAuth } from '@/app/_lib/AuthContext';
import { CTAButton, RoundMutedButton } from '../components/Button';
import Image from 'next/image';

export function HeroSection() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex items-center justify-start gap-10">
              <Image
                src="/escudo.png"
                alt="Hero"
                width={200}
                height={200}
                className="shrink-0 sm:w-30"
              />

              <div className="relative size-6">
                <PawPrint className="absolute -top-4 -left-4 h-6 w-6 -rotate-90 text-emerald-600/60" />
                <PawPrint className="absolute -top-0.5 left-4 h-6 w-6 rotate-0 text-rose-500/60" />
                <PawPrint className="absolute top-5 -left-2 h-6 w-6 -rotate-90 text-yellow-500/60" />
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-800/10 px-3 py-1 text-sm font-medium text-emerald-800">
                <Heart className="h-4 w-4" />
                Al servicio de la comuna
              </div>
            </div>

            <h1 className="text-foreground text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
              Cuidamos la salud de{' '}
              <span className="text-emerald-800">tus mascotas</span>
            </h1>

            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty lg:mx-0">
              Ofrecemos atención médica de calidad, vacunaciones gratuitas y
              campañas de esterilización para todos los vecinos de la comuna. Tu
              mascota merece el mejor cuidado.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              {isLoggedIn ? (
                <Link href="/portal/citas/nueva">
                  <CTAButton className="w-full gap-2 bg-emerald-800 sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Agendar Cita
                  </CTAButton>
                </Link>
              ) : (
                <Link href="/login">
                  <CTAButton className="w-full gap-2 sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Agendar Cita
                  </CTAButton>
                </Link>
              )}
              <Link href="/servicios">
                <RoundMutedButton className="w-full gap-2 bg-transparent sm:w-auto">
                  Ver Servicios
                  <ArrowRight className="h-4 w-4" />
                </RoundMutedButton>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-emerald-800">5,000+</p>
                <p className="text-muted-foreground text-sm">
                  Mascotas atendidas
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-emerald-800">2,500+</p>
                <p className="text-muted-foreground text-sm">
                  Esterilizaciones
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-emerald-800">100%</p>
                <p className="text-muted-foreground text-sm">Compromiso</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden rounded-xl lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              {/* Main card */}
              <Image
                src="/dog_cat_01.jpg"
                alt="Mascota"
                width={500}
                height={500}
                className="inset-0 h-full w-full rounded-4xl object-cover"
              />

              {/* Floating cards */}
              <div className="bg-card border-border absolute -top-4 -left-4 rounded-xl border p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vacuna Gratuita</p>
                    <p className="text-muted-foreground text-xs">Antirrábica</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-border absolute -right-4 -bottom-4 rounded-xl border p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Próxima Cita</p>
                    <p className="text-muted-foreground text-xs">
                      Lunes 10:30 hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
