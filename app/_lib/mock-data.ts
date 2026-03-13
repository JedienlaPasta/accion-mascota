// Datos simulados para el mockup de la veterinaria municipal

export interface Usuario {
  id: string;
  nombre: string;
  rut: string;
  email: string;
  telefono: string;
  direccion: string;
  rol: 'ciudadano' | 'funcionario' | 'veterinario' | 'admin';
}

export interface Mascota {
  id: string;
  nombre: string;
  especie: 'perro' | 'gato' | 'otro';
  raza: string;
  fechaNacimiento: string;
  sexo: 'macho' | 'hembra';
  color: string;
  chip: string | null;
  esterilizado: boolean;
  foto: string;
  propietarioId: string;
}

export interface MascotaAdopcion {
  id: string;
  nombre: string;
  especie: 'perro' | 'gato';
  edadAprox: string; // ej: "Cachorro (3 meses)"
  sexo: 'macho' | 'hembra';
  tamaño: 'pequeño' | 'mediano' | 'grande';
  historia: string;
  salud: string[]; // ej: ["Vacunado", "Desparasitado", "Microchip"]
  imagenes: string[]; // Un array de imágenes para el perfil detallado
  estado: 'disponible' | 'en_proceso' | 'adoptado';
  fechaIngreso: string;
}

export interface HistorialClinico {
  id: string;
  mascotaId: string;
  fecha: string;
  tipo: 'consulta' | 'vacuna' | 'cirugia' | 'control' | 'emergencia';
  descripcion: string;
  diagnostico: string;
  tratamiento: string | null;
  veterinario: string;
  proximaVisita: string | null;
}

export interface Cita {
  id: string;
  mascotaId: string;
  mascotaNombre: string;
  propietarioId: string;
  fecha: string;
  hora: string;
  tipo: 'consulta' | 'vacuna' | 'esterilizacion' | 'control' | 'emergencia';
  estado: 'pendiente' | 'confirmada' | 'completada' | 'cancelada';
  notas: string;
}

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number | 'gratuito';
  duracion: string;
  categoria: 'consulta' | 'vacunacion' | 'cirugia' | 'prevencion';
}

export interface Campana {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  tipo: 'vacunacion' | 'esterilizacion' | 'desparasitacion' | 'chip';
  cuposDisponibles: number;
  gratuito: boolean;
}

// Usuario actual simulado (ciudadano)
export const usuarioActual: Usuario = {
  id: 'usr-001',
  nombre: 'María González Pérez',
  rut: '12.345.678-9',
  email: 'maria.gonzalez@email.cl',
  telefono: '+56 9 1234 5678',
  direccion: 'Av. Principal 123, Villa Los Aromos',
  rol: 'ciudadano',
};

// Funcionario simulado
export const funcionarioActual: Usuario = {
  id: 'func-001',
  nombre: 'Dr. Carlos Muñoz',
  rut: '11.222.333-4',
  email: 'carlos.munoz@municipalidad.cl',
  telefono: '+56 9 8765 4321',
  direccion: 'Veterinaria Municipal',
  rol: 'veterinario',
};

// Mascotas del usuario
export const mascotas: Mascota[] = [
  {
    id: 'pet-001',
    nombre: 'Luna',
    especie: 'perro',
    raza: 'Mestizo mediano',
    fechaNacimiento: '2021-03-15',
    sexo: 'hembra',
    color: 'Negro con manchas blancas',
    chip: '956000012345678',
    esterilizado: true,
    foto: '/pets/luna.jpg',
    propietarioId: 'usr-001',
  },
  {
    id: 'pet-002',
    nombre: 'Michi',
    especie: 'gato',
    raza: 'Común europeo',
    fechaNacimiento: '2022-08-20',
    sexo: 'macho',
    color: 'Atigrado gris',
    chip: '956000012345679',
    esterilizado: true,
    foto: '/pets/michi.jpg',
    propietarioId: 'usr-001',
  },
  {
    id: 'pet-003',
    nombre: 'Rocky',
    especie: 'perro',
    raza: 'Labrador',
    fechaNacimiento: '2023-01-10',
    sexo: 'macho',
    color: 'Dorado',
    chip: null,
    esterilizado: false,
    foto: '/pets/rocky.jpg',
    propietarioId: 'usr-001',
  },
];

