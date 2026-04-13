import {
  Calendar,
  Ellipsis,
  Syringe,
  Stethoscope,
  FileText,
  Radar,
  FileCheck,
} from 'lucide-react';
import { ComponentType } from 'react';

type VisitRegistry = {
  registro: string;
  nombreMascota: string;
  especie: string;
  tipoAtencion: 'consulta' | 'vacuna' | 'cirugia' | 'control';
  diagnostico: string;
  veterinario: string;
  microchip: string;
};

const mockData: VisitRegistry[] = [
  {
    registro: '14-03-2025',
    nombreMascota: 'Luna',
    especie: 'Gato',
    tipoAtencion: 'consulta',
    diagnostico: 'Gastritis leve',
    veterinario: 'Dr. Carlos Muñoz',
    microchip: '956000012345678',
  },
  {
    registro: '19-05-2025',
    nombreMascota: 'Luna',
    especie: 'Gato',
    tipoAtencion: 'vacuna',
    diagnostico: 'Paciente sano, apto para vacunación',
    veterinario: 'Dra. Ana Soto',
    microchip: '956000012345679',
  },
  {
    registro: '09-08-2025',
    nombreMascota: 'Luna',
    especie: 'Gato',
    tipoAtencion: 'cirugia',
    diagnostico: 'Procedimiento exitoso sin complicaciones',
    veterinario: 'Dr. Carlos Muñoz',
    microchip: '956000012345680',
  },
  {
    registro: '04-09-2025',
    nombreMascota: 'Mochi',
    especie: 'Gato',
    tipoAtencion: 'control',
    diagnostico: 'Paciente en excelente estado',
    veterinario: 'Dra. Ana Soto',
    microchip: '956000012345681',
  },
  {
    registro: '11-10-2025',
    nombreMascota: 'Mochi',
    especie: 'Gato',
    tipoAtencion: 'vacuna',
    diagnostico: 'Paciente sano, apto para vacunación',
    veterinario: 'Dr. Carlos Muñoz',
    microchip: '956000012345682',
  },
  {
    registro: '	31-10-2025',
    nombreMascota: 'Toby',
    especie: 'Perro',
    tipoAtencion: 'vacuna',
    diagnostico: 'Cachorro sano',
    veterinario: 'Dra. Ana Soto',
    microchip: '956000012345683',
  },
  {
    registro: '07-11-2025',
    nombreMascota: 'Rocky',
    especie: 'Perro',
    tipoAtencion: 'control',
    diagnostico: 'Paciente en excelente estado',
    veterinario: 'Dra. Ana Soto',
    microchip: '956000012345684',
  },
];

export default function VisitsTable() {
  return (
    <div className="borders rounded-xls overflow-hidden border-zinc-200/80">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="border-b border-zinc-200/80">
            <tr className="grid grid-cols-24 items-center gap-4 py-3 text-left text-zinc-500">
              <th className="col-span-4 text-xs font-normal">Fecha</th>
              <th className="col-span-3 text-xs font-normal">Mascota</th>
              <th className="col-span-3 text-xs font-normal">Tipo</th>
              <th className="col-span-9 text-xs font-normal">Diagnóstico</th>
              <th className="col-span-3 text-xs font-normal">Veterinario</th>
              <th className="col-span-2 text-center text-xs font-normal">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/70 bg-white">
            {mockData.map((item) => (
              <VisitTableRow
                key={`${item.microchip}`}
                nombreMascota={item.nombreMascota}
                tipoAtencion={item.tipoAtencion}
                diagnostico={item.diagnostico}
                veterinario={item.veterinario}
                registro={item.registro}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type VisitTableRowProps = {
  registro: string;
  nombreMascota: string;
  tipoAtencion: 'consulta' | 'vacuna' | 'cirugia' | 'control';
  diagnostico: string;
  veterinario: string;
};

const cardIcons: Record<string, ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  vacuna: Syringe,
  cirugia: Stethoscope,
  control: FileText,
  consulta: FileCheck,
};

function VisitTableRow({
  registro,
  nombreMascota,
  tipoAtencion,
  diagnostico,
  veterinario,
}: VisitTableRowProps) {
  const VisitTypeIcon = cardIcons[tipoAtencion];

  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 py-4 text-sm text-zinc-600 transition-colors hover:bg-zinc-50/80">
      <td className="col-span-4 font-medium text-zinc-900 tabular-nums">
        {registro}
      </td>
      <td className="col-span-3 font-medium text-zinc-900 tabular-nums">
        {nombreMascota}
      </td>
      <td className="col-span-3 flex tabular-nums">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 capitalize">
          <VisitTypeIcon className="size-3" />
          {tipoAtencion}
        </span>
      </td>
      <td className="col-span-9 truncate font-medium text-zinc-900">
        {diagnostico}
      </td>
      <td className="col-span-3 truncate tabular-nums">{veterinario}</td>
      <td className="relative col-span-2 flex justify-center">
        <Ellipsis className="peer relative z-10 size-6 hover:text-zinc-800" />
        <span className="absolute top-1/2 z-0 size-8 -translate-y-1/2 rounded-full bg-transparent transition-colors peer-hover:bg-zinc-200/80" />
      </td>
    </tr>
  );
}
