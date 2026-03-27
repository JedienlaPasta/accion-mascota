'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
};

export function CTAButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex h-10 cursor-pointer items-center rounded-full bg-emerald-800/90 px-7 text-white shadow-emerald-950/20 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
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
      className={`flex h-10 cursor-pointer items-center rounded-full bg-emerald-800/90 px-7 text-white shadow-emerald-950/30 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-auto flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-gray-300/80 text-gray-800 shadow-sm shadow-slate-200 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}

export function UploadSecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <span
      className={`px-auto flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-gray-300/80 text-gray-800 shadow-sm shadow-slate-200 transition-shadow duration-300 hover:shadow-lg ${className}`}
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
