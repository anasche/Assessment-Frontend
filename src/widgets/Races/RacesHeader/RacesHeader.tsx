import React from 'react';
import Title from '@/components/Title';

const RacesHeader: React.FC = () => {
  return (
    <section style={{ paddingTop: '93px' }} className="pb-16 md:pb-20 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Title as="h1" dark={true} className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Events & Races
          </Title>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-sm md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Follow the latest events and races in the league
          </p>
        </div>
      </div>
    </section>
  );
};

export default RacesHeader;
