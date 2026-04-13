import AppointmentsPendingToConfirm from '@/app/ui/admin/dashboard/AppointmentsPendingToConfirm';
import { FilterSelect } from '@/app/ui/admin/dashboard/FilterSelect';
import SearchBar from '@/app/ui/admin/dashboard/SearchBar';
import SummaryCard from '@/app/ui/admin/dashboard/SummaryCard';
import AppointmentTable from '@/app/ui/admin/dashboard/TodayAppointments';
import { SecondaryButton } from '@/app/ui/components/Button';
import { Suspense } from 'react';
import { ChevronRight, Download, ListFilter } from 'lucide-react';
import TableWrapper from '@/app/ui/admin/TableWrapper';

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
    <div className="flex h-full flex-col space-y-8 bg-gray-50/50 p-6 lg:p-8">
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

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-7">
        <section className="flex flex-col gap-4 xl:col-span-5">
          {/* <SummaryCards /> */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard title="Citas" value={100} icon="calendar" />
            <SummaryCard title="Mascotas" value={100} icon="paw" />
            <SummaryCard title="Propietarios" value={100} icon="user" />
            <SummaryCard title="Atenciones" value={100} icon="month" />
          </div>

          {/* Appointments Table */}
          <TableWrapper title="Horario de Hoy">
            <AppointmentTable />
          </TableWrapper>
        </section>

        <section className="xl:col-span-2">
          <AppointmentsPendingToConfirm />
        </section>
      </div>
    </div>
  );
}
