interface InputProps {
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
        className={`border border-gray-100 outline-0 px-2 rounded-sm py-1 w-full ${error ? 'border-red-500' : 'border-gray-100'}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
