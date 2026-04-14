import Link from 'next/link';
import { Card, CardDescription, CardTitle } from './Card';
import {
  Stethoscope,
  Syringe,
  Scissors,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { RoundMutedButton } from '../components/Button';

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

export function ServicesPreview() {
  return (
    <section className="bg-secondary-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Ofrecemos atención veterinaria integral a precios accesibles para
            toda la comunidad. Algunos servicios son gratuitos, mientras que
            otros tienen precios preferenciales según tu Registro Social de
            Hogares.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviciosDestacados.map((servicio) => (
            <Card
              key={servicio.titulo}
              className="group cursor-pointer justify-between transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="px-6">
                <div
                  className={`h-12 w-12 rounded-lg ${servicio.color} mb-4 flex items-center justify-center`}
                >
                  <servicio.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mb-1 text-lg">
                  {servicio.titulo}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {servicio.descripcion}
                </CardDescription>
              </div>
              <div className="self-end px-6">
                <p className="text-primary self-end text-2xl font-bold">
                  {servicio.precio}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 place-self-center">
          <Link href="/servicios">
            <button className="relative cursor-pointer rounded-2xl bg-gray-100 bg-linear-to-br px-6 py-4 text-lg font-black text-gray-600 shadow-lg ring-2 ring-gray-300/90 transition-all duration-300 hover:scale-103 active:scale-95 md:px-10">
              <span>Ver todos los servicios</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
