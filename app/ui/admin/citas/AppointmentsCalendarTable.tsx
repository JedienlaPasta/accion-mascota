'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const SLOT_MIN = 15;
const DAY_START = '08:30';
const DAY_END = '17:30';
const SLOT_HEIGHT = 30;

type Status = 'Agendado' | 'Completado' | 'Cancelado';

type Appointment = {
  id: string;
  day: number;
  start: string;
  end: string;
  title: string;
  subtitle?: string;
  status: Status;
};

const MOCK_EVENTS: Appointment[] = [
  {
    id: 'a1',
    day: 0,
    start: '09:00',
    end: '10:00',
    title: 'Luna',
    subtitle: 'Consulta',
    status: 'Completado',
  },
  {
    id: 'a2',
    day: 0,
    start: '10:30',
    end: '11:30',
    title: 'Koda',
    subtitle: 'Control',
    status: 'Cancelado',
  },
  {
    id: 'a3',
    day: 1,
    start: '09:30',
    end: '10:30',
    title: 'Roko',
    subtitle: 'Revisión',
    status: 'Completado',
  },
  {
    id: 'a4',
    day: 1,
    start: '11:00',
    end: '12:00',
    title: 'Morita',
    subtitle: 'Dolor',
    status: 'Agendado',
  },
  {
    id: 'a5',
    day: 2,
    start: '10:30',
    end: '11:30',
    title: 'Manchitas',
    subtitle: 'Dolor',
    status: 'Agendado',
  },
  {
    id: 'a6',
    day: 2,
    start: '14:00',
    end: '15:00',
    title: 'Milo',
    subtitle: 'Dolor',
    status: 'Agendado',
  },
  {
    id: 'a7',
    day: 3,
    start: '08:30',
    end: '09:30',
    title: 'Leo',
    subtitle: 'Chequeo',
    status: 'Agendado',
  },
  {
    id: 'a8',
    day: 4,
    start: '11:00',
    end: '12:00',
    title: 'Canela',
    subtitle: 'Resultados',
    status: 'Agendado',
  },
];

function toMin(t: string) {
  const [hour, minute] = t.split(':').map(Number);
  return hour * 60 + minute;
}

