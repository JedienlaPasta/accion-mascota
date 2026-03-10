import {
  AlertTriangle,
  BookOpen,
  Cat,
  ChevronDown,
  Dog,
  Heart,
  HeartHandshake,
  Home,
  Scale,
  Shield,
  Syringe,
} from 'lucide-react';

const leyTenenciaResponsable = [
  {
    titulo: 'Identificación obligatoria',
    descripcion:
      'Todo perro y gato debe estar identificado mediante microchip, registrado en el Registro Nacional de Mascotas.',
    icon: Shield,
  },
  {
    titulo: 'Vacunación antirrábica',
    descripcion:
      'La vacunación antirrábica es obligatoria para perros y gatos, debe aplicarse anualmente.',
    icon: Syringe,
  },
  {
    titulo: 'Esterilización',
    descripcion:
      'Se promueve la esterilización como método de control de población. Existen campañas gratuitas.',
    icon: Heart,
  },
  {
    titulo: 'Condiciones de tenencia',
    descripcion:
      'El dueño debe proveer alimentación adecuada, agua fresca, espacio suficiente, atención veterinaria y no abandonar al animal.',
    icon: Home,
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
        'Sí, los gatos de interior viven más y más sanos. Están protegidos de accidentes, peleas, enfermedades contagiosas y parásitos. Asegúrate de enriquecer su ambiente con rascadores, juguetes y zonas elevadas.',
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

const cardBase =
  'bg-card text-card-foreground border-border flex flex-col gap-2 rounded-xl border py-6 shadow-sm';
const cardHeaderBase =
  '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6';
const cardTitleBase = 'leading-none font-semibold';
const cardDescriptionBase = 'text-muted-foreground text-sm';

export default function InformacionPage() {
  return (
    <div className="py-12">
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
            <a
              href="#ley"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Ley 21.020
            </a>
            <a
              href="#guias"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Guías de cuidado
            </a>
            <a
              href="#adopcion"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              Adopción
            </a>
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

          <div className="grid gap-6 sm:grid-cols-2">
            {leyTenenciaResponsable.map((item) => (
              <div
                key={item.titulo}
                data-slot="card"
                className={`${cardBase} transition-shadow hover:shadow-lg`}
              >
                <div data-slot="card-header" className={cardHeaderBase}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <item.icon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <div
                        data-slot="card-title"
                        className={`${cardTitleBase} text-lg`}
                      >
                        {item.titulo}
                      </div>
                      <div
                        data-slot="card-description"
                        className={`${cardDescriptionBase} mt-2 leading-relaxed`}
                      >
                        {item.descripcion}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            data-slot="card"
            className={`${cardBase} mt-6 gap-0 border-amber-200 bg-amber-50 py-0`}
          >
            <div className="flex items-start gap-4 px-6 py-6">
              <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-900">
                  Sanciones por incumplimiento
                </p>
                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  El incumplimiento de la ley puede resultar en multas de 1 a 50
                  UTM dependiendo de la gravedad. El abandono de animales está
                  penado con multas de 2 a 30 UTM.
                </p>
              </div>
            </div>
          </div>
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
            <div data-slot="card" className={`${cardBase}`}>
              <div
                data-slot="card-header"
                className={`${cardHeaderBase} border-b border-blue-100`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Dog className="h-5 w-5 text-blue-600" />
                  </div>
                  <div data-slot="card-title" className={cardTitleBase}>
                    Cuidado de Perros
                  </div>
                </div>
              </div>

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
            </div>

            <div data-slot="card" className={`${cardBase}`}>
              <div
                data-slot="card-header"
                className={`${cardHeaderBase} border-b border-amber-100`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Cat className="h-5 w-5 text-amber-600" />
                  </div>
                  <div data-slot="card-title" className={cardTitleBase}>
                    Cuidado de Gatos
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </section>

        <section id="adopcion" className="mt-16 scroll-mt-20">
          <div data-slot="card" className={`${cardBase}`}>
            <div className="p-6">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-800/20">
                  <HeartHandshake className="h-10 w-10 text-emerald-800" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-foreground mb-2 text-2xl font-bold">
                    ¿Pensando en adoptar?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    Adoptar es una decisión responsable que mejora el bienestar
                    animal y fortalece la convivencia en la comunidad. En la
                    Veterinaria Municipal podemos orientarte sobre el proceso de
                    adopción y conectarte con organizaciones de rescate de la
                    comuna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
