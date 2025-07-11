type InputProps = {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
};

export const Input = ({ label, value, onChange, error, type = 'text' }: InputProps) => {
  const inputId = label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className="space-y-1">
      {label && <label htmlFor={inputId} className="text-sm">{label}</label>}
      <input
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={!label ? 'Enter value' : undefined}
        className={`border px-2 py-1 w-full ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
