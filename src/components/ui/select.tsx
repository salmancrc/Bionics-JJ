import { Select as AntSelect } from 'antd';

type Option = { label: string; value: string };

export const Select = ({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  error?: string;
}) => (
  <div className="space-y-1">
    {label && <label className="text-sm">{label}</label>}
    <AntSelect
      className="w-full"
      value={value}
      onChange={onChange}
      options={options}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);
