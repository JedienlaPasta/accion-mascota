import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-emerald-900 font-sans text-white/80">
      <div className="h-10 w-full bg-emerald-950"></div>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo y Descripción */}
          <div className="space-y-6">
            <div className="flex w-fit items-center gap-2 rounded-2xl bg-emerald-50">
              <Image
                src="/logo.png"
                alt="cuidapet logo"
                width={200}
                height={40}
                className="h-22 w-40 object-cover p-3"
              />
            </div>
            <p className="max-w-[240px] text-[15px] leading-relaxed">
              Servicio de atención veterinaria para toda la comunidad. Cuidamos
              la salud de tus mascotas.
            </p>
          </div>

          {/* Enlaces Rápidos - Estilo Limpio */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              Enlaces
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <Link
                  href="/servicios"
                  className="transition-colors hover:text-white"
                >
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/campanas"
                  className="transition-colors hover:text-white"
                >
                  Campañas Vigentes
                </Link>
              </li>
              <li>
                <Link
                  href="/informacion"
                  className="transition-colors hover:text-white"
                >
                  Tenencia Responsable
                </Link>
              </li>
              <li>
                <Link
                  href="/emergencias"
                  className="transition-colors hover:text-white"
                >
                  Emergencias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto - Agrupado como Cuidapet */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              ¿Necesitas ayuda?
            </h3>
            <div className="space-y-4 text-[15px]">
              <div>
                <p className="text-xs opacity-60">WhatsApp / Teléfono</p>
                <a
                  href="tel:+56971357976"
                  className="text-white hover:underline"
                >
                  +56 9 7135 7976
                </a>
              </div>
              <div>
                <p className="text-xs opacity-60">Correo electrónico</p>
                <a
                  href="mailto:accionmascota@municipalidadalgarrobo.cl"
                  className="block truncate text-white hover:underline"
                >
                  accionmascota@municipalidad...
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs opacity-60">Dirección</p>
                <p className="text-white">Algarrobo, Chile</p>
                <p className="text-[13px] opacity-60">
                  (Atención presencial y domicilio)
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs opacity-60">Redes Sociales</p>
                <span className="flex items-center gap-2">
                  <p className="text-white">Facebook</p>
                  <Facebook className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
                </span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              Horarios
            </h3>
            <div className="space-y-3 text-[15px]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunes - Jueves</span>
                <span className="text-white">08:30 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Viernes</span>
                <span className="text-white">08:30 - 16:00</span>
              </div>
              <p className="pt-1 text-[13px] italic opacity-60">
                Colación: 14:00 a 15:00 hrs
              </p>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
            <p className="text-sm opacity-60">
              © 2026 Municipalidad de Algarrobo.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-white">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-white">
                Términos
              </Link>
            </div>
          </div>

          {/* Redes Sociales a la derecha */}
          <div className="flex gap-5">
            <Facebook className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
            <Instagram className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
