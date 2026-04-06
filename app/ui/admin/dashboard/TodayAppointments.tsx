'use client';

type AppointmentStatus = 'confirmada' | 'pendiente';

const mockData = [
  {
    horaInicio: '10:00',
    horaFin: '10:30',
    nombreMascota: 'Luna',
    nombrePropietario: 'María González',
    tipoConsulta: 'Consulta General',
    estado: 'confirmada' as const,
  },
  {
    horaInicio: '10:30',
    horaFin: '11:00',
    nombreMascota: 'Max',
    nombrePropietario: 'Juan Pérez',
    tipoConsulta: 'Vacunación',
    estado: 'pendiente' as const,
  },
  {
    horaInicio: '11:00',
    horaFin: '11:30',
    nombreMascota: 'Toby',
    nombrePropietario: 'Ana Silva',
    tipoConsulta: 'Control Post-operatorio',
    estado: 'confirmada' as const,
  },
  {
    horaInicio: '11:30',
    horaFin: '12:00',
    nombreMascota: 'Mochi',
    nombrePropietario: 'Carlos Rojas',
    tipoConsulta: 'Desparasitación',
    estado: 'confirmada' as const,
  },
  {
    horaInicio: '12:00',
    horaFin: '12:30',
    nombreMascota: 'Rocky',
    nombrePropietario: 'Pedro Martínez',
    tipoConsulta: 'Consulta General',
    estado: 'pendiente' as const,
  },
];

export default function AppointmentTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200/80">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-zinc-50">
            <tr className="grid grid-cols-24 items-center gap-4 border-b border-zinc-200/70 px-4 py-3 text-left">
              <th className="col-span-4 text-xs font-semibold tracking-wide text-zinc-600 uppercase">
                Hora
              </th>
              <th className="col-span-4 text-xs font-semibold tracking-wide text-zinc-600 uppercase">
                Mascota
              </th>
              <th className="col-span-6 text-xs font-semibold tracking-wide text-zinc-600 uppercase">
                Propietario
              </th>
              <th className="col-span-8 text-xs font-semibold tracking-wide text-zinc-600 uppercase">
                Tipo
              </th>
              <th className="col-span-2 text-center text-xs font-semibold tracking-wide text-zinc-600 uppercase">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/70 bg-white">
            {mockData.map((item) => (
              <AppointmentTableRow
                key={`${item.horaInicio}-${item.nombreMascota}`}
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
      </div>
    </div>
  );
}

type AppointmentRowProps = {
  horaInicio: string;
  horaFin: string;
  nombreMascota: string;
  nombrePropietario: string;
  tipoConsulta: string;
  estado: AppointmentStatus;
};

function AppointmentTableRow({
  horaInicio,
  horaFin,
  nombreMascota,
  nombrePropietario,
  tipoConsulta,
  estado,
}: AppointmentRowProps) {
  const isConfirmed = estado === 'confirmada';
  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-zinc-50/80">
      <td className="col-span-4 font-medium text-zinc-900 tabular-nums">
        {horaInicio}
        <span className="px-2 text-zinc-300">—</span>
        {horaFin}
      </td>
      <td className="col-span-4 font-medium text-zinc-900">{nombreMascota}</td>
      <td className="col-span-6 truncate">{nombrePropietario}</td>
      <td className="col-span-8 truncate">{tipoConsulta}</td>
      <td className="col-span-2 flex justify-center">
        <span
          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold capitalize ${
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
      </td>
    </tr>
  );
}
