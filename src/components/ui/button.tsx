type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export const Button = ({ children, onClick, isLoading, type = 'button', disabled }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
    disabled={disabled || isLoading}
  >
    {isLoading ? 'Loading...' : children}
  </button>
);
