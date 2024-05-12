import { InputHTMLAttributes, useEffect, useState } from 'react';

export default function DebouncedInput<T extends string>({
  value: internalValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: T;
  onChange: (value: T) => void;
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState<T>(internalValue);

  useEffect(() => {
    setValue(internalValue);
  }, [internalValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value as T)} />;
}
