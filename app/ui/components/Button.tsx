import * as React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
};

export function CTAButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex h-10 cursor-pointer items-center rounded-full bg-emerald-800 px-7 text-white shadow-emerald-950/20 transition-shadow duration-300 hover:shadow-lg ${className}`}
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
      className={`flex h-10 cursor-pointer items-center rounded-full bg-emerald-800 px-7 text-white shadow-emerald-950/30 transition-shadow duration-300 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}
