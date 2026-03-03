'use client';

import { Button, SecondaryButton } from '@/app/ui/components/Button';
import Input, { SafeNumberInput } from '@/app/ui/components/Input';
import {
  ArrowLeft,
  Camera,
  FileText,
  UploadCloud,
  X,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

// Componente Select reutilizable con el mismo estilo que el Input
const Select = ({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) => (
  <div className="flex grow flex-col gap-1">
    <label className="ml-1 flex justify-between text-[10px] font-bold text-slate-500 uppercase">
      <span>
        {label}
        {required ? (
          <span className="text-xs font-normal text-red-500"> *</span>
        ) : (
          <span className="text-[10px] font-normal text-slate-400">
            {' '}
            (opcional)
          </span>
        )}
      </span>
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 text-sm text-gray-700 shadow-sm transition-all outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      >
        <option value="" disabled>
          Seleccionar {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

export default function NuevaMascotaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '',
    raza: '',
    fechaNacimiento: '',
    sexo: '',
    color: '',
    peso: '',
    chip: '',
    esterilizado: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-full bg-gray-50/50 p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Link
              href="/portal/mascotas"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Link>
          </div>
          <h1 className="text-foreground text-3xl font-bold">Nueva Mascota</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Ingresa los datos para registrar a un nuevo integrante de la
            familia.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/portal/mascotas">
            <SecondaryButton className="h-10 gap-2 border-gray-200 bg-white px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <X className="h-4 w-4" />
              Cancelar
            </SecondaryButton>
          </Link>
          <Button className="h-10 gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Check className="h-4 w-4" />
            Guardar Mascota
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column - Form Fields */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Info Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              Información Básica
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input
                label="Nombre"
                nombre="nombre"
                placeHolder="Ej: Luna"
                value={formData.nombre}
                setData={(val) => handleChange('nombre', val)}
                required
              />
              <Select
                label="Especie"
                value={formData.especie}
                onChange={(e) => handleChange('especie', e.target.value)}
                options={[
                  { value: 'perro', label: 'Perro' },
                  { value: 'gato', label: 'Gato' },
                  { value: 'otro', label: 'Otro' },
                ]}
                required
              />
              <Input
                label="Raza"
                nombre="raza"
                placeHolder="Ej: Mestizo"
                value={formData.raza}
                setData={(val) => handleChange('raza', val)}
              />
              <Input
                label="Fecha de Nacimiento"
                nombre="fechaNacimiento"
                type="date"
                value={formData.fechaNacimiento}
                setData={(val) => handleChange('fechaNacimiento', val)}
                required
              />
            </div>
          </div>

          {/* Physical Details Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              Detalles Físicos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Select
                label="Sexo"
                value={formData.sexo}
                onChange={(e) => handleChange('sexo', e.target.value)}
                options={[
                  { value: 'macho', label: 'Macho' },
                  { value: 'hembra', label: 'Hembra' },
                ]}
                required
              />
              <Input
                label="Color"
                nombre="color"
                placeHolder="Ej: Negro con manchas"
                value={formData.color}
                setData={(val) => handleChange('color', val)}
                required
              />
              <SafeNumberInput
                label="Peso (kg)"
                nombre="peso"
                placeHolder="Ej: 12.5"
                value={formData.peso}
                setData={(val) => handleChange('peso', val)}
              />
            </div>
          </div>

          {/* Identification Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              Identificación y Salud
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input
                label="N° Microchip"
                nombre="chip"
                placeHolder="15 dígitos"
                maxLength={15}
                value={formData.chip}
                setData={(val) => handleChange('chip', val)}
              />
              <Select
                label="Esterilizado"
                value={formData.esterilizado}
                onChange={(e) => handleChange('esterilizado', e.target.value)}
                options={[
                  { value: 'si', label: 'Sí' },
                  { value: 'no', label: 'No' },
                ]}
                required
              />
            </div>
          </div>
        </div>

        {/* Right Column - Media Uploads */}
        <div className="space-y-6">
          {/* Documents Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-gray-900">Documentos</h2>
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-8 transition-colors hover:bg-gray-100">
              <div className="mb-3 rounded-full bg-emerald-50 p-3">
                <UploadCloud className="h-6 w-6 text-emerald-600" />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">
                <span className="cursor-pointer text-emerald-600 hover:underline">
                  Haz clic para subir
                </span>{' '}
                o arrastra
              </p>
              <p className="mt-1 text-center text-xs text-gray-500">
                PDF, PNG, JPG (max. 5MB)
              </p>
            </div>

            {/* Example uploaded file */}
            <div className="mt-4 rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium text-gray-900">
                    Certificado_vacunas.pdf
                  </p>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                    <div className="h-1.5 w-full rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Picture Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-gray-900">
              Foto de Perfil
            </h2>
            <p className="text-muted-foreground mb-4 text-xs">
              Sube una foto clara de tu mascota (max. 2MB).
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-100 shadow-sm ring-4 ring-white">
                <UserIconPlaceholder className="h-10 w-10 text-gray-400" />
              </div>
              <SecondaryButton className="gap-2 border-gray-200 bg-white px-3 text-xs hover:bg-gray-50">
                <Camera className="h-4 w-4" />
                Subir foto
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIconPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
}
