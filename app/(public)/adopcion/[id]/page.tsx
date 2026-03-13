import { mascotasAdopcion } from '@/app/_lib/mock-data';
import ImagenMascota from '@/app/ui/public/adopcion/ImagenMascota';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Heart,
  Info,
  Ruler,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

type MascotaPerfilPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MascotaPerfilPage({
  params,
}: MascotaPerfilPageProps) {
  const { id } = await params;
  const mascota = mascotasAdopcion.find((m) => m.id === id);
  if (!mascota) return <div>Mascota no encontrada</div>;

  return (
    <div className="bg-secondary-background min-h-screen pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/adopcion"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#006D4E]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la galería
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Izquierda - Galeria de Imagenes */}
          <div className="space-y-4">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-sm sm:aspect-square lg:aspect-4/5">
              <ImagenMascota
                src={mascota.imagenes[0]}
                alt={`Fotografía de ${mascota.nombre}`}
              />

              {/* Estado */}
              <div className="absolute top-6 left-6">
                {mascota.estado === 'disponible' ? (
                  <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                    ¡Busco hogar!
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                    En proceso de adopción
                  </span>
                )}
              </div>
            </div>

            {/* Si hay más imágenes van aquí abajo como miniaturas */}
            {mascota.imagenes.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {mascota.imagenes.slice(1).map((img, idx) => (
                  <button
                    key={idx}
                    className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-200 transition-opacity hover:opacity-80"
                  >
                    <ImagenMascota
                      src={img}
                      alt={`Miniatura de ${mascota.nombre}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Derecha - Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  {mascota.nombre}
                </h1>
                <p className="mt-2 text-lg font-medium text-gray-500 capitalize">
                  {mascota.especie} • {mascota.sexo}
                </p>
              </div>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors hover:bg-red-100 hover:text-red-600">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <Calendar className="mb-2 h-6 w-6 text-[#006D4E]" />
                <span className="text-xs text-gray-500">Edad aprox.</span>
                <span className="font-semibold text-gray-900">
                  {mascota.edadAprox}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <Ruler className="mb-2 h-6 w-6 -rotate-90 text-[#006D4E]" />
                <span className="text-xs text-gray-500">Tamaño</span>
                <span className="font-semibold text-gray-900 capitalize">
                  {mascota.tamaño}
                </span>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm sm:col-span-1">
                <Info className="mb-2 h-6 w-6 text-[#006D4E]" />
                <span className="text-xs text-gray-500">Ingreso</span>
                <span className="font-semibold text-gray-900">
                  {new Date(mascota.fechaIngreso).toLocaleDateString('es-CL')}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                La historia de {mascota.nombre}
              </h2>
              <p className="leading-relaxed text-gray-600">
                {mascota.historia}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                <ShieldCheck className="h-5 w-5 text-[#006D4E]" />
                Estado de Salud
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {mascota.salud.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto rounded-4xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
              <h3 className="mb-2 text-xl font-bold text-emerald-950">
                ¿Quieres adoptar a {mascota.nombre}?
              </h3>
              <p className="mb-6 text-sm text-emerald-800/80">
                El proceso es gratuito. Evaluaremos tu solicitud para asegurar
                que {mascota.nombre} tenga el mejor hogar posible.
              </p>
              <Link
                href={`/adopcion/solicitud/${mascota.id}`}
                className="flex w-full items-center justify-center rounded-xl bg-[#006D4E] px-6 py-4 text-lg font-bold text-white transition-all hover:bg-[#005a40] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {mascota.estado === 'disponible'
                  ? 'Iniciar solicitud de adopción'
                  : 'Mascota en proceso'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
