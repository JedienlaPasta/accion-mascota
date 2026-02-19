import Link from 'next/link';
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './Card';
import {
  BookOpen,
  AlertTriangle,
  Phone,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Fragment } from 'react/jsx-runtime';

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
    <section className="bg-emerald-800/5 py-16 lg:py-24">
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
              <Fragment>
                <CardDescription className="mb-6 px-6 text-sm leading-relaxed">
                  {card.descripcion}
                </CardDescription>
                <Link href={card.link} className="mx-4 w-fit rounded-full">
                  <Button className="gap-2">
                    {card.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Fragment>
            </Card>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="from-primary to-primary/80 mt-12 rounded-2xl bg-gradient-to-r p-8 text-white">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  ¿Tienes dudas? Contáctanos
                </h3>
                <p className="text-white/80">
                  Estamos disponibles de lunes a sábado para ayudarte
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+56212345678">
                <Button className="bg-primary-foreground hover:bg-primary-foreground/90 gap-2">
                  <Phone className="h-4 w-4" />
                  +56 2 1234 5678
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
