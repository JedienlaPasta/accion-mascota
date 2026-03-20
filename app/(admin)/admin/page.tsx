import { Button, DropdownButton } from '@/app/ui/components/Button';
import { Calendar, Download } from 'lucide-react';

const monthOptions = [
  { value: '2025-01', label: 'ene 2025' },
  { value: '2025-02', label: 'feb 2025' },
];

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
          <DropdownButton options={monthOptions} className="gap-2" />

          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>
    </div>
  );
}
