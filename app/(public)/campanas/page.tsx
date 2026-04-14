import { campanas } from '@/app/_lib/mock-data';
import { capitalize } from '@/app/_lib/utils/format';
import Badge from '@/app/ui/components/Badge';
import { Button } from '@/app/ui/components/Button';
import { formatDate } from '@/app/ui/home/CampaignsPreview';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/home/Card';
import {
  CheckCheck,
  Calendar,
  FileUser,
  Users,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export default function CampanasPage() {
  const campanasActivas = campanas.slice(0, 2);
  return (
    <div className="bg-secondary-background min-h-screen pb-24">
      {/* Hero Section */}
      <div className="border-b border-gray-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Campañas Vigentes
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Aprovecha nuestras campañas gratuitas o con precios especiales para
            el cuidado de tus mascotas. Inscríbete mientras haya cupos
            disponibles.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {campanasActivas.map((campana) => (
            <Card
              key={campana.id}
              className="hover:border-primary/30 overflow-hidden border-2 transition-colors"
            >
              <CardHeader className="pt-3 pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2 text-xl">
                      {campana.titulo}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {campana.gratuito && (
                        <Badge className="border-emerald-200/90 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                          Gratuito
                        </Badge>
                      )}
                      <Badge className="text-muted-foreground hover:bg-secondary/80 border-border bg-slate-100">
                        {capitalize(campana.tipo)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <div className="flex h-full flex-col justify-between px-6">
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  {campana.descripcion}
                </CardDescription>

                <div className="space-y-6">
                  <div className="text-muted-foreground mb-4 flex items-center gap-1 text-sm leading-relaxed">
                    <FileUser className="h-4 w-4" />
                    Recuerda traer tu ficha del registro social de hogares.
                  </div>

                  <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(campana.fechaInicio)} -{' '}
                        {formatDate(campana.fechaFin)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{campana.cuposDisponibles} cupos disponibles</span>
                    </div>
                  </div>

                  <Link href="/campanas">
                    <Button className="w-full justify-center">
                      Inscribirse
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-700" />
            <h3 className="text-foreground text-lg font-bold">
              Información Importante
            </h3>
          </div>
          <ul className="grid gap-3">
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Las campañas son exclusivas para residentes de la comuna. Deberás
              acreditar domicilio.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              La inscripción no garantiza la hora. Te contactaremos para
              confirmar fecha y horario.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Para cirugías, tu mascota debe tener ayuno de 12 horas.
            </li>
            <li className="text-muted-foreground flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              Trae a tu mascota con collar y correa (perros) o en transportador
              (gatos).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
