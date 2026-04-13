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
  HeartHandshake,
  Home,
  MapPin,
  Scale,
  Shield,
  ShieldAlert,
  Syringe,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const leyTenenciaResponsable = [
  {
    titulo: 'Identificación y Registro',
    descripcion:
      'Todo perro y gato debe estar identificado mediante microchip e inscrito en el Registro Nacional de Mascotas.',
    icon: Shield,
  },
  {
    titulo: 'Cuidado y Bienestar',
    descripcion:
      'El dueño debe proveer alimentación adecuada, agua fresca, albergue y buen trato. El maltrato y abandono son delitos penados por ley.',
    icon: Home,
  },
  {
    titulo: 'Control en Vía Pública',
    descripcion:
      'Las mascotas no pueden deambular libres. Deben transitar con collar y correa, y es obligatorio recoger sus desechos en espacios públicos.',
    icon: MapPin,
  },
  {
    titulo: 'Responsabilidad Civil',
    descripcion:
      'Como tutor, eres civilmente responsable de responder por todos los daños que tu mascota pueda causar a terceros o a sus bienes.',
    icon: Scale,
  },
  {
    titulo: 'Razas Peligrosas (PPP)',
    descripcion:
      'Los perros calificados como PPP deben circular con bozal y correa, y el dueño debe contar con seguro civil y cerramientos seguros.',
    icon: ShieldAlert,
  },
  {
    titulo: 'Vacunación Antirrábica',
    descripcion:
      'Obligatoria por normativa del MINSAL para perros y gatos desde los 2 meses de edad, debiendo aplicarse refuerzos anuales.',
    icon: Syringe,
  },
];

const guiasCuidado = {
  perros: [
    {
      pregunta: '¿Cada cuánto debo vacunar a mi perro?',
      respuesta:
        'Los cachorros deben recibir sus primeras vacunas entre las 6-8 semanas de vida, con refuerzos cada 3-4 semanas hasta las 16 semanas. Luego, la vacuna antirrábica y refuerzos son anuales. La óctuple protege contra moquillo, parvovirus, hepatitis, leptospirosis y más.',
    },
    {
      pregunta: '¿Cuál es la alimentación adecuada?',
      respuesta:
        'Utiliza alimento de calidad apropiado para la edad (cachorro, adulto, senior) y tamaño de tu perro. Evita darle comida de humanos, especialmente chocolate, uvas, cebolla y huesos cocidos. El agua fresca debe estar siempre disponible.',
    },
    {
      pregunta: '¿Cuánto ejercicio necesita mi perro?',
      respuesta:
        'Depende de la raza y edad. En general, los perros necesitan al menos 30 minutos a 2 horas de ejercicio diario. Los paseos deben ser con correa y siempre recoge los desechos.',
    },
    {
      pregunta: '¿Cómo sé si mi perro está enfermo?',
      respuesta:
        'Señales de alerta: pérdida de apetito, letargo, vómitos o diarrea persistentes, dificultad para respirar, cojera, cambios de comportamiento. Ante cualquier duda, consulta al veterinario.',
    },
  ],
  gatos: [
    {
      pregunta: '¿Cada cuánto debo vacunar a mi gato?',
      respuesta:
        'Los gatitos inician su vacunación entre las 6-8 semanas con la triple felina (panleucopenia, rinotraqueítis, calicivirus), con refuerzos cada 3-4 semanas hasta las 16 semanas. La vacuna antirrábica y refuerzos son anuales.',
    },
    {
      pregunta: '¿Es mejor tener al gato dentro de casa?',
      respuesta:
        'Sí, los gatos de interior (indoor) viven más y más sanos. Están protegidos de accidentes, peleas, enfermedades contagiosas y parásitos. Asegúrate de enriquecer su ambiente con rascadores, juguetes y zonas elevadas.',
    },
    {
      pregunta: '¿Cómo cuidar la higiene de mi gato?',
      respuesta:
        'Mantén la caja de arena limpia (mínimo una por gato más una extra). Los gatos se asean solos pero puedes cepillarlos regularmente. Corta sus uñas cada 2-3 semanas y revisa sus orejas periódicamente.',
    },
    {
      pregunta: '¿Cómo sé si mi gato está enfermo?',
      respuesta:
        'Los gatos ocultan el dolor. Señales de alerta: cambios en el uso de la caja de arena, dejar de comer más de 24 horas, esconderse más de lo normal, vocalización excesiva, cambios en el pelaje. Consulta al veterinario ante cualquier duda.',
    },
  ],
};

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

        <section id="campanas" className="mt-16">
          <Card className="border-emerald-700/20 bg-emerald-50/50 shadow-sm">
            <div className="px-6 py-2 md:px-8 md:py-4">
              <h3 className="mb-2 text-2xl font-bold text-emerald-950">
                Información Importante
              </h3>
              <p className="flex max-w-2xl items-center gap-2 leading-relaxed text-emerald-900">
                <CheckCheck className="size-4.5 text-emerald-600" />
                Las campañas son exclusivas para residentes de la comuna.
                Deberás acreditar domicilio.
              </p>
              <p className="flex max-w-2xl items-center gap-2 leading-relaxed text-emerald-900">
                <CheckCheck className="size-4.5 text-emerald-600" />
                La inscripción no garantiza la hora. Te contactaremos para
                confirmar fecha y horario.
              </p>
              <p className="flex max-w-2xl items-center gap-2 leading-relaxed text-emerald-900">
                <CheckCheck className="size-4.5 text-emerald-600" />
                Para cirugías, tu mascota debe tener ayuno de 12 horas.
              </p>
              <p className="flex max-w-2xl items-center gap-2 leading-relaxed text-emerald-900">
                <CheckCheck className="size-4.5 text-emerald-600" />
                Trae a tu mascota con collar y correa (perros) o en
                transportador (gatos).
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
