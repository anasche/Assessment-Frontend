import NewsCard from '@/components/NewsCard';
import NewsCardSkeleton from '@/components/NewsCardSkeleton';
import { useNews, type NewsItem } from '@/hooks/useApi';
import { formatDate } from '@/utils/dateHelpers';
import { createExcerpt } from '@/utils/textHelpers';



const NewsGrid: React.FC = () => {
  const { data: newsResponse, isLoading, error, isError } = useNews(1, 10);

  // Helper function to extract tag from events or content
  const getTag = (item: NewsItem) => {
    if (item.events && item.events.length > 0) {
      return 'Event News';
    }
    return 'Arabian Horse News';
  };
console.log(newsResponse,"newsResponse")
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))
          ) : isError ? (
            // Show error message
            <div className="col-span-full text-center py-8">
              <p className="text-red-600">Failed to load news: {error?.message}</p>
            </div>
          ) : (() => {
            // The API returns NewsResponse with { currentPage, totalCount, totalPages, data: [...] }
            // newsResponse is already the NewsResponse object, so we access .data directly
            const newsData = newsResponse?.data?.data || [];
            
            // Ensure newsData is an array
            if (!Array.isArray(newsData)) {
              return (
                <div className="col-span-full text-center py-8">
                  <p className="text-red-600">No news data available</p>
                </div>
              );
            }

            if (newsData.length === 0) {
              return (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600">No news articles found</p>
                </div>
              );
            }

            return newsData.map((item: NewsItem, index: number) => (
              <NewsCard 
                key={item._id || index} 
                image={item.image}
                date={formatDate(item.date)}
                tag={getTag(item)}
                title={item.title}
                description={createExcerpt(item.content)}
              />
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;