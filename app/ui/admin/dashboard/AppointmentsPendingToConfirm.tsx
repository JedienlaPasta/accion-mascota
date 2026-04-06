'use client';

import { ChevronRight, Clock } from 'lucide-react';
import { SecondaryButton } from '@/app/ui/components/Button';

type AppointmentStatus = 'confirmada' | 'pendiente';

const mockData = [
  {
    hora: '10:00',
    nombreMascota: 'Luna',
    nombrePropietario: 'María González',
    tipoConsulta: 'Consulta General',
    estado: 'confirmada' as const,
  },
  {
    hora: '10:30',
    nombreMascota: 'Max',
    nombrePropietario: 'Juan Pérez',
    tipoConsulta: 'Vacunación',
    estado: 'pendiente' as const,
  },
  {
    hora: '11:00',
    nombreMascota: 'Toby',
    nombrePropietario: 'Ana Silva',
    tipoConsulta: 'Control Post-operatorio',
    estado: 'confirmada' as const,
  },
  {
    hora: '11:30',
    nombreMascota: 'Michi',
    nombrePropietario: 'Carlos Rojas',
    tipoConsulta: 'Desparasitación',
    estado: 'confirmada' as const,
  },
  {
    hora: '12:00',
    nombreMascota: 'Rocky',
    nombrePropietario: 'Pedro Martínez',
    tipoConsulta: 'Consulta General',
    estado: 'pendiente' as const,
  },
];

export default function AppointmentsPendingToConfirm() {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 transition-shadow duration-300 hover:shadow-md lg:p-8">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-100">
            <Clock className="size-5" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-gray-900">
              Por Confirmar
            </h2>
            <p className="text-sm text-zinc-500">Jueves, 12 de octubre</p>
          </div>
        </div>
        <SecondaryButton className="gap-2 bg-white px-4 text-sm">
          Ver Todas
          <ChevronRight className="h-4 w-4" />
        </SecondaryButton>
      </header>
      <div className="grid max-h-[28rem] grid-cols-1 gap-2.5 overflow-auto pr-1">
        {mockData.map((item) => (
          <AppointmentCard
            key={`${item.hora}-${item.nombreMascota}`}
            hora={item.hora}
            nombreMascota={item.nombreMascota}
            nombrePropietario={item.nombrePropietario}
            tipoConsulta={item.tipoConsulta}
            estado={item.estado}
          />
        ))}
      </div>
    </div>
  );
}

type AppointmentRowProps = {
  hora: string;
  nombreMascota: string;
  nombrePropietario: string;
  tipoConsulta: string;
  estado: AppointmentStatus;
};

function AppointmentCard({
  hora,
  nombreMascota,
  nombrePropietario,
  tipoConsulta,
  estado,
}: AppointmentRowProps) {
  const isConfirmed = estado === 'confirmada';
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-2.5 transition-shadow duration-300 hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600 p-2.5 text-emerald-50 shadow-sm shadow-emerald-950/10">
          <Clock className="size-4" />
          <p className="text-xs font-semibold tabular-nums">{hora}</p>
        </div>

        <div className="min-w-0">
          <div className="truncate text-xs font-bold tracking-wider text-zinc-700 uppercase">
            <span className="truncate">{nombreMascota}</span>
            <span className="px-1">·</span>
            <span className="truncate text-zinc-500">{nombrePropietario}</span>
          </div>
          <p className="truncate text-sm text-zinc-600">{tipoConsulta}</p>
        </div>
      </div>
      <span
        className={`mr-2 inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
          isConfirmed
            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
            : 'border-amber-200 bg-amber-50 text-amber-700'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isConfirmed ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
        {estado}
      </span>
    </div>
  );
}
