import React from "react";
import ExploreLink from "@/components/ExploreLink";
import { EventCountryIcon, EventDateIcon } from "@/components/icons/PersonnelIcons";

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
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center ring-1 ring-white/10" style={{backgroundColor: '#000000C7'}}>
      <h3 className="font-syne font-bold text-xl md:text-3xl lg:text-[34px] text-white mb-6 md:mb-8 leading-[1.1] tracking-tightest max-w-[320px] whitespace-pre-line">
        {title}
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 text-white">
          <EventCountryIcon size={18} className="text-white" />
          <div className="flex flex-col items-start translate-y-0.5">
            <span className="text-[8px] md:text-[10px] font-bold text-white tracking-widest mb-0.5">
              Event Country
            </span>
            <span className="text-xs md:text-[14px] font-bold flex items-center gap-1.5">
              {country} <span>{flag}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-white">
          <EventDateIcon size={18} className="text-white" />
          <div className="flex flex-col items-start translate-y-0.5">
            <span className="text-[8px] md:text-[10px] font-bold text-white tracking-widest mb-0.5">
              Event Date
            </span>
            <span className="text-xs md:text-[14px] font-bold">{date}</span>
          </div>
        </div>
      </div>

      <ExploreLink to="#">Book Experience</ExploreLink>
    </div>
  </div>
);

export default TicketCard;