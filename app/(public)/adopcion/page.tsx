'use client';
import { useState } from 'react';
import { Search, Heart, Info, Ruler } from 'lucide-react';
import { mascotasAdopcion } from '@/app/_lib/mock-data';
import ImagenMascota from '@/app/ui/public/adopcion/ImagenMascota';
import Link from 'next/link';

export default function AdopcionPage() {
  const [filtroEspecie, setFiltroEspecie] = useState<
    'todas' | 'perro' | 'gato'
  >('todas');

  const mascotasFiltradas = mascotasAdopcion.filter((mascota) => {
    if (filtroEspecie === 'todas') return true;
    return mascota.especie === filtroEspecie;
  });

  return (
    <div className="bg-secondary-background min-h-screen pb-24">
      {/* Hero Section */}
      <div className="border-b border-gray-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-[#006D4E]">
            <Heart className="h-4 w-4" />
            <span>Adopta, no compres</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Encuentra a tu compañero ideal
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Nuestros animalitos rescatados en Algarrobo están esperando una
            familia que les brinde el amor que merecen. Todos han sido evaluados
            por Acción Mascota.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        {/* Filtros */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-2 sm:w-auto sm:pb-0">
            <button
              onClick={() => setFiltroEspecie('todas')}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                filtroEspecie === 'todas'
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroEspecie('perro')}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                filtroEspecie === 'perro'
                  ? 'bg-[#006D4E] text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              🐶 Perros
            </button>
            <button
              onClick={() => setFiltroEspecie('gato')}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                filtroEspecie === 'gato'
                  ? 'bg-amber-500 text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              🐱 Gatos
            </button>
          </div>

          <p className="text-sm font-medium text-gray-500">
            Mostrando {mascotasFiltradas.length} mascotas
          </p>
        </div>

        {/* Galería de Mascotas */}
        {mascotasFiltradas.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mascotasFiltradas.map((mascota) => (
              <div
                key={mascota.id}
                className="group flex flex-col overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Imagen y Badges */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <ImagenMascota
                    src={mascota.imagenes[0]}
                    alt={`Fotografía de ${mascota.nombre}`}
                  />

                  {/* Estado */}
                  <div className="absolute top-4 left-4">
                    {mascota.estado === 'disponible' ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur-sm">
                        Disponible
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-100/90 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm backdrop-blur-sm">
                        En Proceso
                      </span>
                    )}
                  </div>
                </div>

                {/* Informacion de la Mascota */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {mascota.nombre}
                    </h2>
                    <span className="text-sm font-medium text-gray-500 capitalize">
                      {mascota.sexo}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 shrink-0 text-gray-400" />
                      <span>{mascota.edadAprox}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 shrink-0 -rotate-90 text-gray-400" />
                      <span className="capitalize">
                        Tamaño {mascota.tamaño}
                      </span>
                    </div>
                  </div>

                  {/* Resumen de salud (tags pequeños) */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {mascota.salud.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                    {mascota.salud.length > 2 && (
                      <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        +{mascota.salud.length - 2}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/adopcion/${mascota.id}`}
                    className="mt-auto block w-full rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#006D4E]"
                  >
                    Conocer a {mascota.nombre}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado Vacio en caso de que un filtro no devuelva resultados */
          <div className="flex flex-col items-center justify-center rounded-4xl border-2 border-dashed border-gray-200 bg-white py-24 text-center">
            <Search className="mb-4 h-12 w-12 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-900">
              No encontramos mascotas
            </h3>
            <p className="mt-2 text-gray-500">
              No hay animalitos de esta categoría en este momento.
            </p>
            <button
              onClick={() => setFiltroEspecie('todas')}
              className="mt-6 text-sm font-semibold text-[#006D4E] hover:underline"
            >
              Ver todas las mascotas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