function startOfWeek(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = (day + 6) % 7;
  d.setDate(d.getDate() - diff);
  return d;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDateParts(date: Date, options: Intl.DateTimeFormatOptions) {
  const parts = new Intl.DateTimeFormat('es-CL', options).formatToParts(date);
  console.log(parts);
  return parts
    .filter((p) => p.type !== 'literal')
    .map((p) =>
      p.type === 'month' ? p.value[0].toUpperCase() + p.value.slice(1) : p.value
    )
    .join(' ');
}

function formatDayShort(date: Date) {
  return formatDateParts(date, { day: '2-digit', month: 'short' });
}

function formatWeekRange(weekStart: Date) {
  const inicio = formatDateParts(weekStart, { day: '2-digit', month: 'short' });
  const fin = formatDateParts(addDays(weekStart, 4), {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return `${inicio} – ${fin}`;
}

export default function AppointmentsCalendarTable() {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));
  const [statusFilter, setStatusFilter] = useState<'Todos' | Status>('Todos');

  const weekLabel = useMemo(() => formatWeekRange(weekStart), [weekStart]);
  const dayDates = useMemo(
    () => DAYS.map((_, idx) => addDays(weekStart, idx)),
    [weekStart]
  );

  const events = useMemo(() => {
    if (statusFilter === 'Todos') return MOCK_EVENTS;
    return MOCK_EVENTS.filter((e) => e.status === statusFilter);
  }, [statusFilter]);

  const startMin = toMin(DAY_START);
  const endMin = toMin(DAY_END);
  const totalMin = endMin - startMin;
  const slotCount = Math.ceil(totalMin / SLOT_MIN);
  const dayHeight = slotCount * SLOT_HEIGHT;
  const hourBlockH = (60 / SLOT_MIN) * SLOT_HEIGHT;

  const hours: string[] = [];
  const firstHourLabelMin = Math.ceil(startMin / 60) * 60;
  for (let minute = firstHourLabelMin; minute < endMin; minute += 60) {
    const hour = String(Math.floor(minute / 60)).padStart(2, '0');
    hours.push(`${hour}:00`);
  }

  function topFor(time: string) {
    const delta = toMin(time) - startMin;
    return Math.max(0, (delta / SLOT_MIN) * SLOT_HEIGHT);
  }
  function heightFor(startTime: string, endTime: string) {
    return ((toMin(endTime) - toMin(startTime)) / SLOT_MIN) * SLOT_HEIGHT;
  }

  function badgeByStatus(s: Status) {
    if (s === 'Completado')
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';
    if (s === 'Cancelado') return 'border-red-200 bg-red-50 text-red-700';
    return 'border-sky-200 bg-sky-50 text-sky-700';
  }

  function lineByStatus(s: Status) {
    if (s === 'Completado') return 'bg-emerald-500/35';
    if (s === 'Cancelado') return 'bg-red-500/35';
    return 'bg-sky-500/35';
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-white px-3 py-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWeekStart((prev) => addDays(prev, -7))}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            aria-label="Semana anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
            className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
          >
            Hoy
          </button>
          <button
            type="button"
            onClick={() => setWeekStart((prev) => addDays(prev, 7))}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            aria-label="Semana siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <p className="truncate text-sm font-semibold text-zinc-800">
          Semana {weekLabel}
        </p>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'Todos' | Status)}
          className="h-9 cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm"
          aria-label="Filtrar por estado"
        >
          <option value="Todos">Todos</option>
          <option value="Agendado">Agendado</option>
          <option value="Completado">Completado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>

      <div className="grid grid-cols-[80px_repeat(5,1fr)] items-stretch border-b border-zinc-200">
        <div className="flex items-center justify-center bg-zinc-50 py-2 text-center text-sm font-medium text-zinc-700">
          Hora
        </div>
        {DAYS.map((day, idx) => (
          <div key={day} className="bg-zinc-50 py-2 text-center">
            <p className="text-sm font-semibold text-zinc-700">{day}</p>
            <p className="text-xs font-medium text-zinc-500">
              {formatDayShort(dayDates[idx])}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[80px_repeat(5,1fr)] divide-x divide-zinc-200/60">
        <div className="relative" style={{ height: dayHeight }}>
          {hours.map((hour) => (
            <div key={hour} style={{ height: hourBlockH }} className="relative">
              <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-zinc-500">
                {hour}
              </span>
            </div>
          ))}
        </div>

        {DAYS.map((_, dayIdx) => (
          <div key={dayIdx} className="relative" style={{ height: dayHeight }}>
            {hours.map((hour) => (
              <div
                key={hour}
                className="absolute right-0 left-0 border-t border-zinc-200/60"
                style={{ top: topFor(hour) }}
              />
            ))}

            {events
              .filter((e) => e.day === dayIdx)
              .map((e) => (
                <div
                  key={e.id}
                  className="absolute right-2 left-2 flex gap-2 rounded-2xl border border-zinc-200 bg-white p-3 text-xs shadow-sm"
                  style={{
                    top: topFor(e.start) + 8,
                    height: heightFor(e.start, e.end) - 16,
                  }}
                >
                  <div
                    className={`h-full w-1.5 rounded-full ${lineByStatus(e.status)}`}
                  ></div>
                  <div className="relative flex h-full w-full flex-col justify-between">
                    <div>
                      <div className="mb-1 text-[11px] font-semibold text-zinc-700">
                        {e.start} – {e.end}
                      </div>
                      <div className="text-sm font-semibold text-zinc-900">
                        {e.title}
                      </div>
                      {e.subtitle ? (
                        <div className="text-[11px] text-zinc-600">
                          {e.subtitle}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={`rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${badgeByStatus(e.status)}`}
                    >
                      {e.status}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
