'use client';

import { Mascota, propietariosAdmin } from '@/app/_lib/mock-data';
import { formatPhone } from '@/app/_lib/utils/format';
import { Ellipsis } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PetsTable({ data }: { data: Mascota[] }) {
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
            {data.map((item) => (
              <PetTableRow
                key={`${item.id + item.chip}`}
                id={item.id}
                nombre={item.nombre}
                especie={item.especie}
                raza={item.raza}
                fechaNacimiento={item.fechaNacimiento}
                sexo={item.sexo}
                color={item.color}
                peso={item.peso}
                descripcion={item.descripcion}
                chip={item.chip}
                esterilizado={item.esterilizado}
                foto={item.foto}
                propietarioId={item.propietarioId}
                propietarioNombre={item.propietarioNombre}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PetTableRow({
  id,
  nombre,
  especie,
  raza,
  fechaNacimiento,
  sexo,
  color,
  peso,
  descripcion,
  chip,
  esterilizado,
  foto,
  propietarioId,
  propietarioNombre,
}: Mascota) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const phone = propietariosAdmin.find(
    (item) => item.id === propietarioId
  )?.telefono;
  const formattedPhone = formatPhone(phone);

  const handleClick = () => {
    if (!chip) return;
    const params = new URLSearchParams(searchParams);
    params.set('id', String(chip));
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : '', { scroll: false });
  };

  return (
    <tr className="grid cursor-pointer grid-cols-24 items-center gap-4 py-4 text-sm text-zinc-600 transition-colors hover:bg-zinc-50/80">
      <td className="col-span-5">
        <p className="font-medium text-zinc-900">{nombre}</p>
        <p className="text-xs">
          {peso} <strong>·</strong> {descripcion}
        </p>
      </td>
      <td className="col-span-4">
        <p className="font-medium text-zinc-900 capitalize">{especie}</p>
        <p className="text-xs">{raza}</p>
      </td>
      <td className="col-span-6 truncate">
        <p className="font-medium text-zinc-900">{propietarioNombre}</p>
        <p className="text-xs tabular-nums">{formattedPhone}</p>
      </td>
      <td
        onClick={handleClick}
        className="col-span-5 truncate tabular-nums hover:underline"
      >
        {chip}
      </td>
      <td className="col-span-2 flex justify-center">
        <span
          className={`inline-flex w-8 shrink-0 items-center justify-center gap-2 rounded-lg border py-1 text-[11px] font-semibold capitalize ${
            esterilizado
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
