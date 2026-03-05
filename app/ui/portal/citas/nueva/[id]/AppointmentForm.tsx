'use client';
import { Button } from '@/app/ui/components/Button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  {
    id: '1',
    name: 'Consulta General',
    description: 'Examen de rutina para evaluar el estado general de salud.',
    price: 100,
  },
  {
    id: '2',
    name: 'Vacunación',
    description:
      'Administración de vacunas esenciales para prevenir enfermedades.',
    price: 80,
  },
  {
    id: '3',
    name: 'Limpieza Dental',
    description: 'Limpieza profunda para eliminar placa y sarro.',
    price: 120,
  },
  {
    id: '4',
    name: 'Desparasitación',
    description: 'Tratamiento interno y externo contra parásitos.',
    price: 50,
  },
];

const TIME_SLOTS = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
];

const DAYS_OF_WEEK = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export default function AppointmentForm() {
  const [step, setStep] = useState(1); // 1: Service, 2: Date & Time
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Calendar Logic
  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptySlots = Array.from({ length: firstDay }, (_, i) => i);

  const changeMonth = (offset: number) => {
    const newDate = new Date(selectedDate);
    const currentDay = newDate.getDate();

    // Primer dia del mes para evitar saltar meses (e.g. Ene 31 -> Feb)
    newDate.setDate(1);
    newDate.setMonth(newDate.getMonth() + offset);

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const daysInTargetMonth = getDaysInMonth(year, month);

    // Ajustar dia al maximo del mes objetivo (e.g. Ene 31 -> Feb 28)
    newDate.setDate(Math.min(currentDay, daysInTargetMonth));

    setSelectedDate(newDate);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelectedDay = (day: number) => {
    return day === selectedDate.getDate();
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
      {/* Header & Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {step === 1 ? 'Selecciona un Servicio' : 'Fecha y Hora'}
          </h2>
          <span className="text-sm font-medium text-emerald-600">
            Paso {step} de 2
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      {step === 1 ? (
        /* Step 1: Service Selection */
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Selecciona un Servicio
            </h1>
          </div>
          <div className="grid gap-4">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`group flex cursor-pointer items-center gap-4 rounded-xl border px-5 py-4 transition-all hover:shadow-md ${
                  selectedService === service.id
                    ? 'border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500'
                    : 'border-gray-200 bg-white hover:border-emerald-200'
                }`}
              >
                <div
                  className={`flex size-6 items-center justify-center rounded-full border-2 transition-colors ${
                    selectedService === service.id
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-gray-300/80 bg-white text-white'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      selectedService === service.id
                        ? 'text-emerald-900'
                        : 'text-gray-900'
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button
              disabled={!selectedService}
              onClick={() => setStep(2)}
              className="h-11 rounded-full px-8 disabled:opacity-50"
            >
              Siguiente
            </Button>
          </div>
        </div>
      ) : (
        /* Step 2: Date & Time Selection */
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Selecciona Fecha y Hora
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calendar */}
            <div>
              <div className="mb-4 flex items-center justify-between px-2">
                <button
                  onClick={() => changeMonth(-1)}
                  className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </button>
                <h3 className="text-lg font-bold text-gray-900">
                  {MONTHS[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => changeMonth(1)}
                  className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-7 text-center text-xs font-medium tracking-wide text-gray-400 uppercase">
                {DAYS_OF_WEEK.map((d, i) => (
                  <div key={i} className="py-2">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-2 text-sm">
                {emptySlots.map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {days.map((day) => {
                  const isSelected = isSelectedDay(day);
                  const today = isToday(day);
                  return (
                    <div
                      key={day}
                      onClick={() => {
                        const newDate = new Date(selectedDate);
                        newDate.setDate(day);
                        setSelectedDate(newDate);
                      }}
                      className="flex cursor-pointer items-center justify-center py-1"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                          isSelected
                            ? 'bg-emerald-600 font-semibold text-white shadow-md'
                            : today
                              ? 'bg-emerald-50 font-semibold text-emerald-600'
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Horarios Disponibles
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`cursor-pointer rounded-lg border px-2 py-2.5 text-xs font-medium transition-all ${
                      selectedTime === time
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <button
              onClick={() => setStep(1)}
              className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Volver
            </button>
            <Button
              disabled={!selectedTime}
              className="h-11 gap-2 rounded-full bg-emerald-600 px-8 hover:bg-emerald-700 disabled:opacity-50"
            >
              <Check className="h-4 w-4" />
              Confirmar Cita
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
