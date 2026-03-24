import React from 'react';

const NewsCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="w-full h-full bg-gray-200"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-10 flex flex-col flex-grow">
        {/* Title Skeleton */}
        <div className="mb-4">
          <div className="bg-gray-200 h-6 rounded mb-2"></div>
          <div className="bg-gray-200 h-6 rounded w-3/4"></div>
        </div>
        
        {/* Description Skeleton */}
        <div className="mb-8 space-y-2">
          <div className="bg-gray-100 h-4 rounded"></div>
          <div className="bg-gray-100 h-4 rounded"></div>
          <div className="bg-gray-100 h-4 rounded w-2/3"></div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-auto flex justify-end">
          <div className="bg-gray-200 rounded-[100px] h-10 w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;