
type Props = {
  label?: string;
  error?: string;
  children: React.ReactNode;
};

export const FormFieldWrapper = ({ label, error, children }: Props) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    {children}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);
