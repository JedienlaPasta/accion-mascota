import { Card, CardDescription, CardHeader, CardTitle } from './Card';
import {
  BookOpen,
  AlertTriangle,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import InfoCardsContactBanner from './InfoCardsContactBanner';
import { BaseLink } from '../components/Link';

const infoCards = [
  {
    icon: HeartHandshake,
    titulo: 'Tenencia Responsable',
    descripcion:
      'Conoce tus responsabilidades como dueño de mascotas según la Ley 21.020 de Chile. Aprende sobre identificación, vacunación y cuidados básicos.',
    link: '/informacion',
    linkText: 'Más información',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    icon: AlertTriangle,
    titulo: 'Emergencias',
    descripcion:
      'Si tu mascota sufre un accidente fuera de horario, conoce las veterinarias de urgencia cercanas y qué hacer mientras llegas.',
    link: '/emergencias',
    linkText: 'Ver emergencias',
    color: 'bg-red-50 text-red-600 border-red-200',
  },
  {
    icon: BookOpen,
    titulo: 'Guías de Cuidado',
    descripcion:
      'Consejos prácticos para el cuidado diario de perros y gatos. Alimentación, higiene, ejercicio y señales de alerta.',
    link: '/informacion#guias',
    linkText: 'Leer guías',
    color: 'bg-green-50 text-green-600 border-green-200',
  },
];

export function InfoCards() {
  return (
    <section className="bg-emerald-800/5s py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Información Útil
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Recursos y guías para ser un dueño responsable y saber qué hacer en
            cada situación.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {infoCards.map((card) => (
            <Card
              key={card.titulo}
              className="group cursor-pointers transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`h-14 w-14 rounded-xl ${card.color} mb-4 flex items-center justify-center border`}
                >
                  <card.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{card.titulo}</CardTitle>
              </CardHeader>
              <div className="px-6">
                <CardDescription className="mb-6 text-sm leading-relaxed">
                  {card.descripcion}
                </CardDescription>
                <BaseLink
                  href={card.link}
                  className="w-fit min-w-52 justify-start"
                >
                  {card.linkText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </BaseLink>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Banner */}
        {/* Falta un toast de contacto copiado */}
        <InfoCardsContactBanner />
      </div>
    </section>
  );
}
