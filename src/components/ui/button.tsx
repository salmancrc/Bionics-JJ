import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = '', ...props }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded-sm cursor-pointer transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
