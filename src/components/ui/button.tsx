type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = "", type = "button", disabled, ...props }: ButtonProps) => (
  <button
    type={type}
    className={`px-4 py-2 rounded-sm cursor-pointer transition focus:outline-none focus:ring ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
