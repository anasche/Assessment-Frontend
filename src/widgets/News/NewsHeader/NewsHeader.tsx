import React from 'react';
import Title from '@/components/Title';

const NewsHeader: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-4 border-b border-gray-100">
      <div className="container mx-auto max-w-7xl text-center">
        <Title as="h1" dark={true} className="mb-4 uppercase">
          News
        </Title>
        <p className="text-gray-500 font-medium tracking-[0.2em] uppercase text-xs">
          Explore and read latest news
        </p>
      </div>
    </section>
  );
};

export default NewsHeader;
