'use client';

import { formatPhone } from '@/app/_lib/utils/format';
import { Ellipsis } from 'lucide-react';

const mockData = [
  {
    nombreMascota: 'Luna',
    peso: '3.5kg',
    descripcion: 'Crema con puntos oscuros',
    especie: 'Gato',
    raza: 'Siamés',
    nombrePropietario: 'María González',
    microchip: '956000012345678',
    telefono: '+56912345678',
    esterilizado: true,
  },
  {
    nombreMascota: 'Max',
    peso: '12kg',
    descripcion: 'Negro con manchas blancas',
    especie: 'Perro',
    raza: 'Mestizo mediano',
    nombrePropietario: 'Juan Pérez',
    microchip: '',
    telefono: '+56912345678',
    esterilizado: false,
  },
  {
    nombreMascota: 'Toby',
    peso: '7kg',
    descripcion: 'Gris sal y pimienta',
    especie: 'Perro',
    raza: 'Schnauzer',
    nombrePropietario: 'Ana Silva',
    microchip: '956000012345680',
    telefono: '+56912345678',
    esterilizado: true,
  },
  {
    nombreMascota: 'Mochi',
    peso: '1.5kg',
    descripcion: 'Atigrado gris',
    especie: 'Gato',
    raza: 'Común Europeo',
    nombrePropietario: 'Carlos Rojas',
    microchip: '956000012345681',
    telefono: '+56912345678',
    esterilizado: true,
  },
  {
    nombreMascota: 'Rocky',
    peso: '8kg',
    descripcion: 'Dorado',
    especie: 'Perro',
    raza: 'Labrador',
    nombrePropietario: 'Pedro Martínez',
    microchip: '956000012345682',
    telefono: '+56912345678',
    esterilizado: false,
  },
];

export default function PetsTable() {
  return (
    <div className="borders rounded-xls overflow-hidden border-zinc-200/80">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="border-b border-zinc-200/80">
            <tr className="grid grid-cols-24 items-center gap-4 py-3 text-left text-zinc-500">
              <th className="col-span-5 text-xs font-normal">Mascota</th>
              <th className="col-span-4 text-xs font-normal">Especie/Raza</th>
              <th className="col-span-6 text-xs font-normal">Propietario</th>
              <th className="col-span-5 text-xs font-normal">Microchip</th>
              <th className="col-span-2 text-center text-xs font-normal">
                Esterilizado
              </th>
              <th className="col-span-2 text-center text-xs font-normal">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/70 bg-white">
            {mockData.map((item) => (
              <PetTableRow
                key={`${item.microchip}`}
                nombreMascota={item.nombreMascota}
                peso={item.peso}
                descripcion={item.descripcion}
                nombrePropietario={item.nombrePropietario}
                especie={item.especie}
                raza={item.raza}
                microchip={item.microchip}
                telefono={item.telefono}
                esterilizado={item.esterilizado}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type PetTableRowProps = {
  nombreMascota: string;
  peso: string;
  descripcion: string;
  nombrePropietario: string;
  especie: string;
  raza: string;
  microchip: string;
  telefono: string;
  esterilizado: boolean;
};

function PetTableRow({
  nombreMascota,
  peso,
  descripcion,
  nombrePropietario,
  especie,
  raza,
  microchip,
  telefono,
  esterilizado,
}: PetTableRowProps) {
  const isConfirmed = esterilizado;
  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 py-4 text-sm text-zinc-600 transition-colors hover:bg-zinc-50/80">
      <td className="col-span-5">
        <p className="font-medium text-zinc-900">{nombreMascota}</p>
        <p className="text-xs">
          {peso} <strong>·</strong> {descripcion}
        </p>
      </td>
      <td className="col-span-4">
        <p className="font-medium text-zinc-900">{especie}</p>
        <p className="text-xs">{raza}</p>
      </td>
      <td className="col-span-6 truncate">
        <p className="font-medium text-zinc-900">{nombrePropietario}</p>
        <p className="text-xs tabular-nums">{formatPhone(telefono)}</p>
      </td>
      <td className="col-span-5 truncate tabular-nums">{microchip}</td>
      <td className="col-span-2 flex justify-center">
        <span
          className={`inline-flex w-8 shrink-0 items-center justify-center gap-2 rounded-lg border py-1 text-[11px] font-semibold capitalize ${
            isConfirmed
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-amber-200 bg-amber-50 text-amber-700'
          }`}
        >
          {esterilizado ? 'Si' : 'No'}
        </span>
      </td>
      <td className="relative col-span-2 flex justify-center">
        <Ellipsis className="peer relative z-10 size-6 hover:text-zinc-800" />
        <span className="absolute top-1/2 z-0 size-8 -translate-y-1/2 rounded-full bg-transparent transition-colors peer-hover:bg-zinc-200/80" />
      </td>
    </tr>
  );
}
