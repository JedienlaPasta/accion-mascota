import AppointmentsPendingToConfirm from '@/app/ui/admin/dashboard/AppointmentsPendingToConfirm';
import { FilterSelect } from '@/app/ui/admin/dashboard/FilterSelect';
import SummaryCards from '@/app/ui/admin/dashboard/SummaryCards';
import AppointmentTable from '@/app/ui/admin/dashboard/TodayAppointments';
import { SecondaryButton } from '@/app/ui/components/Button';
import { ChevronRight, Download, ListFilter } from 'lucide-react';

const startDate = { year: 2026 };
const currentYear = new Date().getFullYear();
const yearOptions = Array.from(
  { length: currentYear - startDate.year + 1 },
  (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  })
);

export default function PortalAdmin() {
  return (
    <div className="flex h-full flex-col space-y-8 bg-[#f1f3f2] p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-foreground text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenido/a, {'Usuario'} - Resumen
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterSelect options={yearOptions} className="rounded-lg border" />

          <SecondaryButton className="gap-2 bg-white px-4 text-sm">
            <ListFilter className="h-4 w-4" />
            Filtrar
          </SecondaryButton>

          <SecondaryButton className="gap-2 bg-white px-4 text-sm">
            <Download className="h-4 w-4" />
            Exportar
          </SecondaryButton>
        </div>
      </div>
      <SummaryCards />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-6 transition-shadow duration-300 hover:shadow-md lg:col-span-3 lg:p-8">
          <header className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-gray-900">
                Horario de Hoy
              </h2>
              <p className="text-sm text-zinc-500">Jueves, 12 de octubre</p>
            </div>
            <SecondaryButton className="gap-2 bg-white px-4 text-sm">
              Ver Todas
              <ChevronRight className="h-4 w-4" />
            </SecondaryButton>
          </header>
          <AppointmentTable />
        </div>
        <div className="lg:col-span-1">
          <AppointmentsPendingToConfirm />
        </div>
      </section>
    </div>
  );
}
