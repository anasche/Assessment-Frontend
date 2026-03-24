import React from 'react';

const EventCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#000057] border border-white/10 rounded-[15px] md:rounded-[20px] lg:rounded-[30px] p-4 md:p-6 flex flex-col justify-between h-full min-h-[220px] md:min-h-[240px] animate-pulse">
      {/* Days Remaining Badge Skeleton */}
      <div className="flex justify-center mb-3">
        <div className="bg-[#121278] px-3 py-1 rounded-full h-5 w-24 opacity-50"></div>
      </div>

      {/* Title Skeleton */}
      <div className="mb-6 px-1">
        <div className="bg-white/20 h-6 md:h-7 lg:h-8 rounded mb-2"></div>
        <div className="bg-white/20 h-6 md:h-7 lg:h-8 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Info Row Skeleton (Country & Date) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
        {/* Country Skeleton */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 w-full md:w-auto">
          <div className="rounded-[15px] overflow-hidden flex-shrink-0">
            <div className="bg-white/20 w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] rounded"></div>
          </div>
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <div className="bg-white/10 h-3 w-20 rounded"></div>
            <div className="bg-white/20 h-4 md:h-5 lg:h-6 rounded"></div>
          </div>
        </div>

        {/* Date Skeleton */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 w-full md:w-auto">
          <div className="rounded-[15px] overflow-hidden flex-shrink-0">
            <div className="bg-white/20 w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] rounded"></div>
          </div>
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <div className="bg-white/10 h-3 w-16 rounded"></div>
            <div className="bg-white/20 h-4 md:h-5 lg:h-6 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;