import { mascotasAdopcion, usuarioActual } from '@/app/_lib/mock-data';
import AdoptionAplicationForm from '@/app/ui/public/adopcion/AdoptionAplicationForm';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FormularioAdopcionPage({ params }: Props) {
  const { id } = await params;
  const mascota =
    mascotasAdopcion.find((m) => m.id === id) || mascotasAdopcion[0];

  return (
    <AdoptionAplicationForm usuarioActual={usuarioActual} mascota={mascota} />
  );
}
