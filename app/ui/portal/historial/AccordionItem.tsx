'use client';

import { getPetName } from '@/app/(portal)/portal/historial/page';
import { HistorialClinico } from '@/app/_lib/mock-data';
import { Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type AccordionItemProps = {
  registro: HistorialClinico;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  TipoIcon: React.ComponentType<{ className?: string }>;
  colors: {
    bg: string;
    text: string;
    ring: string;
  };
};

export default function AccordionItem({
  registro,
  label,
  Icon,
  TipoIcon,
  colors,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={registro.id}
      className="cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="relative z-50 flex items-center justify-between gap-3 bg-white">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 ${colors.bg} ${colors.text} ${colors.ring}`}
          >
            <TipoIcon className="size-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold">{registro.descripcion}</p>

            <div className="flex gap-3">
              <span className="flex items-center rounded-full border border-gray-200 px-2 text-xs font-medium text-gray-700 capitalize">
                {label}
              </span>
              <span className="text-sm text-gray-500 capitalize">|</span>
              <span className="text-sm text-gray-500 capitalize">
                <div className="flex items-center gap-1">
                  <Icon className="size-3" />
                  {getPetName(registro.mascotaId)}
                </div>
              </span>
              <span className="text-sm text-gray-500 capitalize">|</span>
              <span className="text-sm text-gray-500 capitalize">
                <div className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(registro.fecha).toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* Right */}
        <ChevronDown
          className={`size-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`will-change-[grid-template-rows, opacity] ml-13 grid transform-gpu transition-all duration-500 ${isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-w-0 overflow-hidden">
          <div className="flex flex-col gap-4 rounded-xl bg-gray-50 px-5 py-4">
            {/* Diagnóstico */}
            <div className="flex items-center gap-3 text-gray-700">
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  Diagnóstico
                </p>
                <p className="text-sm font-semibold">{registro.diagnostico}</p>
              </div>
            </div>
            {/* Tratamiento */}
            <div className="flex items-center gap-3 text-gray-700">
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  Tratamiento Recomendado
                </p>
                <p className="text-sm font-semibold">
                  {registro.tratamiento || 'Churu de pollito'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
