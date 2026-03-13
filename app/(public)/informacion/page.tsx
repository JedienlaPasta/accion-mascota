import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/home/Card';
import {
  AlertTriangle,
  BookOpen,
  Cat,
  ChevronDown,
  Dog,
  HeartHandshake,
  Home,
  MapPin,
  Scale,
  Shield,
  ShieldAlert,
  Syringe,
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

export default function InformacionPage() {
  return (
    <div className="py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Información y Tenencia Responsable
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Guías y obligaciones para el cuidado de tus mascotas según la Ley
            21.020 de Tenencia Responsable en Chile.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link
              href="#ley"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Ley 21.020
            </Link>
            <Link
              href="#guias"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Guías de cuidado
            </Link>
            <Link
              href="#adopcion"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Adopción
            </Link>
          </div>
        </div>

        <section id="ley" className="mb-16 scroll-mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Scale className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-foreground text-2xl font-bold">
                Ley 21.020 de Tenencia Responsable
              </h2>
              <p className="text-muted-foreground">
                Conoce las principales obligaciones
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leyTenenciaResponsable.map((item) => (
              <Card
                key={item.titulo}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <item.icon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.titulo}</CardTitle>
                      <CardDescription className="mt-2 leading-relaxed">
                        {item.descripcion}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-6 border-amber-200 bg-amber-50">
            <div className="flex items-start gap-4 px-6">
              <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-900">
                  Sanciones por incumplimiento
                </p>
                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  El incumplimiento de la ley puede resultar en multas de 1 a 50
                  UTM dependiendo de la gravedad. El abandono y maltrato animal
                  están penados con multas e incluso presidio.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section id="guias" className="scroll-mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <BookOpen className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-foreground text-2xl font-bold">
                Guías de Cuidado
              </h2>
              <p className="text-muted-foreground">
                Consejos prácticos para el cuidado de tus mascotas
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader className="border-b border-blue-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Dog className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle>Cuidado de Perros</CardTitle>
                </div>
              </CardHeader>

              <div className="px-6 pt-4">
                <div className="divide-y divide-gray-100">
                  {guiasCuidado.perros.map((item, index) => (
                    <details key={index} className="group py-3">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-gray-900">
                        <span>{item.pregunta}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {item.respuesta}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader className="border-b border-amber-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Cat className="h-5 w-5 text-amber-600" />
                  </div>
                  <CardTitle>Cuidado de Gatos</CardTitle>
                </div>
              </CardHeader>

              <div className="px-6 pt-4">
                <div className="divide-y divide-gray-100">
                  {guiasCuidado.gatos.map((item, index) => (
                    <details key={index} className="group py-3">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-gray-900">
                        <span>{item.pregunta}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {item.respuesta}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="adopcion" className="mt-16 scroll-mt-20">
          <Card className="border-emerald-700/20 bg-emerald-50/50 shadow-sm">
            <div className="p-6 md:p-8">
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-100 shadow-inner">
                    <HeartHandshake className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-emerald-950">
                      Dale un hogar a un rescatado con Acción Mascota
                    </h3>
                    <p className="max-w-2xl leading-relaxed text-emerald-800/80">
                      Adoptar es una decisión responsable que cambia vidas. A
                      través de nuestra plataforma, puedes conocer a los
                      perritos y gatitos de la comuna que están buscando una
                      segunda oportunidad y la orientación de la Veterinaria
                      Municipal.
                    </p>
                  </div>
                </div>

                <div className="mt-2 shrink-0 md:mt-0">
                  <Link
                    href="/adopcion"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-md focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-50 focus:outline-none"
                  >
                    Ver mascotas en adopción
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
