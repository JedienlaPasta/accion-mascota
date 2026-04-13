'use client';

import { CalendarRange, ChevronRight, Clock } from 'lucide-react';
import { SecondaryButton } from '@/app/ui/components/Button';

type Appointment = {
  id: string;
  hora: string;
  fecha: string;
  nombreMascota: string;
  nombrePropietario: string;
  tipoConsulta: string;
};

function formatAppointmentDate(
  value: string,
  options?: Intl.DateTimeFormatOptions
) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat('es-CL', options).format(date);
}

const mockData: Appointment[] = [
  {
    id: '10:30-max',
    hora: '10:30',
    fecha: '2026-04-20',
    nombreMascota: 'Max',
    nombrePropietario: 'Juan Pérez',
    tipoConsulta: 'Vacunación',
  },
  {
    id: '11:00-toby',
    hora: '11:00',
    fecha: '2026-04-20',
    nombreMascota: 'Toby',
    nombrePropietario: 'Ana Silva',
    tipoConsulta: 'Control Post-operatorio',
  },
  {
    id: '11:30-michi',
    hora: '11:30',
    fecha: '2026-04-20',
    nombreMascota: 'Michi',
    nombrePropietario: 'Carlos Rojas',
    tipoConsulta: 'Desparasitación',
  },
  {
    id: '12:00-rocky',
    hora: '12:00',
    fecha: '2026-04-20',
    nombreMascota: 'Rocky',
    nombrePropietario: 'Pedro Martínez',
    tipoConsulta: 'Consulta General',
  },
];

export default function AppointmentsPendingToConfirm() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md lg:p-6">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-100">
            <CalendarRange className="size-5" />
          </div>
          <h2 className="truncate text-lg font-bold text-gray-900">
            Por Confirmar
          </h2>
        </div>
        <SecondaryButton className="items-center! gap-2 bg-white px-4 text-sm">
          Ver Todo
          <ChevronRight className="h-4 w-4" />
        </SecondaryButton>
      </header>
      <div className="grid max-h-112 grid-cols-1 gap-2.5 overflow-auto">
        {mockData.map((item) => (
          <AppointmentCard key={item.id} appointment={item} />
        ))}
      </div>
    </div>
  );
}

type AppointmentCardProps = {
  appointment: Appointment;
};

function AppointmentCard({ appointment }: AppointmentCardProps) {
  const formattedDate = formatAppointmentDate(appointment.fecha, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-3 transition-colors hover:bg-zinc-50">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-gray-50 text-zinc-700 shadow-sm shadow-zinc-950/10">
          <Clock className="size-4" />
          <p className="text-xs font-semibold tabular-nums">
            {appointment.hora}
          </p>
        </div>

        <div className="min-w-0">
          <div className="truncate text-xs font-bold tracking-wider text-zinc-700">
            <span className="truncate">{appointment.nombreMascota}</span>
            <span className="px-1">·</span>
            <span className="truncate text-zinc-500">
              {appointment.nombrePropietario}
            </span>
          </div>
          <p className="truncate text-sm text-zinc-600">
            {appointment.tipoConsulta}
          </p>
          <p className="truncate text-xs text-zinc-500">{formattedDate}</p>
        </div>
      </div>

      <SecondaryButton
        type="button"
        className="shrink-0 gap-2 bg-white px-3 text-sm group-hover:shadow-md"
      >
        Detalle
        <ChevronRight className="h-4 w-4" />
      </SecondaryButton>
    </div>
  );
}
