import React, { useEffect } from 'react';
import NewsDetailHero from '@/widgets/NewsDetail/NewsDetailHero/NewsDetailHero';
import NewsDetailContent from '@/widgets/NewsDetail/NewsDetailContent/NewsDetailContent';

const NewsDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NewsDetailHero />
      <NewsDetailContent />
    </>
  );
};

export default NewsDetail;
