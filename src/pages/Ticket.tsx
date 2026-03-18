import React from "react";
import BookExperience from "@/widgets/Home/BookExperience/BookExperience";
import ExploreLink from "@/components/ExploreLink";
import { Globe, Calendar } from "lucide-react";
import BookingBg1 from "@/assets/images/experience/experience-1.jpg";
import BookingBg2 from "@/assets/images/gallery/image1.png";
import BookingBg3 from "@/assets/images/gallery/image2.jpg";
import BookingBg4 from "@/assets/images/gallery/image3.jpg";

interface TicketCardProps {
  title: string;
  country: string;
  flag: string;
  date: string;
  image: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  country,
  flag,
  date,
  image,
}) => (
  <div className="relative h-[250px] md:h-[350px] lg:h-[450px] rounded-[30px] md:rounded-[40px] overflow-hidden group shadow-2xl">
    <img
      src={image}
      alt={title}
      className="absolute w-[624px] h-[367px] transition-transform duration-[5s] group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 md:p-8 text-center ring-1 ring-white/10">
      <h3 className="font-syne font-bold text-xl md:text-3xl lg:text-[34px] text-white mb-6 md:mb-8 leading-[1.1] tracking-tightest max-w-[320px]">
        {title}
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 text-white">
          <Globe size={18} className="text-white/60" />
          <div className="flex flex-col items-start translate-y-0.5">
            <span className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-widest uppercase mb-0.5">
              Event Country
            </span>
            <span className="text-xs md:text-[14px] font-bold flex items-center gap-1.5">
              {country} <span>{flag}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-white">
          <Calendar size={18} className="text-white/60" />
          <div className="flex flex-col items-start translate-y-0.5">
            <span className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-widest uppercase mb-0.5">
              Event Date
            </span>
            <span className="text-xs md:text-[14px] font-bold">{date}</span>
          </div>
        </div>
      </div>

      <ExploreLink to="#">BOOK EXPERIENCE</ExploreLink>
    </div>
  </div>
);

const Ticket: React.FC = () => {
  const legs = [
    {
      title: "Moroccan leg of the UAEPresidentCup Series",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg1,
    },
    {
      title: "Moroccan leg of the UAEPresidentCup Series",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg2,
    },
    {
      title: "Track of Champions",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg3,
    },
    {
      title: "Battle of the Arabian Horses",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg4,
    },
  ];

  return (
    <div className="bg-white" style={{ paddingTop: "93px" }}>
      {/* Banner using the BookExperience widget with design text */}
      <BookExperience
        title="Morocco Stage 2026"
        description="Witness the excellence of Arabian horse racing at Anfa Racecourse, Casablanca"
        className="md:pt-8"
      />

      {/* legs Grid */}
      <section className="py-12 md:py-24 max-w-[1728px] mx-auto px-4 md:px-8 xl:px-[77px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {legs.map((leg, index) => (
            <TicketCard key={index} {...leg} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ticket;
