import { FilterSelect } from '@/app/ui/admin/dashboard/FilterSelect';
import { Button } from '@/app/ui/components/Button';
import { Download } from 'lucide-react';

const monthOptions = [
  { value: '01', label: 'Ene' },
  { value: '02', label: 'Feb' },
  { value: '03', label: 'Mar' },
  { value: '04', label: 'Abr' },
  { value: '05', label: 'May' },
  { value: '06', label: 'Jun' },
  { value: '07', label: 'Jul' },
  { value: '08', label: 'Ago' },
  { value: '09', label: 'Sep' },
  { value: '10', label: 'Oct' },
  { value: '11', label: 'Nov' },
  { value: '12', label: 'Dic' },
];

const startDate = { year: 2026, month: '01' };
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
    <div className="bg-gray-50/50s bg-secondary-background h-full p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-foreground text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Gestiona el perfil de tus mascotas registradas
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex">
            <FilterSelect
              options={monthOptions}
              className="rounded-l-full border-x"
            />
            <FilterSelect
              options={yearOptions}
              className="rounded-r-full border-r"
            />
          </div>

          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>
    </div>
  );
}
