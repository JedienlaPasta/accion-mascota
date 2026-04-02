import AppointmentsPendingToConfirm from '@/app/ui/admin/dashboard/AppointmentsPendingToConfirm';
import { FilterSelect } from '@/app/ui/admin/dashboard/FilterSelect';
import SummaryCards from '@/app/ui/admin/dashboard/SummaryCards';
import AppointmentTable from '@/app/ui/admin/dashboard/TodayAppointments';
import { SecondaryButton } from '@/app/ui/components/Button';
import { Download, ListFilter } from 'lucide-react';

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
        <div className="flex gap-2">
          <FilterSelect options={yearOptions} className="rounded-lg border" />

          <SecondaryButton className="gap-2 bg-white px-4 text-sm">
            <ListFilter className="-4 h-4" />
            Filtrar
          </SecondaryButton>

          <SecondaryButton className="gap-2 bg-white px-4 text-sm">
            <Download className="-4 h-4" />
            Exportar
          </SecondaryButton>
        </div>
      </div>
      <SummaryCards />
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <AppointmentTable />
        </div>
        <div className="col-span-1">
          <AppointmentsPendingToConfirm />
        </div>
      </section>
    </div>
  );
}
