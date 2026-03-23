import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-blue-100"></div>
        <div className="absolute top-0 h-16 w-16 rounded-full border-t-4 border-blue-600 animate-spin"></div>
        <div className="mt-4 text-center text-blue-600 font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
