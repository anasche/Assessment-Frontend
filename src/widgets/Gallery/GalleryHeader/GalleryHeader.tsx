import React from 'react';

const GalleryHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-syne font-medium text-[40px] leading-[49px] tracking-[-0.03em] text-[#0A0B14]">
          A Year-by-Year Journey Horse Racing Galleries
        </h1>
        <p className="font-sans font-normal text-[15px] leading-[20px] tracking-[-0.03em] text-[#000000] max-w-4xl mx-auto">
          Immerse yourself in the timeless beauty and thrilling moments of horse racing as we take you on a captivating visual journey through our year-by-year horse racing galleries
        </p>
      </div>
    </section>
  );
};

export default GalleryHeader;
