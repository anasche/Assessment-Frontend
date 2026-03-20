import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const JockeyIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    {/* Replace this path with your actual jockey icon SVG path */}
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H9V9C9 11.66 11.34 14 14 14V22H18V14C18.66 14 19 13.66 19 13V10C19 9.45 18.55 9 18 9H21Z"/>
  </svg>
);

export const TrainerIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    {/* Replace this path with your actual trainer icon SVG path */}
    <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M12,9C14.67,9 20,10.34 20,13V20H4V13C4,10.34 9.33,9 12,9Z"/>
  </svg>
);

export const OwnerIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    {/* Replace this path with your actual owner icon SVG path */}
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
  </svg>
);

export const EventCountryIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    className={className}
  >
    {/* Background circle with specific color */}
    <circle cx="15" cy="15" r="15" fill="#000034" />
    {/* Globe outline */}
    <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    {/* Globe continent shapes */}
    <path d="M10 12c1.5-1 3-1.5 5-1 2 0.5 3 1.5 3 3s-1 2.5-2 3c-1 0.5-2 0-3-0.5s-2-1-3-1.5c-1-0.5-1-2 0-3z" fill="currentColor"/>
    <path d="M18 10c0.5 1 0.5 2 0 3s-1.5 1.5-2.5 1c-1-0.5-1-1.5-0.5-2.5s1.5-2 3-1.5z" fill="currentColor"/>
    {/* Location pin */}
    <path d="M20 8c-1.1 0-2 0.9-2 2 0 2 2 4 2 4s2-2 2-4c0-1.1-0.9-2-2-2z" fill="currentColor"/>
    <circle cx="20" cy="10" r="0.8" fill="#000034"/>
  </svg>
);

export const EventDateIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    className={className}
  >
    {/* Background circle with specific color */}
    <circle cx="15" cy="15" r="15" fill="#000034" />
    {/* Calendar icon */}
    <rect x="8" y="9" width="14" height="12" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7v4M18 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Calendar binding rings */}
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="8" r="1.5" fill="currentColor"/>
  </svg>
);