import Link from 'next/link';
import type { ComponentType } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Scissors,
  Shield,
  Stethoscope,
  Syringe,
} from 'lucide-react';
import { servicios, horariosAtencion } from '@/app/_lib/mock-data';
import Badge from '@/app/ui/components/Badge';
import { RoundMutedButton } from '@/app/ui/components/Button';
import Image from 'next/image';

const serviciosDestacados = [
  {
    icon: Stethoscope,
    titulo: 'Consulta General',
    descripcion:
      'Evaluación médica completa, diagnóstico y tratamiento para tu mascota',
    precio: '$5.000',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Syringe,
    titulo: 'Vacunación',
    descripcion:
      'Vacunas obligatorias y opcionales para perros y gatos, algunas gratuitas',
    precio: 'Desde $0',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Scissors,
    titulo: 'Esterilización',
    descripcion:
      'Cirugía de esterilización con anestesia y medicamentos incluidos',
    precio: 'Desde $10.000',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    titulo: 'Microchip',
    descripcion:
      'Identificación permanente con registro en base de datos nacional',
    precio: 'Desde $5.000',
    color: 'bg-purple-50 text-purple-600',
  },
];

function formatPrice(precio: number | 'gratuito') {
  if (precio === 'gratuito') return 'Gratuito';
  return `${precio.toLocaleString('es-CL')}`;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  consulta: Stethoscope,
  vacunacion: Syringe,
  cirugia: Scissors,
  prevencion: Shield,
};

const categoryColors: Record<string, string> = {
  consulta: 'bg-blue-50 text-blue-600 border-blue-200',
  vacunacion: 'bg-green-50 text-green-600 border-green-200',
  cirugia: 'bg-amber-50 text-amber-600 border-amber-200',
  prevencion: 'bg-purple-50 text-purple-600 border-purple-200',
};

const categoryLabels: Record<string, string> = {
  consulta: 'Consultas',
  vacunacion: 'Vacunación',
  cirugia: 'Cirugías',
  prevencion: 'Prevención',
};

export default function ServiciosPage() {
  const categorias = [...new Set(servicios.map((s) => s.categoria))];

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              Nuestros Servicios
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
              Conoce todos los servicios que ofrecemos en la Veterinaria
              Municipal. Precios accesibles y atención de calidad para todas las
              mascotas de la comuna.
            </p>
          </div>
          <Image
            src="/dog_06.jpg"
            alt="Mascota"
            width={500}
            height={500}
            className="inset-0 size-full rounded-4xl object-cover"
          />
        </div>{' '}
        {}
        <div className="my-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground font-medium">Horario</p>
                <p className="text-muted-foreground text-sm">
                  Lun-Vie: {horariosAtencion.lunesViernes.apertura} -{' '}
                  {horariosAtencion.lunesViernes.cierre}
                </p>
                <p className="text-muted-foreground text-sm">
                  Sáb: {horariosAtencion.sabado.apertura} -{' '}
                  {horariosAtencion.sabado.cierre}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground font-medium">Ubicación</p>
                <p className="text-muted-foreground text-sm">
                  Av. Municipal 123
                </p>
                <p className="text-muted-foreground text-sm">Tu Comuna</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground font-medium">Contacto</p>
                <p className="text-muted-foreground text-sm">+56 2 1234 5678</p>
                <p className="text-muted-foreground text-sm">
                  veterinaria@tucomuna.cl
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="todos" className="space-y-12">
          {categorias.map((categoria) => {
            const Icon = iconMap[categoria];
            const serviciosCategoria = servicios.filter(
              (s) => s.categoria === categoria
            );

            if (!Icon) return null;

            return (
              <section key={categoria}>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${categoryColors[categoria]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    {categoryLabels[categoria]}
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {serviciosCategoria.map((servicio) => (
                    <div
                      key={servicio.id}
                      className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-foreground text-lg font-semibold">
                            {servicio.nombre}
                          </p>
                          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                            {servicio.descripcion}
                          </p>
                        </div>
                        {servicio.precio === 'gratuito' && (
                          <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                            Gratuito
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <p className="text-primary text-2xl font-bold">
                          {Number(servicio.precio) > 0 ? '$' : ''}
                          {formatPrice(servicio.precio)}
                        </p>
                        <div className="text-right">
                          <p className="text-muted-foreground text-sm">
                            Duración aprox.
                          </p>
                          <p className="text-foreground text-sm font-medium">
                            {servicio.duracion}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <div className="bg-muted/50 mt-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-700" />
            <h3 className="text-foreground text-lg font-bold">
              Requisitos para la atención
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              La persona que solicita los servicios debe ser el responsable de
              la mascota.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Debe ser mayor de 18 años.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Poseer registro social de hogares con domicilio en la comuna de
              Algarrobo.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Traer a la mascota con collar y correa (perros) o en transportador
              (gatos)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
