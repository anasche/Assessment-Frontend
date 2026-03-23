import React from 'react';
import Title from '@/components/Title/Title';

const RaceDetailHeader: React.FC = () => {
  return (
    <section className="pb-12 bg-white" style={{ paddingTop: '93px' }}>
      <div className="container mx-auto px-4 text-center pt-8">
        <Title as="h1" dark={true} className="mb-4">
          Morocco Stage
        </Title>
        <div className="text-4xl mb-6">🇲🇦</div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 max-w-4xl mx-auto">
          <p className="text-gray-900 font-bold tracking-tight text-lg">
            Anfa Sand Track - Casablanca
          </p>
        </div>
      </div>
    </section>
  );
};

export default RaceDetailHeader;
