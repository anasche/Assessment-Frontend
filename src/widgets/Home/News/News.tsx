import React from "react";
import { ArrowRight } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import Title from "@/components/Title";
import Slider from "@/components/Slider";
import { useNews } from "@/hooks/useApi";
import { formatDate } from "@/utils/dateHelpers";
import { createExcerpt } from "@/utils/textHelpers";

const News: React.FC = () => {
  const { data: newsData, isLoading, error, isError } = useNews(1, 6); // Get 6 latest news items for homepage

  // Helper function to extract tag from events or content
  const getTag = (item: any) => {
    if (item.events && item.events.length > 0) {
      return 'Event News';
    }
    return 'Arabian Horse News';
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div>
            <Title dark={true} className="mb-2">
              News
            </Title>
            <p className="font-medium text-[17px] leading-none tracking-tightest text-black/60">
              Stay updated with the latest from the world of horse racing
            </p>
          </div>
        </div>

        {isLoading ? (
          // Show skeleton cards while loading
          <Slider
            prevElClass="custom-prev"
            nextElClass="custom-next"
            navigationContainerClass="mb-6 md:mb-8"
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </Slider>
        ) : isError ? (
          // Show error message
          <div className="text-center py-8">
            <p className="text-red-600">Failed to load news: {error?.message}</p>
          </div>
        ) : (
          <Slider
            prevElClass="custom-prev"
            nextElClass="custom-next"
            navigationContainerClass="mb-6 md:mb-8"
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {newsData && newsData.length > 0 ? (
              newsData.map((item: any, index: number) => (
                <NewsCard 
                  key={item._id || index}
                  id={item._id}
                  image={item.image}
                  tag={getTag(item)}
                  title={item.title}
                  date={formatDate(item.date)}
                  description={createExcerpt(item.content)}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No news articles found</p>
              </div>
            )}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default News;
