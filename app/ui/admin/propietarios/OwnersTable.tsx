'use client';

import { formatPhone, formatRUT } from '@/app/_lib/utils/format';
import { Ellipsis } from 'lucide-react';

const mockData = [
  {
    nombrePropietario: 'María González Pérez',
    rut: '12345678-9',
    contacto: '+56912345678',
    correo: 'maria.gonzalez@example.com',
    direccion: 'Av. Las Condes 123, Las Condes',
    mascotas: 2,
    registro: '14-03-2025',
  },
  {
    nombrePropietario: 'Juan Pérez Silva',
    rut: '14567890-1',
    contacto: '+56987654321',
    correo: 'juan.perez@example.com',
    direccion: 'Calle Los Olivos 456, Providencia',
    mascotas: 1,
    registro: '19-05-2025',
  },
  {
    nombrePropietario: 'Pedro Martínez Rojas',
    rut: '16789012-3',
    contacto: '+56912345678',
    correo: 'pedro.martinez@example.com',
    direccion: 'Los Aromos 789, La Florida',
    mascotas: 1,
    registro: '09-08-2025',
  },
  {
    nombrePropietario: 'Carlos Rojas Díaz',
    rut: '11234567-8',
    contacto: '+56944444444',
    correo: 'carlos.rojas@example.com',
    direccion: 'Av. Principal 101, Nunoa',
    mascotas: 1,
    registro: '04-09-2025',
  },
  {
    nombrePropietario: 'Lucia Fernandez Castro',
    rut: '15678901-2',
    contacto: '+56922222222',
    correo: 'lucia.fernandez@example.com',
    direccion: 'Calle Nueva 222, Providencia',
    mascotas: 2,
    registro: '11-10-2025',
  },
  {
    nombrePropietario: 'Ana Silva Moreno',
    rut: '13456789-0',
    contacto: '+56955555555',
    correo: 'ana.silva@example.com',
    direccion: 'Pasaje El Sol 333, Macul',
    mascotas: 1,
    registro: '	31-10-2025',
  },
  {
    nombrePropietario: 'Roberto Díaz Fuentes',
    rut: '17890123-4',
    contacto: '+56911111111',
    correo: 'robert.diaz@example.com',
    direccion: 'Av. Libertador 444, Santiago Centro',
    mascotas: 3,
    registro: '07-11-2025',
  },
];

export default function OwnersTable() {
  return (
    <div className="borders rounded-xls overflow-hidden border-zinc-200/80">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="border-b border-zinc-200/80">
            <tr className="grid grid-cols-24 items-center gap-4 py-3 text-left text-zinc-500">
              <th className="col-span-5 text-xs font-normal">Propietario</th>
              <th className="col-span-5 text-xs font-normal">Contacto</th>
              <th className="col-span-7 text-xs font-normal">Dirección</th>
              <th className="col-span-3 text-center text-xs font-normal">
                Mascotas
              </th>
              <th className="col-span-2 text-center text-xs font-normal">
                Registro
              </th>
              <th className="col-span-2 text-center text-xs font-normal">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/70 bg-white">
            {mockData.map((item) => (
              <OwnerTableRow
                key={`${item.rut}`}
                nombrePropietario={item.nombrePropietario}
                rut={item.rut}
                contacto={item.contacto}
                correo={item.correo}
                direccion={item.direccion}
                mascotas={item.mascotas}
                registro={item.registro}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type OwnerTableRowProps = {
  nombrePropietario: string;
  rut: string;
  contacto: string;
  correo: string;
  direccion: string;
  mascotas: number;
  registro: string;
};

function OwnerTableRow({
  nombrePropietario,
  rut,
  contacto,
  correo,
  direccion,
  mascotas,
  registro,
}: OwnerTableRowProps) {
  const subrut = rut.split('-')[0];
  const dv = rut.split('-')[1];
  const formattedRut = formatRUT(subrut, dv);

  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 py-4 text-sm text-zinc-600 transition-colors hover:bg-zinc-50/80">
      <td className="col-span-5">
        <p className="font-medium text-zinc-900">{nombrePropietario}</p>
        <p className="text-xs tabular-nums">{formattedRut}</p>
      </td>
      <td className="col-span-5">
        <p className="font-medium text-zinc-900 tabular-nums">
          {formatPhone(contacto)}
        </p>
        <p className="text-xs">{correo}</p>
      </td>
      <td className="col-span-7 truncate">
        <p className="font-medium text-zinc-900">{direccion}</p>
      </td>

      <td className="col-span-3 flex justify-center tabular-nums">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 capitalize">
          {mascotas}
        </span>
      </td>
      <td className="col-span-2 truncate text-center tabular-nums">
        {registro}
      </td>
      <td className="relative col-span-2 flex justify-center">
        <Ellipsis className="peer relative z-10 size-6 hover:text-zinc-800" />
        <span className="absolute top-1/2 z-0 size-8 -translate-y-1/2 rounded-full bg-transparent transition-colors peer-hover:bg-zinc-200/80" />
      </td>
    </tr>
  );
}
