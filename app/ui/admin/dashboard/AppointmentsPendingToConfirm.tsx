'use client';

import { Clock } from 'lucide-react';

export default function AppointmentsPendingToConfirm() {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-8">
      <header className="mb-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-gray-900">Por Confirmar</h2>
          <p className="text-sm text-zinc-500">Jueves, 12 de octubre</p>
        </div>
        <button className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800">
          Ver Todas
        </button>
      </header>
      <div className="grid grid-cols-1 gap-2">
        <AppointmentCard
          hora="10:00"
          nombreMascota="Luna"
          nombrePropietario="María González"
          tipoConsulta="Consulta General"
          estado="confirmada"
        />
        <AppointmentCard
          hora="10:30"
          nombreMascota="Max"
          nombrePropietario="Juan Pérez"
          tipoConsulta="Vacunación"
          estado="pendiente"
        />
        <AppointmentCard
          hora="11:00"
          nombreMascota="Toby"
          nombrePropietario="Ana Silva"
          tipoConsulta="Control Post-operatorio"
          estado="confirmada"
        />
        <AppointmentCard
          hora="11:30"
          nombreMascota="Michi"
          nombrePropietario="Carlos Rojas"
          tipoConsulta="Desparasitación"
          estado="confirmada"
        />
        <AppointmentCard
          hora="12:00"
          nombreMascota="Rocky"
          nombrePropietario="Pedro Martínez"
          tipoConsulta="Consulta General"
          estado="pendiente"
        />
      </div>
    </div>
  );
}

type AppointmentRowProps = {
  hora: string;
  nombreMascota: string;
  nombrePropietario: string;
  tipoConsulta: string;
  estado: string;
};

function AppointmentCard({
  hora,
  nombreMascota,
  nombrePropietario,
  tipoConsulta,
  estado,
}: AppointmentRowProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-2 transition-shadow duration-300 hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600 p-2.5 text-emerald-50">
          <Clock className="size-4s" />
          <p className="text-xs font-semibold tabular-nums">{hora}</p>
        </div>

        <div className="min-w-0">
          <div className="text-muted-foreground truncate text-xs font-bold tracking-wider uppercase">
            <span className="truncate">{nombreMascota}</span>
            <span className="px-1">·</span>
            <span className="truncate">{nombrePropietario}</span>
          </div>
          <p className="text-muted-foreground truncate text-sm">
            {tipoConsulta}
          </p>
        </div>
      </div>
      <span
        className={`mr-2 inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white capitalize ${estado === 'confirmada' ? 'bg-emerald-500/80' : 'bg-amber-500/80'}`}
      >
        {estado}
      </span>
    </div>
  );
}
