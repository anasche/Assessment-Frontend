import React from 'react';
import NewsHeader from '@/widgets/News/NewsHeader/NewsHeader';
import NewsGrid from '@/widgets/News/NewsGrid/NewsGrid';

const News: React.FC = () => {
  return (
    <>
      <NewsHeader />
      <NewsGrid />
    </>
  );
};

export default News;
