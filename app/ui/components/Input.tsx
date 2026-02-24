import Link from 'next/link';

type InputProps = {
  label?: string;
  nombre: string;
  type?: string;
  pattern?: string;
  value?: string;
  readonly?: boolean;
  required?: boolean;
  placeHolder?: string;
  maxLength?: number;
  setData?: (prevState: string) => void;
};

export default function Input({
  label,
  nombre,
  type,
  pattern,
  value,
  readonly,
  placeHolder,
  maxLength,
  required,
  setData,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setData) {
      setData(e.target.value);
    }
  };

  return (
    <div className="flex grow flex-col gap-1">
      {label && (
        <label className="ml-1 flex justify-between text-[10px] font-bold text-slate-500 uppercase">
          <span>
            {label}
            {required ? (
              <span className="text-xs font-normal text-red-500"> *</span>
            ) : (
              <span className="text-[10px] font-normal text-slate-400">
                {' '}
                (opcional)
              </span>
            )}
          </span>
          {type === 'password' && (
            <Link href="#" className="text-primary text-[10px] hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          )}
        </label>
      )}
      <input
        required={required}
        id={label}
        name={nombre}
        type={type}
        readOnly={readonly}
        pattern={pattern}
        autoComplete="off"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        maxLength={
          maxLength ? maxLength : label === 'Código Campaña' ? 2 : undefined
        }
        className="h-10 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-gray-700 shadow-sm transition-all outline-none placeholder:text-[13px] placeholder:text-gray-400 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100"
      />
    </div>
  );
}
