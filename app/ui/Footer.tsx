import Link from 'next/link';
import { PawPrint, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e593d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Info Municipal */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/50 shadow-sm backdrop-blur-sm">
                <PawPrint className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg leading-tight font-bold text-white">
                  Veterinaria Municipal
                </p>
                <p className="text-sm text-white">Tu Comuna</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/90">
              Servicio de atención veterinaria para toda la comunidad. Cuidamos
              la salud de tus mascotas con profesionalismo y cercanía.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="inline-block text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/campanas"
                  className="inline-block text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Campañas Vigentes
                </Link>
              </li>
              <li>
                <Link
                  href="/informacion"
                  className="inline-block text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Tenencia Responsable
                </Link>
              </li>
              <li>
                <Link
                  href="/emergencias"
                  className="inline-block text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Emergencias
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="inline-block text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Portal Ciudadano
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <span>Av. Municipal 123, Tu Comuna</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Phone className="h-5 w-5 shrink-0 text-white" />
                <span>+56 2 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Mail className="h-5 w-5 shrink-0 text-white" />
                <span>veterinaria@tucomuna.cl</span>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Horarios de Atención
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <div>
                  <p className="mb-1 font-medium text-white">Lunes a Viernes</p>
                  <p className="text-white">08:30 - 17:30 hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <div>
                  <p className="mb-1 font-medium text-white">Sábados</p>
                  <p className="text-white">09:00 - 13:00 hrs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-700/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/80">
              © 2026 Municipalidad de Tu Comuna. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Política de Privacidad
              </Link>
              <Link
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
