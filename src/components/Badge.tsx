import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#161687] text-white text-[9px] font-black px-4 py-1.5 inline-block tracking-widest uppercase ${className}`}>
      {children}
    </div>
  );
};

export default Badge;