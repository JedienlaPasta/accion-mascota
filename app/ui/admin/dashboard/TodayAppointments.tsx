'use client';

import { Clock } from 'lucide-react';

const mockData = [
  {
    horaInicio: '10:00',
    horaFin: '10:30',
    nombreMascota: 'Luna',
    nombrePropietario: 'María González',
    tipoConsulta: 'Consulta General',
    estado: 'confirmada',
  },
  {
    horaInicio: '10:30',
    horaFin: '11:00',
    nombreMascota: 'Max',
    nombrePropietario: 'Juan Pérez',
    tipoConsulta: 'Vacunación',
    estado: 'pendiente',
  },
  {
    horaInicio: '11:00',
    horaFin: '11:30',
    nombreMascota: 'Toby',
    nombrePropietario: 'Ana Silva',
    tipoConsulta: 'Control Post-operatorio',
    estado: 'confirmada',
  },
  {
    horaInicio: '11:30',
    horaFin: '12:00',
    nombreMascota: 'Mochi',
    nombrePropietario: 'Carlos Rojas',
    tipoConsulta: 'Desparasitación',
    estado: 'confirmada',
  },
  {
    horaInicio: '12:00',
    horaFin: '12:30',
    nombreMascota: 'Rocky',
    nombrePropietario: 'Pedro Martínez',
    tipoConsulta: 'Consulta General',
    estado: 'pendiente',
  },
];

export default function AppointmentTable() {
  return (
    <table className="flex flex-col space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-8">
      <thead className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-gray-900">Horario de Hoy</h2>
          <p className="text-sm text-zinc-500">Jueves, 12 de octubre</p>
        </div>
        <button className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800">
          Ver Todas
        </button>
      </thead>
      <tbody className="grid divide-y divide-zinc-200">
        {mockData.map((item) => (
          <AppointmentRow
            key={item.horaInicio}
            horaInicio={item.horaInicio}
            horaFin={item.horaFin}
            nombreMascota={item.nombreMascota}
            nombrePropietario={item.nombrePropietario}
            tipoConsulta={item.tipoConsulta}
            estado={item.estado}
          />
        ))}
        {mockData.map((item) => (
          <AppointmentTableRow
            key={item.horaInicio}
            horaInicio={item.horaInicio}
            horaFin={item.horaFin}
            nombreMascota={item.nombreMascota}
            nombrePropietario={item.nombrePropietario}
            tipoConsulta={item.tipoConsulta}
            estado={item.estado}
          />
        ))}
      </tbody>
    </table>
  );
}

type AppointmentRowProps = {
  horaInicio: string;
  horaFin: string;
  nombreMascota: string;
  nombrePropietario: string;
  tipoConsulta: string;
  estado: string;
};

function AppointmentRow({
  horaInicio,
  horaFin,
  nombreMascota,
  nombrePropietario,
  tipoConsulta,
  estado,
}: AppointmentRowProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-2 transition-shadow duration-300 hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-zinc-600 to-zinc-950 p-2.5 text-emerald-50">
          <Clock className="size-4s" />
          <p className="text-xs font-semibold tabular-nums">{`${horaInicio} - ${horaFin}`}</p>
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
        className={`mr-2 inline-flex shrink-0 items-center gap-2 rounded-md border px-3 py-1 text-xs font-semibold capitalize ${estado === 'confirmada' ? 'border-emerald-300 bg-emerald-50 text-emerald-600' : 'border-amber-300 bg-amber-50 text-amber-600'}`}
      >
        {estado}
      </span>
    </div>
  );
}

function AppointmentTableRow({
  horaInicio,
  horaFin,
  nombreMascota,
  nombrePropietario,
  tipoConsulta,
  estado,
}: AppointmentRowProps) {
  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 p-2 px-4 text-sm text-zinc-600">
      <td className="col-span-4 font-medium tabular-nums">{`${horaInicio} - ${horaFin}`}</td>
      <td className="col-span-4 font-medium">{nombreMascota}</td>
      <td className="col-span-6">{nombrePropietario}</td>
      <td className="col-span-8">{tipoConsulta}</td>
      <td className="col-span-2 text-center text-xs font-medium capitalize">
        {estado}
      </td>
    </tr>
  );
}
