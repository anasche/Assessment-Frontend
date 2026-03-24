import React from 'react';
import Title from '@/components/Title';
import WinnerCard from './WinnerCard';
import WinnerCardSkeleton from '@/components/WinnerCardSkeleton';
import { usePastEventsWithWinners } from '@/hooks/useApi';

const Winners: React.FC = () => {
  const { data: eventsResponse, isLoading, error, isError } = usePastEventsWithWinners();

  // Extract events data and limit to 6 for display
  const events = eventsResponse?.data?.data?.slice(0, 6) || [];

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-[77px]">
        <div className="text-center mb-12">
          <Title dark={true} className="mb-4">
            Winners of the Race
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <WinnerCardSkeleton key={index} />
            ))
          ) : isError ? (
            <div className="col-span-full text-center">
              <p className="text-red-600">Failed to load winners: {error?.message}</p>
            </div>
          ) : events.length === 0 ? (
            <div className="col-span-full text-center">
              <p className="text-gray-600">No winners data available</p>
            </div>
          ) : (
            events.map((event, index) => (
              <WinnerCard key={event._id || index} event={event} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Winners;
