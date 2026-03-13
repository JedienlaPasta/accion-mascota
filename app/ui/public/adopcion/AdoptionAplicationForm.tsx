'use client';

import { MascotaAdopcion, Usuario } from '@/app/_lib/mock-data';
import { AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import { SafeNumberInput, TextArea } from '../../components/Input';

type AdoptionAplicationFormProps = {
  usuarioActual: Usuario;
  mascota: MascotaAdopcion;
};

export default function AdoptionAplicationForm({
  usuarioActual,
  mascota,
}: AdoptionAplicationFormProps) {
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  const tipoVivienda = ['Casa', 'Departamento', 'Parcela', 'Otro'];
  const [viviendaSeleccionada, setViviendaSeleccionada] = useState<string>('');
  const [viviendaPropia, setViviendaPropia] = useState<string>('');
  const [tipoPatioSeleccionado, setTipoPatioSeleccionado] =
    useState<string>('');
  const [personasHogar, setPersonasHogar] = useState<string>('');
  const [niñosMenoresSeleccionado, setNiñosMenoresSeleccionado] =
    useState<string>('');
  const [aceptaTerminos, setAceptaTerminos] = useState<boolean>(false);
  const [otrasMascotas, setOtrasMascotas] = useState<string>('');

  const validarFormulario = () => {
    if (!viviendaSeleccionada) {
      return false;
    }
    if (!viviendaPropia) {
      return false;
    }
    if (mascota.especie === 'perro' && !tipoPatioSeleccionado) {
      return false;
    }
    if (!personasHogar) {
      return false;
    }
    if (!niñosMenoresSeleccionado) {
      return false;
    }
    if (!otrasMascotas) {
      return false;
    }
    if (!aceptaTerminos) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    // Temporal para simular llamada a la API
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setEnviando(false);
      setEnviado(true);
    }, 1500);
  };

  if (enviado) {
    return (
      <div className="flex min-h-[90svh] items-center justify-center bg-[#f8fafc] p-4">
        <div className="w-full max-w-lg rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-10 w-10 text-[#006D4E]" />
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
            ¡Solicitud Enviada!
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            Hemos recibido tu formulario para adoptar a{' '}
            <strong>{mascota.nombre}</strong>. El equipo de la Veterinaria
            Municipal revisará tus respuestas y te contactará al teléfono{' '}
            <strong>{usuarioActual.telefono}</strong> en los próximos días
            hábiles.
          </p>
          <Link
            href="/adopcion"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#006D4E] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#005a40]"
          >
            Volver a la galería
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-8 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href={`/adopcion/${mascota.id}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#006D4E]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al perfil de {mascota.nombre}
        </Link>

        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solicitud de Adopción
          </h1>
          <p className="text-gray-600">
            Estás a un paso de darle un hogar a{' '}
            <span className="font-bold text-[#006D4E]">{mascota.nombre}</span>.
            Por favor, completa este cuestionario con sinceridad.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Datos del Solicitante */}
          <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-[#006D4E]">
                1
              </span>
              Tus Datos Personales
            </h2>

            <div className="mb-6 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-800">
              <AlertCircle className="h-5 w-5 shrink-0 text-blue-600" />
              <p>
                Estos datos se obtienen de tu perfil en el Portal Ciudadano. Si
                necesitas actualizarlos, ve a la configuración de tu cuenta.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={usuarioActual.nombre}
                  className="w-full cursor-not-allowed rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  RUT
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={usuarioActual.rut}
                  className="w-full cursor-not-allowed rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={usuarioActual.telefono}
                  className="w-full cursor-not-allowed rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Dirección actual
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={usuarioActual.direccion}
                  className="w-full cursor-not-allowed rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Entorno y Vivienda */}
          <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-[#006D4E]">
                2
              </span>
              Entorno y Vivienda
            </h2>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  ¿En qué tipo de propiedad vives?
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {tipoVivienda.map((tipo) => (
                    <label
                      key={tipo}
                      className={`relative flex cursor-pointer rounded-xl border bg-white p-4 shadow-sm hover:bg-gray-50 ${viviendaSeleccionada === tipo ? 'border-transparent ring-2 ring-[#006D4E]' : 'border-gray-200'}`}
                    >
                      <input
                        type="radio"
                        name="tipo_vivienda"
                        value={tipo}
                        className="peer sr-only"
                        required
                        onChange={() => setViviendaSeleccionada(tipo)}
                      />
                      <span className="text-sm font-medium text-gray-900 peer-checked:text-[#006D4E]">
                        {tipo}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  La propiedad es:
                </label>
                <div className="flex gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="tenencia"
                      value="propia"
                      className="h-4 w-4 text-[#006D4E] focus:ring-[#006D4E]"
                      required
                      onChange={() => setViviendaPropia('propia')}
                    />
                    <span className="text-sm text-gray-700">Propia</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="tenencia"
                      value="arrendada"
                      className="h-4 w-4 text-[#006D4E] focus:ring-[#006D4E]"
                      required
                      onChange={() => setViviendaPropia('arrendada')}
                    />
                    <span className="text-sm text-gray-700">
                      Arrendada (requiere permiso del dueño)
                    </span>
                  </label>
                </div>
              </div>

              {mascota.especie === 'perro' && (
                <Dropdown
                  label="¿Cuentas con patio o cierre perimetral seguro?"
                  value={tipoPatioSeleccionado}
                  onChange={setTipoPatioSeleccionado}
                  labelStyle="mb-3 block text-sm font-medium text-gray-700"
                  options={[
                    {
                      value: 'si_seguro',
                      label: 'Sí, cerrado completamente y seguro',
                    },
                    {
                      value: 'si_parcial',
                      label: 'Sí, pero requiere reparaciones',
                    },
                    {
                      value: 'no',
                      label: 'No tengo patio / Vivo en departamento',
                    },
                  ]}
                />
              )}
            </div>
          </div>

          {/* Familia y Otras Mascotas */}
          <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-[#006D4E]">
                3
              </span>
              Familia y Experiencia
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <SafeNumberInput
                  label="¿Cuántas personas viven en el hogar?"
                  nombre="personas_hogar"
                  pattern="[0-9]*"
                  min="1"
                  placeHolder="Ej: 3"
                  value={personasHogar}
                  setData={setPersonasHogar}
                  required
                  showIsRequired={false}
                  labelStyle="mb-2 block text-sm font-medium text-gray-700"
                />
                <Dropdown
                  label="¿Hay niños menores de 12 años?"
                  value={niñosMenoresSeleccionado}
                  onChange={setNiñosMenoresSeleccionado}
                  labelStyle="mb-2 block text-sm font-medium text-gray-700"
                  options={[
                    {
                      value: 'si',
                      label: 'Sí',
                    },
                    {
                      value: 'no',
                      label: 'No',
                    },
                  ]}
                />
              </div>

              <TextArea
                label="¿Tienes otras mascotas actualmente?"
                nombre="otras_mascotas"
                placeHolder="Si tienes, indícanos especie y edad. Ej: Un perro de 5 años y un gato de 2 años..."
                value={otrasMascotas}
                setData={setOtrasMascotas}
                required
                showIsRequired={false}
                labelStyle="mb-2 block text-sm font-medium text-gray-700"
              />
            </div>
          </div>

          {/* Checkbox Final */}
          <div className="rounded-4xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 sm:p-8">
            <label className="flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                checked={aceptaTerminos}
                onChange={() => setAceptaTerminos((prev) => !prev)}
                required
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#006D4E] focus:ring-[#006D4E]"
              />
              <span className="text-sm leading-relaxed text-emerald-900">
                Declaro que la información proporcionada es verdadera. Comprendo
                que la adopción es un compromiso a largo plazo (15+ años) e
                implica gastos médicos, alimentación y tiempo. Acepto que la
                Municipalidad realice seguimiento presencial o telefónico tras
                la adopción.
              </span>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={enviando || !validarFormulario()}
              className={`flex w-full items-center justify-center rounded-xl bg-[#006D4E] px-6 py-4 text-lg font-bold text-white transition-all hover:bg-[#005a40] focus:ring-4 focus:ring-emerald-500/30 focus:outline-none disabled:opacity-50 ${enviando ? 'cursor-wait' : !validarFormulario() ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {enviando
                ? 'Enviando solicitud...'
                : 'Enviar Solicitud de Adopción'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
