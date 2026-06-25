'use client';

import { Heart, PawPrint, Syringe, Scissors } from 'lucide-react';
import { CTAButtonLogin } from '../components/Button';
import Image from 'next/image';
import ImagenMascota from '../public/adopcion/ImagenMascota';
import { useSession } from 'next-auth/react';
import { CTALink, MutedCTALink } from '../components/Link';

export function HeroSection() {
  const { data: session, status } = useSession();

  return (
    <section className="bg-emerald-800/5s relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="-mt-10 grid items-center gap-12 sm:-mt-4 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 flex flex-col items-center justify-start gap-4 sm:mb-6 sm:flex-row sm:gap-10">
              <Image
                src="/escudo.png"
                alt="HeroLogo"
                width={200}
                height={200}
                priority
                className="h-10 w-auto shrink-0"
              />

              <div className="relative hidden size-6 sm:block">
                <PawPrint className="absolute -top-4 -left-4 h-6 w-6 -rotate-65 text-emerald-600/60" />
                <PawPrint className="absolute -top-1 left-4 h-6 w-6 rotate-0 text-rose-500/60" />
                <PawPrint className="absolute top-5 -left-2 h-6 w-6 -rotate-65 text-amber-500/60" />
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-sm font-medium text-emerald-800">
                <Heart className="h-4 w-4" />
                Tenencia Responsable
              </div>
            </div>

            <h1 className="text-foreground text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
              Cuidamos la salud de{' '}
              <span className="relative text-emerald-800">tus mascotas</span>
            </h1>

            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty lg:mx-0">
              Controlamos temáticas de salud pública asociadas a la fauna
              urbana, promovemos el control reproductivo mediante
              esterilización, intervenimos colonias de gatos ferales con el
              método TNR y velamos por el bienestar de mascotas con y sin dueño.
            </p>
            <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed text-pretty lg:mx-0">
              Además, educamos a la comunidad sobre tenencia responsable de
              acuerdo con la Ley 21.020 y la Ordenanza Municipal D.A N°0411,
              generando redes de cooperación con organizaciones públicas y
              privadas. También apoyamos al registro e identificación de
              mascotas a través del{' '}
              <a
                href="https://registratumascota.cl"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-800 underline decoration-emerald-600 decoration-2 underline-offset-2"
              >
                Registro Nacional de Mascotas
              </a>
              .
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              {status === 'authenticated' ? (
                <>
                  <CTALink href="/portal/citas/nueva">Agendar Cita</CTALink>
                  <MutedCTALink href="/portal/mascotas">
                    Mis Mascotas
                  </MutedCTALink>
                </>
              ) : (
                <>
                  <CTAButtonLogin>Agendar Cita</CTAButtonLogin>
                  <MutedCTALink href="/portal/mascotas">
                    Ver Servicios
                  </MutedCTALink>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-emerald-800">500+</p>
                <p className="text-muted-foreground text-sm">
                  Mascotas atendidas
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-emerald-800">250+</p>
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
              {/* <Image
                src="/dog_cat_01.jpg"
                alt="Mascota"
                width={500}
                height={500}
                className="inset-0 size-full rounded-4xl object-cover"
              /> */}
              <ImagenMascota
                src="/dog_cat_01.jpg"
                alt="Mascota"
                priority
                className="overflow-hidden rounded-4xl bg-gray-100!"
              />

              {/* Floating cards */}
              <div className="bg-card border-border absolute -top-4 -left-4 rounded-xl border p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Syringe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Operativos Sanitarios</p>
                    <p className="text-muted-foreground text-xs">Vacunación</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-border absolute -right-4 -bottom-4 rounded-xl border p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Scissors className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Control Reproductivo</p>
                    <p className="text-muted-foreground text-xs">
                      Perros y gatos
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
