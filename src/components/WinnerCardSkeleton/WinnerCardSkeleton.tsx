import React from 'react';

const WinnerCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#141473] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] p-4 sm:p-5 md:p-6 text-white shadow-xl relative overflow-hidden flex flex-col animate-pulse">
      {/* Title Skeleton */}
      <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2">
        <div className="bg-white/20 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 rounded mb-2"></div>
        <div className="bg-white/20 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Duration and Distance Skeleton */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="bg-white/10 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded"></div>
          <div className="bg-white/20 h-3 w-12 rounded"></div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="bg-white/10 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded"></div>
          <div className="bg-white/20 h-3 w-16 rounded"></div>
        </div>
      </div>

      {/* Bottom Section Skeleton */}
      <div className="flex-1 flex flex-col justify-end mt-2 sm:mt-3 md:mt-4">
        <div className="flex items-end justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Silk Image Skeleton */}
          <div className="flex-shrink-0">
            <div className="bg-white/20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded"></div>
          </div>

          {/* Personnel Info Skeleton */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 min-w-0">
            {/* Jockey Skeleton */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex-shrink-0"></div>
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="bg-white/10 h-2 w-12 rounded"></div>
                <div className="bg-white/20 h-3 rounded"></div>
              </div>
            </div>

            {/* Trainer Skeleton */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex-shrink-0"></div>
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="bg-white/10 h-2 w-12 rounded"></div>
                <div className="bg-white/20 h-3 rounded"></div>
              </div>
            </div>

            {/* Owner Skeleton */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 col-span-2 sm:col-span-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex-shrink-0"></div>
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="bg-white/10 h-2 w-10 rounded"></div>
                <div className="bg-white/20 h-3 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCardSkeleton;