import React, { lazy, Suspense } from 'react';
import NewsHeader from '@/widgets/News/NewsHeader/NewsHeader';
import Loading from '@/components/Loading/Loading';

const NewsGrid = lazy(() => import('@/widgets/News/NewsGrid/NewsGrid'));

const News: React.FC = () => {
  return (
    <>
      <NewsHeader />
      <Suspense fallback={<Loading />}>
        <NewsGrid />
      </Suspense>
    </>
  );
};

export default News;
