import Link from 'next/link';
import {
  ArrowLeft,
  Dog,
  Cat,
  PawPrint,
  Calendar,
  Syringe,
  Stethoscope,
  Scissors,
  AlertCircle,
  CheckCircle,
  Clock,
  Pencil,
  HeartPulse,
  Shield,
  Palette,
  Cpu,
  ChevronRight,
} from 'lucide-react';
import {
  Button,
  RedirectButton,
  SecondaryButton,
} from '@/app/ui/components/Button';
import { citas, historialClinico, mascotas } from '@/app/_lib/mock-data';
import Badge from '@/app/ui/components/Badge';
import MascotaHistorial from '@/app/ui/portal/mascotas/[id]/Historial';

type IconComponent = React.ComponentType<{ className?: string }>;

const especieIcons: Record<string, IconComponent> = {
  perro: Dog,
  gato: Cat,
  otro: PawPrint,
};

export const tipoIcons: Record<string, IconComponent> = {
  consulta: Stethoscope,
  vacuna: Syringe,
  cirugia: Scissors,
  control: CheckCircle,
  emergencia: AlertCircle,
};

export const tipoColors: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  consulta: {
    bg: 'bg-blue-50 text-blue-600',
    text: 'text-blue-600',
    dot: 'bg-blue-500',
  },
  vacuna: {
    bg: 'bg-green-50 text-green-600',
    text: 'text-green-600',
    dot: 'bg-green-500',
  },
  cirugia: {
    bg: 'bg-amber-50 text-amber-600',
    text: 'text-amber-600',
    dot: 'bg-amber-500',
  },
  control: {
    bg: 'bg-violet-50 text-violet-600',
    text: 'text-violet-600',
    dot: 'bg-violet-500',
  },
  emergencia: {
    bg: 'bg-red-50 text-red-600',
    text: 'text-red-600',
    dot: 'bg-red-500',
  },
};

export const tipoLabels: Record<string, string> = {
  consulta: 'Consulta',
  vacuna: 'Vacunacion',
  cirugia: 'Cirugia',
  control: 'Control',
  emergencia: 'Emergencia',
};

function calcularEdad(fechaNacimiento: string) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  const diff = hoy.getTime() - nacimiento.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30)
  );
  if (years === 0) return `${months} meses`;
  return `${years} año${years > 1 ? 's' : ''} y ${months} mes${months > 1 ? 'es' : ''}`;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatShortDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

type MascotaDetalleProps = {
  params: Promise<{ id: string }>;
};