// Historial clínico
export const historialClinico: HistorialClinico[] = [
  {
    id: 'hist-001',
    mascotaId: 'pet-001',
    fecha: '2025-12-15',
    tipo: 'consulta',
    descripcion: 'Consulta por decaimiento y pérdida de apetito',
    diagnostico: 'Gastritis leve',
    tratamiento: 'Omeprazol 10mg cada 12 horas por 7 días. Dieta blanda.',
    veterinario: 'Dr. Carlos Muñoz',
    proximaVisita: '2025-12-22',
  },
  {
    id: 'hist-002',
    mascotaId: 'pet-001',
    fecha: '2025-10-01',
    tipo: 'vacuna',
    descripcion: 'Vacunación antirrábica anual',
    diagnostico: 'Paciente sano, apto para vacunación',
    tratamiento: null,
    veterinario: 'Dra. Ana Soto',
    proximaVisita: '2026-10-01',
  },
  {
    id: 'hist-003',
    mascotaId: 'pet-001',
    fecha: '2024-06-20',
    tipo: 'cirugia',
    descripcion: 'Esterilización quirúrgica',
    diagnostico: 'Procedimiento exitoso sin complicaciones',
    tratamiento: 'Antibiótico por 5 días, reposo por 10 días, collar isabelino',
    veterinario: 'Dr. Carlos Muñoz',
    proximaVisita: '2024-06-30',
  },
  {
    id: 'hist-004',
    mascotaId: 'pet-002',
    fecha: '2025-11-10',
    tipo: 'control',
    descripcion: 'Control de rutina anual',
    diagnostico: 'Paciente en excelente estado de salud',
    tratamiento: null,
    veterinario: 'Dra. Ana Soto',
    proximaVisita: '2026-11-10',
  },
  {
    id: 'hist-005',
    mascotaId: 'pet-002',
    fecha: '2025-08-15',
    tipo: 'vacuna',
    descripcion: 'Vacuna triple felina',
    diagnostico: 'Paciente sano, apto para vacunación',
    tratamiento: null,
    veterinario: 'Dr. Carlos Muñoz',
    proximaVisita: '2026-08-15',
  },
  {
    id: 'hist-006',
    mascotaId: 'pet-003',
    fecha: '2025-09-05',
    tipo: 'vacuna',
    descripcion: 'Primera vacuna óctuple',
    diagnostico: 'Cachorro sano',
    tratamiento: 'Desparasitación interna',
    veterinario: 'Dra. Ana Soto',
    proximaVisita: '2025-10-05',
  },
];

// Citas
export const citas: Cita[] = [
  {
    id: 'cita-001',
    mascotaId: 'pet-001',
    mascotaNombre: 'Luna',
    propietarioId: 'usr-001',
    fecha: '2026-01-25',
    hora: '10:30',
    tipo: 'control',
    estado: 'confirmada',
    notas: 'Control post tratamiento gastritis',
  },
  {
    id: 'cita-002',
    mascotaId: 'pet-003',
    mascotaNombre: 'Rocky',
    propietarioId: 'usr-001',
    fecha: '2026-02-15',
    hora: '09:00',
    tipo: 'esterilizacion',
    estado: 'pendiente',
    notas: 'Campaña de esterilización gratuita - Requiere ayuno de 12 horas',
  },
];

