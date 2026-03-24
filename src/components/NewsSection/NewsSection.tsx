import React from 'react';
import { useNews } from '../../hooks/useApi';
import Loading from '../Loading';

const NewsSection: React.FC = () => {
  const { data: newsData, isLoading, error, isError } = useNews(1, 10);

  if (isLoading) return <Loading />;
  
  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Failed to load news: {error?.message}</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData?.data?.map((article: any) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="text-xs text-gray-500">
                  {new Date(article.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;