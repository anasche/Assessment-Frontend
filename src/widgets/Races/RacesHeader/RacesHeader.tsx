import React from 'react';
import Title from '@/components/Title/Title';

const RacesHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-syne font-medium text-[40px] leading-[49px] tracking-[-0.03em] text-[#0A0B14]">
          Events & Races
        </h1>
        <p className="font-sans font-normal text-[15px] leading-[20px] tracking-[-0.03em] text-[#000000] max-w-4xl mx-auto">
          Follow the latest events and races in the league
        </p>
      </div>
    </section>
  );
};

export default RacesHeader;
