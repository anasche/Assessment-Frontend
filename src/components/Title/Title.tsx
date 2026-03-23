import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  dark?: boolean;
}

const Title: React.FC<TitleProps> = ({ 
  children, 
  as: Component = 'h2', 
  className = '',
  dark = false
}) => {
  const baseClasses = "font-syne font-bold leading-none tracking-tightest align-middle text-3xl md:text-5xl lg:text-6xl xl:text-[60px] break-words";
  const variantClasses = dark ? "text-[#1a1a1a]" : "text-white";
  
  return (
    <Component className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Title;
