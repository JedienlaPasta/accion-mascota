import { mascotasAdopcion } from '@/app/_lib/mock-data';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdoptionSection() {
  // Solo las primeras 4 mascotas para el grid
  const mascotas = mascotasAdopcion.slice(0, 4);

  return (
    <section className="bg-secondary-background py-20">
      {' '}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-16">
          {/* Izquierda - Textos y CTA */}
          <div className="mb-12 flex flex-1 flex-col justify-center text-center lg:mb-0 lg:text-left">
            <div className="mb-6 inline-flex items-center justify-center gap-2 self-center rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-900 lg:self-start">
              <Heart className="h-4 w-4" />
              <span>Adopción Responsable</span>
            </div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Un nuevo integrante para{' '}
              <span className="text-[#006D4E]">tu familia</span>
            </h2>
            <p className="mb-8 max-w-lg text-lg text-gray-600 sm:mx-auto lg:mx-0">
              Conoce a los perritos y gatitos de Algarrobo que buscan una
              segunda oportunidad. El proceso es guiado por la Veterinaria
              Municipal para asegurar el bienestar de todos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/adopcion"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#006D4E] px-8 text-base font-semibold text-white transition-all hover:bg-[#005a40] hover:shadow-lg"
              >
                Ver mascotas en adopción
              </Link>
              <Link
                href="/adopcion/proceso"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 text-base font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                Conoce el proceso
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Derecha - Grid */}
          <div className="mx-auto w-full max-w-2xl flex-1">
            <div className="grid h-[450px] grid-cols-4 grid-rows-3 gap-3 sm:h-[550px]">
              {/* Imagen 1 - Arriba a la izquierda */}
              <Link
                href={`/adopcion/${mascotas[0]?.id}`}
                className="group relative col-span-2 row-span-1 overflow-hidden rounded-4xl bg-gray-100"
              >
                <Image
                  width={400}
                  height={400}
                  src={mascotas[0]?.imagenes[0]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={mascotas[0]?.nombre}
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-bold text-white">
                    {mascotas[0]?.nombre}
                  </span>
                </div>
              </Link>

              {/* Imagen 2 - Arriba a la derecha */}
              <Link
                href={`/adopcion/${mascotas[1]?.id}`}
                className="group relative col-span-2 row-span-2 overflow-hidden rounded-4xl bg-gray-200"
              >
                <Image
                  width={400}
                  height={400}
                  src={mascotas[1]?.imagenes[0]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={mascotas[1]?.nombre}
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    {mascotas[1]?.nombre}
                  </span>
                </div>
              </Link>

              {/* Imagen 3 - Abajo a la izquierda */}
              <Link
                href={`/adopcion/${mascotas[2]?.id}`}
                className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2.5rem] bg-gray-300"
              >
                <Image
                  width={400}
                  height={400}
                  src={mascotas[2]?.imagenes[0]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={mascotas[2]?.nombre}
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xl font-bold text-white">
                    {mascotas[2]?.nombre}
                  </span>
                </div>
              </Link>

              {/* Imagen 4 - Abajo a la derecha */}
              <Link
                href={`/adopcion/${mascotas[3]?.id}`}
                className="group relative col-span-2 row-span-1 overflow-hidden rounded-4xl bg-gray-100"
              >
                <Image
                  width={400}
                  height={400}
                  src={mascotas[3]?.imagenes[0]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={mascotas[3]?.nombre}
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-bold text-white">
                    {mascotas[3]?.nombre}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
