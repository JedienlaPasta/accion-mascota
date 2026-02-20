import Link from 'next/link';
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './Card';
import { campanas } from '../../_lib/mock-data';
import { Calendar, Users, ArrowRight, Sparkles, FileUser } from 'lucide-react';
import Badge from '../components/Badge';
import { Button, RoundMutedButton } from '../components/Button';
import { capitalize } from '../../_lib/utils/format';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
  });
}

export function CampaignsPreview() {
  const campanasActivas = campanas.slice(0, 2);

  return (
    <section className="bg-emerald-800/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="bg-accent/60 text-accent-foreground mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Campañas Vigentes
          </div>
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Aprovecha nuestras campañas
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Periódicamente realizamos campañas gratuitas o con precios
            especiales para el cuidado de tus mascotas. No te las pierdas.
          </p>
        </div>

        {/* Campaigns */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {campanasActivas.map((campana) => (
            <Card
              key={campana.id}
              className="hover:border-primary/30 overflow-hidden border-2 transition-colors"
            >
              <CardHeader className="from-primary/10 to-accent/10 bg-gradient-to-r">
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

        {/* CTA */}
        <div className="mt-12 place-self-center">
          <Link href="/campanas">
            <RoundMutedButton className="gap-2">
              Ver todas las campañas
              <ArrowRight className="h-4 w-4" />
            </RoundMutedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
