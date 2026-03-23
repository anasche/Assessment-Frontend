import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, image, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {icon && <div className="text-blue-600 mb-4">{icon}</div>}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
