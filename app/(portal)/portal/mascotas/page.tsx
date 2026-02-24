'use client';

import React from 'react';

import Link from 'next/link';
import {
  PawPrint,
  Plus,
  Dog,
  Cat,
  Calendar,
  Syringe,
  CheckCircle,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '@/app/_lib/AuthContext';
import { Button } from '@/app/ui/components/Button';
import { citas, historialClinico, mascotas } from '@/app/_lib/mock-data';

const especieIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  perro: Dog,
  gato: Cat,
  otro: PawPrint,
};

function calcularEdad(fechaNacimiento: string) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  const diff = hoy.getTime() - nacimiento.getTime();
  const años = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const meses = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30)
  );
  if (años === 0) {
    return `${meses} meses`;
  }
  return `${años} año${años > 1 ? 's' : ''}`;
}

export default function MascotasPage() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <div className="p-8 text-center">
        <p>Debes iniciar sesión para ver esta página.</p>
        <Link href="/login">
          <Button className="mt-4">Iniciar Sesión</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-foreground text-2xl font-bold">Mis Mascotas</h1>
          <p className="text-muted-foreground">
            Gestiona el perfil de tus mascotas registradas
          </p>
        </div>
        <Link href="/portal/mascotas/nueva">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Registrar Mascota
          </Button>
        </Link>
      </div>

      {/* Pet Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mascotas.map((mascota) => {
          const Icon = especieIcons[mascota.especie];
          const citasPendientes = citas.filter(
            (c) =>
              c.mascotaId === mascota.id &&
              (c.estado === 'pendiente' || c.estado === 'confirmada')
          );
          const ultimoHistorial = historialClinico
            .filter((h) => h.mascotaId === mascota.id)
            .sort(
              (a, b) =>
                new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            )[0];

          return (
            <div
              key={mascota.id}
              className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white py-6 text-gray-600 shadow-md"
            >
              <span className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-card border-card flex h-14 w-14 items-center justify-center rounded-full border-2 shadow">
                      <Icon className="text-primary h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {mascota.nombre}
                      </h3>
                      <p>
                        {mascota.raza} - {calcularEdad(mascota.fechaNacimiento)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {mascota.esterilizado ? (
                      <div className="bg-green-100 text-xs text-green-700 hover:bg-green-100">
                        Esterilizado
                      </div>
                    ) : (
                      <div className="bg-amber-100 text-xs text-amber-700 hover:bg-amber-100">
                        Sin esterilizar
                      </div>
                    )}
                    {mascota.chip ? (
                      <div className="bg-transparent text-xs">Con chip</div>
                    ) : (
                      <div className="text-muted-foreground bg-transparent text-xs">
                        Sin chip
                      </div>
                    )}
                  </div>
                </div>
              </span>

              <div className="pt-4">
                {/* Info básica */}
                <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Sexo</p>
                    <p className="font-medium capitalize">{mascota.sexo}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Color</p>
                    <p className="font-medium">{mascota.color}</p>
                  </div>
                </div>

                {/* Estado rápido */}
                <div className="mb-4 space-y-2">
                  {citasPendientes.length > 0 ? (
                    <div className="flex items-center gap-2 rounded-md bg-blue-50 p-2 text-sm">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-700">
                        {citasPendientes.length} cita
                        {citasPendientes.length > 1 ? 's' : ''} pendiente
                        {citasPendientes.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  ) : (
                    <div className="bg-muted flex items-center gap-2 rounded-md p-2 text-sm">
                      <CheckCircle className="text-muted-foreground h-4 w-4" />
                      <span className="text-muted-foreground">
                        Sin citas pendientes
                      </span>
                    </div>
                  )}

                  {ultimoHistorial?.tratamiento && (
                    <div className="flex items-center gap-2 rounded-md bg-amber-50 p-2 text-sm">
                      <Syringe className="h-4 w-4 text-amber-600" />
                      <span className="line-clamp-1 text-amber-700">
                        Tratamiento activo
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/portal/mascotas/${mascota.id}`}
                    className="flex-1"
                  >
                    <Button className="w-full gap-2 bg-transparent">
                      Ver perfil
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/portal/citas/nueva?mascota=${mascota.id}`}>
                    <Button className="bg-transparent">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {mascotas.length === 0 && (
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white py-6 text-gray-600 shadow-md">
          <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <PawPrint className="text-muted-foreground h-8 w-8" />
          </div>
          <h3 className="text-foreground mb-2 text-lg font-medium">
            No tienes mascotas registradas
          </h3>
          <p className="text-muted-foreground mb-6">
            Registra a tu primera mascota para comenzar a gestionar sus citas y
            historial médico.
          </p>
          <Link href="/portal/mascotas/nueva">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Registrar mi primera mascota
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
