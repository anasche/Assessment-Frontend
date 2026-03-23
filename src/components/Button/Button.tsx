import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  to?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  to,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-dm-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden whitespace-nowrap';
  
  const variants = {
    primary: 'bg-[linear-gradient(90deg,#3C3CB6_27.24%,#141473_100%)] text-white hover:opacity-90 focus:ring-[#3C3CB6] shadow-lg shadow-blue-900/10',
    secondary: 'bg-gray-100 text-[#1a1a1a] hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-blue-50 focus:ring-[#1B3A6B]',
  };

  const sizes = {
    sm: 'h-[40px] px-4 text-xs rounded-[40px]',
    md: 'w-fit h-[50px] min-w-[141px] pt-[10px] pb-[10px] pr-[10px] pl-[20px] text-[15px] font-medium tracking-tightest rounded-[50px] gap-[15px]',
    lg: 'w-fit h-[60px] pt-[12px] pb-[12px] pr-[12px] pl-[24px] text-[16px] font-bold rounded-[60px] gap-[20px]',
  };

  const widthStyle = fullWidth ? '!w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...(props as any)}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
