'use client';
import { Phone } from 'lucide-react';
import { Button } from '../components/Button';

export default function InfoCardsContactBanner() {
  return (
    <div className="from-primary to-primary/80 mt-12 rounded-2xl bg-gradient-to-r p-8 text-white">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
            <Phone className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              ¿Tienes dudas? Contáctanos
            </h3>
            <p className="text-white/80">
              Estamos disponibles de lunes a viernes para ayudarte
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div onClick={() => navigator.clipboard.writeText('+56 9 7135 7976')}>
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 gap-2">
              <Phone className="h-4 w-4" />
              +56 9 7135 7976
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
