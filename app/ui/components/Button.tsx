'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
  hasIcon?: boolean;
};

export function CTAButton({
  className,
  hasIcon = true,
  ...props
}: ButtonProps) {
  return (
    <button className="group shover:shadow-emerald-900/15 relative cursor-pointer overflow-hidden rounded-2xl bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-800 px-6 py-4 text-lg font-black text-white shadow-lg transition-all duration-300 hover:scale-102 active:scale-95 md:px-10">
      {/* Overlay gradiente para hover con transición suave */}
      <div className="absolute inset-0 bg-linear-to-bl from-emerald-600 via-emerald-700 to-emerald-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center justify-center gap-2">
        {hasIcon && (
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        )}
        <span>{props.children}</span>
      </div>
    </button>
  );
}

export function MutedCTAButton({ className, ...props }: ButtonProps) {
  return (
    <button className="relative cursor-pointer rounded-2xl bg-gray-100 px-6 py-4 text-lg font-black text-gray-600 shadow-lg ring-2 ring-gray-300/90 transition-all duration-300 hover:scale-103 active:scale-95 md:px-10">
      <span>{props.children}</span>
    </button>
  );
}

export function RoundMutedButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`text-muted-foreground border-border flex h-10 cursor-pointer items-center rounded-full border-2 bg-gray-100 px-7 shadow-emerald-950/20 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex h-12 cursor-pointer items-center rounded-xl bg-emerald-800/90 px-7 text-white shadow-emerald-950/30 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function MutedButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex h-12 cursor-pointer items-center rounded-xl bg-gray-100 px-7 font-medium text-gray-600 ring-2 ring-gray-300/90 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-auto flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-100 text-gray-800 shadow-sm shadow-zinc-200 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function UploadSecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <span
      className={`px-auto flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-100 text-gray-800 shadow-sm shadow-zinc-200 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

type RedirectButtonProps = React.ComponentProps<'button'> & {
  className?: string;
  to: string;
};

export function RedirectButton({ className, ...props }: RedirectButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(props.to)}
      className={`flex h-10 cursor-pointer items-center rounded-full bg-emerald-800/90 px-7 text-white shadow-emerald-950/30 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}
