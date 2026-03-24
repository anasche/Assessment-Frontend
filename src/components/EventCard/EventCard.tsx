import React from "react";
import { Link } from "react-router-dom";
import { EventCountryIcon, EventDateIcon } from "@/components/icons/PersonnelIcons";

interface EventCardProps {
  title: string;
  date: string;
  country: string;
  daysRemaining: number;
  slug?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  country,
  daysRemaining,
  slug,
}) => {
  const content = (
    <div className="bg-[#000057] border border-white/10 hover:border-white/30 rounded-[15px] md:rounded-[20px] lg:rounded-[30px] p-4 md:p-6 transition-all duration-500 flex flex-col justify-between h-full min-h-[220px] md:min-h-[240px]">
      {/* Days Remaining Badge */}
      <div className="flex justify-center mb-3">
        <span className="bg-[#121278] px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold text-white/60 tracking-wider">
          {daysRemaining > 0 ? `${daysRemaining} Days remaining` : "Completed"}
        </span>
      </div>

      {/* Title */}
      <h4 className="font-syne font-normal text-base md:text-xl lg:text-[28px] leading-tight md:leading-[1.2] tracking-[-0.03em] text-center text-white mb-6 px-1 line-clamp-2">
        {title}
      </h4>

      {/* Info Row (Country & Date) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
        {/* Country - Only show if country exists */}
        {country && (
          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 w-full md:w-auto">
            <div className="rounded-[15px] overflow-hidden flex-shrink-0">
              <EventCountryIcon
                size={30}
                className="text-white w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-sans font-normal text-[10px] lg:text-[12px]  tracking-[0.1em] text-white/40">
                Event Country
              </span>
              <span className="font-syne font-bold text-sm md:text-base lg:text-[18px] text-white truncate">
                {country}
              </span>
            </div>
          </div>
        )}

        {/* Date - Only show if date exists */}
        {date && (
          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 w-full md:w-auto">
            <div className="rounded-[15px] overflow-hidden flex-shrink-0">
              <EventDateIcon
                size={30}
                className="text-white w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-sans font-normal text-[10px] lg:text-[12px]  tracking-[0.1em] text-white/40">
                Event Date
              </span>
              <span className="font-syne font-bold text-sm md:text-base lg:text-[18px] text-white truncate">
                {date}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link
        to={`/races/${slug}`}
        className="group block h-full hover:scale-[1.02] transition-transform duration-500"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default EventCard;
