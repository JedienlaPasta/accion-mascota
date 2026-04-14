'use client';

import Image from 'next/image';
import { useState } from 'react';

type ImagenMascotaProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImagenMascota({
  src,
  alt,
  className,
}: ImagenMascotaProps) {
  const [isLoading, setIsloading] = useState(true);

  return (
    <div className={`relative h-full w-full bg-gray-200/80 ${className}`}>
      {isLoading && <div className="absolute inset-0 animate-pulse" />}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        // priority
        className={`object-cover transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsloading(false)}
      />
    </div>
  );
}
