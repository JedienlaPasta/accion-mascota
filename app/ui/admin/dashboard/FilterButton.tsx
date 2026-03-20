'use client';
import { useState } from 'react';

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownButtonProps = Omit<React.ComponentProps<'button'>, 'value'> & {
  className?: string;
  options: DropdownOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
};

export function DropdownButton({
  className,
  options,
  value,
  onValueChange,
  onClick,
  children,
  type,
  disabled,
  placeholder = 'Seleccionar',
  ...props
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(options[0]?.value || '');

  const currentValue = value ?? internalValue;
  const selectedOption =
    options.find((opt) => opt.value === currentValue) || null;

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelection = (nextValue: string) => {
    onValueChange?.(nextValue);
    if (!onValueChange) {
      setInternalValue(nextValue);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <button
        type={type ?? 'button'}
        disabled={disabled}
        onClick={(e) => {
          toggleDropdown();
          onClick?.(e);
        }}
        className={`flex h-10 cursor-pointer items-center rounded-full border border-zinc-200 bg-white px-7 text-zinc-700 shadow-emerald-950/30 transition-shadow duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        {...props}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {selectedOption?.label || children || placeholder}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-full right-0 z-50 mt-2 w-48 rounded-md border border-zinc-200 bg-white p-2 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitem"
              className={`w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm text-zinc-800 hover:bg-zinc-100 ${
                option.value === currentValue ? 'bg-zinc-50 font-medium' : ''
              }`}
              onClick={() => handleSelection(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