// Servicios disponibles
export const servicios: Servicio[] = [
  {
    id: 'serv-001',
    nombre: 'Consulta General',
    descripcion:
      'Evaluación médica completa de tu mascota, diagnóstico y tratamiento',
    precio: 5000,
    duracion: '30 min',
    categoria: 'consulta',
  },
  {
    id: 'serv-002',
    nombre: 'Vacuna Antirrábica',
    descripcion: 'Vacunación obligatoria anual contra la rabia',
    precio: 'gratuito',
    duracion: '15 min',
    categoria: 'vacunacion',
  },
  {
    id: 'serv-003',
    nombre: 'Vacuna Óctuple Canina',
    descripcion: 'Protección contra moquillo, parvovirus, hepatitis y más',
    precio: 8000,
    duracion: '15 min',
    categoria: 'vacunacion',
  },
  {
    id: 'serv-004',
    nombre: 'Vacuna Triple Felina',
    descripcion:
      'Protección contra panleucopenia, rinotraqueítis y calicivirus',
    precio: 7000,
    duracion: '15 min',
    categoria: 'vacunacion',
  },
  {
    id: 'serv-005',
    nombre: 'Esterilización Canina',
    descripcion:
      'Cirugía de esterilización para perros. Incluye anestesia y medicamentos',
    precio: 25000,
    duracion: '2-3 horas',
    categoria: 'cirugia',
  },
  {
    id: 'serv-006',
    nombre: 'Esterilización Felina',
    descripcion:
      'Cirugía de esterilización para gatos. Incluye anestesia y medicamentos',
    precio: 20000,
    duracion: '1-2 horas',
    categoria: 'cirugia',
  },
  {
    id: 'serv-007',
    nombre: 'Desparasitación',
    descripcion: 'Tratamiento antiparasitario interno y externo',
    precio: 3000,
    duracion: '15 min',
    categoria: 'prevencion',
  },
  {
    id: 'serv-008',
    nombre: 'Implante de Microchip',
    descripcion:
      'Identificación permanente con registro en base de datos nacional',
    precio: 10000,
    duracion: '10 min',
    categoria: 'prevencion',
  },
];

// Campañas activas
export const campanas: Campana[] = [
  {
    id: 'camp-001',
    titulo: 'Esterilización Gratuita Febrero 2026',
    descripcion:
      'Campaña de esterilización gratuita para todos los vecinos de la comuna. Incluye cirugía, anestesia, medicamentos y control post operatorio.',
    fechaInicio: '2026-02-01',
    fechaFin: '2026-02-28',
    tipo: 'esterilizacion',
    cuposDisponibles: 150,
    gratuito: true,
  },
  {
    id: 'camp-002',
    titulo: 'Vacunación Antirrábica 2026',
    descripcion:
      'Campaña anual de vacunación antirrábica gratuita. Obligatoria para todos los perros y gatos de la comuna.',
    fechaInicio: '2026-03-01',
    fechaFin: '2026-03-31',
    tipo: 'vacunacion',
    cuposDisponibles: 500,
    gratuito: true,
  },
  {
    id: 'camp-003',
    titulo: 'Chip de Identificación',
    descripcion:
      'Campaña de implantación de microchip con precio preferencial para vecinos de la comuna.',
    fechaInicio: '2026-01-15',
    fechaFin: '2026-04-30',
    tipo: 'chip',
    cuposDisponibles: 200,
    gratuito: false,
  },
];

// Horarios de atención
export const horariosAtencion = {
  lunesViernes: { apertura: '08:30', cierre: '17:30' },
  sabado: { apertura: '09:00', cierre: '13:00' },
  domingo: null,
  festivos: null,
};

// Veterinarias de emergencia cercanas
export const veterinariasEmergencia = [
  {
    nombre: 'Clínica Veterinaria 24 Horas',
    direccion: 'Av. Central 456',
    telefono: '+56 2 2345 6789',
    horario: '24 horas',
    distancia: '2.3 km',
  },
  {
    nombre: 'Hospital Veterinario Regional',
    direccion: 'Calle Norte 789',
    telefono: '+56 2 3456 7890',
    horario: '24 horas',
    distancia: '4.1 km',
  },
  {
    nombre: 'Urgencias Veterinarias Sur',
    direccion: 'Av. Sur 321',
    telefono: '+56 2 4567 8901',
    horario: 'Lun-Dom 08:00-22:00',
    distancia: '3.5 km',
  },
];

