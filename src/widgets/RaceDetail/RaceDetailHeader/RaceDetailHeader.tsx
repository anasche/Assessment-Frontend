import React from 'react';
import Title from '@/components/Title';
import { EventItem } from '@/hooks/useApi';
import { formatDate } from '@/utils/dateHelpers';

interface RaceDetailHeaderProps {
  eventItem: EventItem;
}

const RaceDetailHeader: React.FC<RaceDetailHeaderProps> = ({ eventItem }) => {
  return (
    <section className="pb-12 bg-white" style={{ paddingTop: '93px' }}>
      <div className="container mx-auto px-4 text-center pt-8">
        <Title as="h1" dark={true} className="mb-4">
          {eventItem.name}
        </Title>
        {eventItem.country?.flag && (
          <div className="text-4xl mb-6">{eventItem.country.flag}</div>
        )}
        
        <div className="mt-8 pt-8 border-t border-gray-100 max-w-4xl mx-auto">
          <div className="space-y-4">
            {eventItem.country?.name && (
              <p className="text-gray-900 font-bold tracking-tight text-lg">
                {eventItem.country.name}
              </p>
            )}
            {/* {eventItem.description && (
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                {eventItem.description}
              </p>
            )}
            {eventItem.distance && (
              <div className="flex justify-center">
                <span className="text-sm text-gray-500">
                  <strong>Distance:</strong> {eventItem.distance}m
                </span>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceDetailHeader;
