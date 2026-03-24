import React from "react";
import { NewsItem } from "@/hooks/useApi";
import { formatDate } from "@/utils/dateHelpers";
import Badge from "@/components/Badge";
import Title from "@/components/Title";

interface NewsDetailHeroProps {
  newsItem: NewsItem;
}

const NewsDetailHero: React.FC<NewsDetailHeroProps> = ({ newsItem }) => {
  const getTag = (item: NewsItem) => {
    if (item.events && item.events.length > 0) {
      return 'Event News';
    }
    return 'UAE President Cup';
  };

  return (
    <section
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-4">
        <div className="container mx-auto max-w-[1688px] px-[20px]">
          <div className="space-y-6">
            <Badge>{getTag(newsItem)}</Badge>

            <Title as="h1" className="max-w-4xl">
              {newsItem.title}
            </Title>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-6 border-t border-white/20 text-[11px] font-medium tracking-[0.1em] text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-white/50">👤</span> {newsItem.authorName || 'Anonymous'}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">📅</span> {formatDate(newsItem.date)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">⏱️</span> 5 min read
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailHero;
