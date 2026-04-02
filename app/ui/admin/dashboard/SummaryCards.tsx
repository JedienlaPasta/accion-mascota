'use client';

import { Calendar, FileCheck, PawPrint, User } from 'lucide-react';
import type { ComponentType } from 'react';

const cardIcons: Record<string, ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  paw: PawPrint,
  user: User,
  month: FileCheck,
};

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <SummaryCard title="Citas" value={100} icon="calendar" />
      <SummaryCard title="Mascotas" value={100} icon="paw" />
      <SummaryCard title="Propietarios" value={100} icon="user" />
      <SummaryCard title="Atenciones" value={100} icon="month" />
    </div>
  );
}

type SummaryCardProps = {
  title: string;
  value: number;
  icon: keyof typeof cardIcons;
};

function SummaryCard({ title, value, icon }: SummaryCardProps) {
  const Icon = cardIcons[icon];

  return (
    <div className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-white p-6 transition-shadow duration-300 hover:shadow-md">
      <div className="flex min-w-0 flex-col justify-center">
        <h3 className="text-muted-foreground truncate text-xs font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-3xl font-bold tracking-tight text-emerald-800">
          {value.toLocaleString('es-CL')}
        </p>
      </div>

      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 text-emerald-50">
        <Icon className="size-7" />
      </div>
    </div>
  );
}