export default async function MascotaDetallePage(props: MascotaDetalleProps) {
  const { id } = await props.params;
  const mascota = mascotas.find((mascota) => mascota.id === id);
  console.log(id);

  if (!mascota) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 lg:p-8">
        <PawPrint className="text-muted-foreground mb-4 h-16 w-16" />
        <h2 className="text-foreground mb-2 text-xl font-semibold">
          Mascota no encontrada
        </h2>
        <p className="text-muted-foreground mb-4">
          No se encontro una mascota con el ID proporcionado.
        </p>
        <RedirectButton to="/portal/mascotas" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver a mis mascotas
        </RedirectButton>
      </div>
    );
  }

  const EspecieIcon = especieIcons[mascota?.especie] || PawPrint;

  const historial = historialClinico
    .filter((h) => h.mascotaId === mascota.id)
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  const citasMascota = citas.filter(
    (c) =>
      c.mascotaId === mascota.id &&
      (c.estado === 'pendiente' || c.estado === 'confirmada')
  );

  const tratamientoActivo = historial.find((h) => h.tratamiento);

  const totalVacunas = historial.filter((h) => h.tipo === 'vacuna').length;
  const totalConsultas = historial.filter((h) => h.tipo === 'consulta').length;
  const totalCirugias = historial.filter((h) => h.tipo === 'cirugia').length;

  return (
    <div className="p-6 lg:p-8">
      {/* Back button */}
      <Link
        href="/portal/mascotas"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a mis mascotas
      </Link>

      {/* Header Card */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
        <div className="p-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <div className="from-primary/20 to-primary/5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
              <EspecieIcon className="text-primary h-10 w-10" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h1 className="text-foreground text-3xl font-bold">
                    {mascota.nombre}
                  </h1>
                  <p className="text-muted-foreground">
                    {mascota.raza} - {calcularEdad(mascota.fechaNacimiento)}
                  </p>
                </div>
                <Button className="gap-2">
                  <Pencil className="h-4 w-4" />
                  Editar
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mascota.esterilizado ? (
                  <Badge className="border-emerald-700/10 bg-green-100 text-green-700 hover:bg-green-100">
                    Esterilizado
                  </Badge>
                ) : (
                  <Badge className="border-gray-200 bg-amber-100 text-amber-700 hover:bg-amber-100">
                    Sin esterilizar
                  </Badge>
                )}
                {mascota.chip ? (
                  <Badge className="border-gray-200">
                    {'Chip: ' + mascota.chip}
                  </Badge>
                ) : (
                  <Badge className="text-muted-foreground border-gray-200">
                    Sin microchip
                  </Badge>
                )}
                <Badge className="border-gray-200 capitalize">
                  {mascota.sexo}
                </Badge>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="border-border mt-6 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg">
                <PawPrint className="text-muted-foreground h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Especie</p>
                <p className="text-sm font-medium capitalize">
                  {mascota.especie}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg">
                <Palette className="text-muted-foreground h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Color</p>
                <p className="text-sm font-medium">{mascota.color}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg">
                <Calendar className="text-muted-foreground h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Nacimiento</p>
                <p className="text-sm font-medium">
                  {formatShortDate(mascota.fechaNacimiento)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg">
                <HeartPulse className="text-muted-foreground h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Atenciones</p>
                <p className="text-sm font-medium">
                  {historial.length + ' registros'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Vacunas */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
            <Syringe className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{totalVacunas}</p>
            <p className="text-sm font-medium text-gray-500">Vacunas</p>
          </div>
        </div>

        {/* Consultas */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Stethoscope className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{totalConsultas}</p>
            <p className="text-sm font-medium text-gray-500">Consultas</p>
          </div>
        </div>

        {/* Cirugías */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50">
            <Scissors className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{totalCirugias}</p>
            <p className="text-sm font-medium text-gray-500">Cirugías</p>
          </div>
        </div>
      </div>

      {/* ACA EMPIEZA */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* Main Content - Medical History */}
        <div className="space-y-4 lg:col-span-2">
          {/* Active Treatment */}
          {tratamientoActivo && (
            <div className="flex flex-col items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
              <div className="pb-3">
                <h3 className="flex items-center gap-2 text-amber-800">
                  <Syringe className="h-5 w-5" />
                  Tratamiento Vigente
                </h3>
                <p className="text-amber-700">
                  {'Indicado el ' +
                    formatDate(tratamientoActivo.fecha) +
                    ' por ' +
                    tratamientoActivo.veterinario}
                </p>
              </div>
              <span className="w-full">
                <p className="text-foreground mb-2 font-medium">
                  {tratamientoActivo.diagnostico}
                </p>
                <p className="text-muted-foreground text-sm">
                  {tratamientoActivo.tratamiento}
                </p>
                {tratamientoActivo.proximaVisita && (
                  <div className="mt-4 flex items-center gap-2 rounded-md bg-amber-100/50 p-2 text-sm text-amber-700">
                    <Calendar className="h-4 w-4" />
                    {'Proximo control: ' +
                      formatDate(tratamientoActivo.proximaVisita)}
                  </div>
                )}
              </span>
            </div>
          )}

          {/* Medical History Timeline */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Historial Clinico
                </h3>
                <p className="text-sm text-gray-500">
                  {'Registro de atenciones de ' + mascota.nombre}
                </p>
              </div>
              <Link href="/portal/historial">
                <Button className="gap-1.5 border-gray-200 bg-transparent text-xs text-gray-600 hover:bg-gray-50">
                  Ver todo
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>

            <MascotaHistorial historial={historial} mascotaId={mascota.id} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Upcoming Appointments */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Proximas Citas
            </h3>
            {citasMascota.length > 0 ? (
              <div className="space-y-3">
                {citasMascota.map((cita) => (
                  <div
                    key={cita.id}
                    className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <Badge className="capitalize">{cita.estado}</Badge>
                      <span className="text-xs font-medium text-gray-500 capitalize">
                        {cita.tipo}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{formatDate(cita.fecha)}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{cita.hora + ' hrs'}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4 text-center text-sm text-gray-500">
                Sin citas pendientes
              </div>
            )}
            <Link href={'/portal/citas/nueva?mascota=' + mascota.id}>
              <Button className="mt-4 w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700">
                <Calendar className="h-4 w-4" />
                Agendar Cita
              </Button>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Acciones Rapidas
            </h3>
            <div className="space-y-2">
              <Link href="/portal/historial">
                <SecondaryButton className="w-full justify-start gap-2 border-gray-200 px-3 hover:bg-gray-50 hover:text-gray-900">
                  <Stethoscope className="h-4 w-4 text-gray-500" />
                  Historial completo
                </SecondaryButton>
              </Link>
              {!mascota.chip && (
                <Link href="/campanas">
                  <SecondaryButton className="w-full justify-start gap-2 border-gray-200 px-3 hover:bg-gray-50 hover:text-gray-900">
                    <Cpu className="h-4 w-4 text-gray-500" />
                    Solicitar microchip
                  </SecondaryButton>
                </Link>
              )}
              {!mascota.esterilizado && (
                <Link href="/campanas">
                  <SecondaryButton className="w-full justify-start gap-2 border-gray-200 px-3 hover:bg-gray-50 hover:text-gray-900">
                    <Shield className="h-4 w-4 text-gray-500" />
                    Campana esterilizacion
                  </SecondaryButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
