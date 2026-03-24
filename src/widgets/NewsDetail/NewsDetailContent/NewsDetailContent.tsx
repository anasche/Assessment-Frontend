import React from "react";
import { NewsItem } from "@/hooks/useApi";
import { formatDate } from "@/utils/dateHelpers";
import "./NewsContent.css";

interface NewsDetailContentProps {
  newsItem: NewsItem;
}

const NewsDetailContent: React.FC<NewsDetailContentProps> = ({ newsItem }) => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="space-y-12">
          {/* Date Badge */}
          <div className="flex justify-end">
            <span className="bg-gray-100 text-gray-600 text-[10px] font-medium tracking-widest px-4 py-2 rounded-full">
              {formatDate(newsItem.date)} - {new Date(newsItem.date).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              })}
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-syne">
              {newsItem.title}
            </h2>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {newsItem.authorImage ? (
                  <img 
                    src={newsItem.authorImage} 
                    alt={newsItem.authorName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-600">👤</span>
                )}
              </div>
              <div>
                <span className="text-xs text-gray-500 tracking-widest block font-medium">
                  By
                </span>
                <span className="text-sm font-bold text-gray-900 tracking-wide">
                  {newsItem.authorName || 'Anonymous'}
                </span>
              </div>
            </div>

            {/* Dynamic Content */}
            <div 
              className="news-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}
            />

            {/* Associated Events */}
            {newsItem.events && newsItem.events.length > 0 && (
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Events</h3>
                <div className="space-y-3">
                  {newsItem.events.map((event) => (
                    <div key={event._id} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div>
                        <span className="font-medium text-gray-900">{event.name}</span>
                        {event.distance && (
                          <span className="text-sm text-gray-600 ml-2">({event.distance}m)</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
