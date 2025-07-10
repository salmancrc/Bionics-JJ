import { DatePicker as AntDatePicker } from 'antd';
import dayjs from 'dayjs';

export const DatePicker = ({
  label,
  value,
  onChange,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-1">
    {label && <label className="text-sm">{label}</label>}
    <AntDatePicker
      className="w-full"
      value={dayjs(value)}
      onChange={(d) => onChange(d?.toISOString() || '')}
    />
  </div>
);
