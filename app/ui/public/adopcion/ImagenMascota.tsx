'use client';

import Image from 'next/image';
import { useState } from 'react';

type ImagenMascotaProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  blurDataURL?: string;
};

export default function ImagenMascota({
  src,
  alt,
  className,
  imageClassName,
  sizes = '(max-width: 768px) 100vw, 50vw',
  quality,
  priority,
  blurDataURL,
}: ImagenMascotaProps) {
  const [isLoading, setIsloading] = useState(true);

  return (
    <div className={`relative h-full w-full bg-gray-200/80 ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={blurDataURL ? 'blur' : undefined}
        blurDataURL={blurDataURL}
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${imageClassName ?? ''}`}
        onLoadingComplete={() => setIsloading(false)}
      />
    </div>
  );
}
