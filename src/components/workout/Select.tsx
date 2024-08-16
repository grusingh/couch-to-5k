import { ChangeEvent } from 'react';

type SelectProps = {
  label: string;
  value: number;
  options: number[];
  onSelect: (value: number) => void;
};

export default function Select({
  label,
  value,
  options,
  onSelect,
}: SelectProps) {
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const newValue = Number.parseInt(e.target.value);
    onSelect(newValue);
  }

  return (
    <div className="flex items-center gap-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={handleChange}
        className="w-16 border border-gray-300 rounded-md p-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blu"
      >
        {options.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}
