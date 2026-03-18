import { Calendar, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import FeaturedEvent from "@/assets/images/event-calendar/event-calendar.png";
import Title from "@/components/Title";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const EventsCalendar: React.FC = () => {
  const events = [
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
  ];

  return (
    <section className="bg-white overflow-hidden relative z-20">
      <div className="w-full max-w-[1688px] mx-auto px-4 md:px-6 lg:px-[20px] py-12 md:py-16 lg:py-20">

        {/* Featured Image with everything overlaid - taller on mobile */}
        <div className="w-full relative rounded-[20px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-video">
          <img
            src={FeaturedEvent}
            alt="Calendar Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #3C3CB6 15.39%, #141473 44.85%, rgba(19, 19, 123, 0) 84.66%)" }} />

          {/* Title at top */}
          <div className="absolute top-4 md:top-6 lg:top-16 inset-x-0 flex flex-col items-center gap-1 md:gap-2 lg:gap-3 px-4 md:px-6">
            <Title dark={false} className="text-center text-xl md:text-2xl lg:text-4xl">
              Events Calendar
            </Title>
            <p className="font-medium text-xs md:text-sm lg:text-[15px] leading-none tracking-tightest text-white/60 text-center max-w-xs md:max-w-md">
              Never miss a moment—view all upcoming events here
            </p>
          </div>

          {/* Nav + Slider at bottom */}
          <div className="absolute bottom-4 md:bottom-4 lg:bottom-6 inset-x-0 px-4 md:px-6 lg:px-8">
            {/* Filters just above slider */}
            <div className="flex justify-center mb-3 md:mb-2">
              <div className="inline-flex items-center bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base">
                <button className="flex items-center gap-2 md:gap-2 lg:gap-3 text-[#666] font-medium transition-all hover:text-[#333] whitespace-nowrap">
                  <Calendar size={14} className="text-[#666] md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span className="hidden sm:inline">2025</span>
                  <span className="sm:hidden">25</span>
                  <ChevronDown size={12} className="text-[#666] md:w-3 md:h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                </button>
                <div className="w-px h-3 md:h-4 lg:h-6 bg-gray-300 flex-shrink-0"></div>
                <button className="flex items-center gap-2 md:gap-2 lg:gap-3 text-[#666] font-medium transition-all hover:text-[#333] whitespace-nowrap">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#666] md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="hidden sm:inline">April</span>
                  <span className="sm:hidden">Apr</span>
                  <ChevronDown size={12} className="text-[#666] md:w-3 md:h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                </button>
              </div>
            </div>
            <div className="flex justify-end mb-2 md:mb-2">
              <div className="flex gap-2 md:gap-3">
                <button className="events-prev h-8 w-8 md:h-9 md:w-9 bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-white">
                  <ArrowRight className="rotate-180" size={14} />
                </button>
                <button className="events-next h-8 w-8 md:h-9 md:w-9 bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-white">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".events-prev", nextEl: ".events-next" }}
              spaceBetween={12}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 12 },
                480: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.5, spaceBetween: 16 },
                768: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 16 },
                1280: { slidesPerView: 3, spaceBetween: 16 },
              }}
              className="events-swiper"
            >
              {events.map((event, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-[#05061F]/80 backdrop-blur-md border border-white/10 rounded-[15px] md:rounded-[20px] lg:rounded-[30px] p-4 md:p-4 lg:p-5 hover:border-white/30 transition-all flex flex-col justify-between mb-6 md:mb-8 lg:mb-[50px] min-h-[200px] md:min-h-[180px] lg:min-h-[208px]">
                    <div className="flex justify-center mb-3">
                      <span className="bg-[#121278] px-3 py-1 rounded-full text-[9px] md:text-[9px] font-bold text-white/60 tracking-wider">
                        {idx === 0 ? "7 Days remaining" : idx === 1 ? "31 Days remaining" : "50 Days remaining"}
                      </span>
                    </div>
                    <h4 className="font-syne font-normal text-base md:text-xl lg:text-[35px] leading-tight md:leading-[1.2] tracking-[-0.03em] text-center text-white mb-4 px-1 line-clamp-2">
                      {event.title}
                    </h4>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-2">
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <span className="font-sans font-normal text-xs md:text-xs lg:text-[15px] leading-[100%] tracking-[-0.03em] text-white/40">Event Country</span>
                        <div className="flex items-center gap-1 font-syne font-bold text-sm md:text-sm lg:text-[20px] leading-[100%] tracking-[-0.03em] text-white">
                          <MapPin size={10} className="text-white/40 md:w-2.5 md:h-2.5 flex-shrink-0" /> 
                          <span className="truncate">Morocco 🇲🇦</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <span className="font-sans font-normal text-xs md:text-xs lg:text-[15px] leading-[100%] tracking-[-0.03em] text-white/40">Event Date</span>
                        <div className="flex items-center gap-1 font-syne font-bold text-sm md:text-sm lg:text-[20px] leading-[100%] tracking-[-0.03em] text-white">
                          <Calendar size={10} className="text-white/40 md:w-2.5 md:h-2.5 flex-shrink-0" />
                          <span className="truncate">
                            {idx === 0 ? "30 apr, 2025" : idx === 1 ? "30 may, 2025" : "3 jun, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
