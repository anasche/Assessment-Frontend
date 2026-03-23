import React from "react";
import News1 from "@/assets/images/news-detail/news-detail1.jpg";
import Badge from "@/components/Badge/Badge";
import Title from "@/components/Title/Title";

const NewsDetailHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden" style={{ marginTop: '93px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={News1}
          alt="News Detail Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-4">
        <div className="container mx-auto max-w-[1688px] px-[20px]">
          <div className="space-y-6">
            
            <Badge>
              UAE President Cup
            </Badge>
            
            <Title as="h1" className="uppercase max-w-4xl">
              BURAAK Claims Victory in <br /> Thrilling Morocco Stage Finale
            </Title>
            
            <p className="text-white/80 text-lg md:text-xl font-medium font-sans max-w-3xl">
              UAE President Cup Series Crowns Champions at Casablanca's Historic
              Anfa Racecourse
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-6 border-t border-white/20 text-[11px] font-medium uppercase tracking-[0.1em] text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-white/50">👤</span> Sarah Al Mansouri
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">📅</span> Sunday, March 15, 2024
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