// Todas las mascotas para el panel admin
export const todasLasMascotas: (Mascota & { propietarioNombre: string })[] = [
  { ...mascotas[0], propietarioNombre: 'María González Pérez' },
  { ...mascotas[1], propietarioNombre: 'María González Pérez' },
  { ...mascotas[2], propietarioNombre: 'María González Pérez' },
  {
    id: 'pet-004',
    nombre: 'Toby',
    especie: 'perro',
    raza: 'Schnauzer',
    fechaNacimiento: '2020-05-12',
    sexo: 'macho',
    color: 'Gris sal y pimienta',
    chip: '956000012345680',
    esterilizado: true,
    foto: '/pets/toby.jpg',
    propietarioId: 'usr-002',
    propietarioNombre: 'Juan Pérez Rojas',
  },
  {
    id: 'pet-005',
    nombre: 'Nina',
    especie: 'gato',
    raza: 'Siamés',
    fechaNacimiento: '2023-02-28',
    sexo: 'hembra',
    color: 'Crema con puntos oscuros',
    chip: '956000012345681',
    esterilizado: false,
    foto: '/pets/nina.jpg',
    propietarioId: 'usr-003',
    propietarioNombre: 'Carmen Silva López',
  },
];

// Todas las citas para el panel admin
export const todasLasCitas: (Cita & { propietarioNombre: string })[] = [
  { ...citas[0], propietarioNombre: 'María González Pérez' },
  { ...citas[1], propietarioNombre: 'María González Pérez' },
  {
    id: 'cita-003',
    mascotaId: 'pet-004',
    mascotaNombre: 'Toby',
    propietarioId: 'usr-002',
    propietarioNombre: 'Juan Pérez Rojas',
    fecha: '2026-01-23',
    hora: '11:00',
    tipo: 'consulta',
    estado: 'confirmada',
    notas: 'Problemas de piel, posible alergia',
  },
  {
    id: 'cita-004',
    mascotaId: 'pet-005',
    mascotaNombre: 'Nina',
    propietarioId: 'usr-003',
    propietarioNombre: 'Carmen Silva López',
    fecha: '2026-01-24',
    hora: '15:30',
    tipo: 'vacuna',
    estado: 'pendiente',
    notas: 'Primera vacuna triple felina',
  },
];

// Mascotas disponibles para adopción
export const mascotasAdopcion: MascotaAdopcion[] = [
  {
    id: 'adop-001',
    nombre: 'Milo',
    especie: 'perro',
    edadAprox: 'Adulto (2 años)',
    sexo: 'macho',
    tamaño: 'grande',
    historia:
      'Un perro muy leal y protector. Le encanta salir a correr, ideal para una familia con patio grande y tiempo para paseos largos.',
    salud: ['Primera vacuna', 'Desparasitado'],
    imagenes: ['/dog_07.jpg'],
    estado: 'disponible',
    fechaIngreso: '2026-03-01',
  },
  {
    id: 'adop-002',
    nombre: 'Atom',
    especie: 'gato',
    edadAprox: 'Adulto (1 años)',
    sexo: 'macho',
    tamaño: 'pequeño',
    historia:
      'Atom es un gato muy tranquilo que disfruta dormir al sol. Fue rescatado de un techo donde no podía bajar.',
    salud: ['Vacuna Triple', 'Esterilizado', 'Microchip'],
    imagenes: ['/cat_09.jpg'],
    estado: 'disponible',
    fechaIngreso: '2026-02-15',
  },
  {
    id: 'adop-003',
    nombre: 'Rocky',
    especie: 'perro',
    edadAprox: 'Adulto (4 años)',
    sexo: 'macho',
    tamaño: 'mediano',
    historia:
      'Fue encontrado junto a sus hermanos en una caja cerca de la plaza. Es muy juguetón y le encanta morder zapatos.',
    salud: ['Vacuna Óctuple', 'Antirrábica', 'Esterilizado', 'Microchip'],
    imagenes: ['/dog_09.jpg', '/dog_09.jpg', '/dog_09.jpg', '/dog_09.jpg'],
    estado: 'disponible',
    fechaIngreso: '2025-12-10',
  },
  {
    id: 'adop-004',
    nombre: 'Mochi',
    especie: 'gato',
    edadAprox: 'Cachorro (4 meses)',
    sexo: 'hembra',
    tamaño: 'pequeño',
    historia:
      'Una gatita curiosa y exploradora. Todavía está aprendiendo a usar el rascador, pero es muy cariñosa.',
    salud: ['Desparasitada'],
    imagenes: ['/cat_04.jpg'],
    estado: 'en_proceso',
    fechaIngreso: '2026-03-05',
  },
];
