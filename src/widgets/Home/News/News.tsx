import React from "react";
import { ArrowRight } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import Title from "@/components/Title";
import Slider from "@/components/Slider";
import Event1 from "@/assets/images/news/news-1.png";
import Event2 from "@/assets/images/news/news-1.png";
import Event3 from "@/assets/images/news/news-1.png";

const News: React.FC = () => {
  const newsItems = [
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event2,
      tag: "Competition News",
      title:
        "Tomorrow, the eleventh leg of the UAE President Cup for Purebred Arabian Horses flags off",
      date: "March 14, 2024",
    },
    {
      image: Event3,
      tag: "Arabian Horse News",
      title:
        "Tomorrow, the Netherlands hosts the ninth leg of the President Cup for Arabian Horses",
      date: "March 13, 2024",
    },
  ];

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
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
