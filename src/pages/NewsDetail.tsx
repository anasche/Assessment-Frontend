import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNewsById } from '@/hooks/useApi';
import NewsDetailHero from '@/widgets/NewsDetail/NewsDetailHero/NewsDetailHero';
import NewsDetailContent from '@/widgets/NewsDetail/NewsDetailContent/NewsDetailContent';
import Loading from '@/components/Loading';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: newsItem, isLoading, error, isError } = useNewsById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">News Not Found</h1>
          <p className="text-gray-600 mb-8">
            {error?.message || 'The news article you are looking for does not exist.'}
          </p>
          <a 
            href="/news" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to News
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <NewsDetailHero newsItem={newsItem} />
      <NewsDetailContent newsItem={newsItem} />
    </>
  );
};

export default NewsDetail;
