import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import FeaturedEvent from "@/assets/images/event-calendar/event-calendar.png";
import Title from "@/components/Title/Title";
import EventCard from "@/components/EventCard/EventCard";
import NoEvents from "./NoEvents";
import Slider from "@/components/Slider/Slider";

const EventsCalendar: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  const years = [2024, 2025];
  const months = ["January", "February", "March", "April", "May", "June"];

  const events = [
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "30 apr, 2025",
      location: "Casalanca, Morocco",
      country: "Morocco 🇲🇦",
      year: 2025,
      month: "April",
      daysRemaining: 7,
    },
    {
      title: "Saudi Arabian leg of the President Cup",
      date: "25 apr, 2025",
      location: "Riyadh, KSA",
      country: "KSA 🇸🇦",
      year: 2025,
      month: "April",
      daysRemaining: 2,
    },
    {
      title: "Oman International Derby",
      date: "20 apr, 2025",
      location: "Muscat, Oman",
      country: "Oman 🇴🇲",
      year: 2025,
      month: "April",
      daysRemaining: 0,
    },
    {
      title: "Qatar Gold Cup",
      date: "12 apr, 2025",
      location: "Doha, Qatar",
      country: "Qatar 🇶🇦",
      year: 2025,
      month: "April",
      daysRemaining: 0,
    },
    {
      title: "French leg of the UAE President Cup Series",
      date: "15 may, 2025",
      location: "Paris, France",
      country: "France 🇫🇷",
      year: 2025,
      month: "May",
      daysRemaining: 22,
    },
    {
      title: "UAE National Day Cup",
      date: "03 jun, 2025",
      location: "Abu Dhabi, UAE",
      country: "UAE 🇦🇪",
      year: 2025,
      month: "June",
      daysRemaining: 40,
    },
    {
      title: "Italian Invitational",
      date: "20 jan, 2024",
      location: "Rome, Italy",
      country: "Italy 🇮🇹",
      year: 2024,
      month: "January",
      daysRemaining: 0,
    },
    {
      title: "UK Championship",
      date: "10 mar, 2024",
      location: "London, UK",
      country: "UK 🇬🇧",
      year: 2024,
      month: "March",
      daysRemaining: 0,
    },
  ];

  const filteredEvents = events.filter(
    (event) => event.year === selectedYear && event.month === selectedMonth
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
      if (monthRef.current && !monthRef.current.contains(event.target as Node)) {
        setIsMonthDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white overflow-hidden relative z-20">
      <div className="w-full max-w-[1688px] mx-auto px-4 md:px-6 lg:px-[20px] py-12 md:py-16 lg:py-20">

        {/* Featured Image with everything overlaid - taller on mobile */}
        <div className="w-full relative rounded-[20px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-[1000px] xl:h-[1423px]">
          <img
            src={FeaturedEvent}
            alt="Calendar Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #3C3CB6 5%, #141473 35%, rgba(19, 19, 123, 0) 60%)" }} />

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
          <div className="absolute bottom-6 md:bottom-12 lg:bottom-24 xl:bottom-[80px] inset-x-0 px-4 md:px-6 lg:px-8">
            {/* Filters just above slider */}
            <div className="flex justify-center mb-3 md:mb-2 text-black">
              <div className="inline-flex items-center bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base relative">
                
                {/* Year Dropdown */}
                <div className="relative" ref={yearRef}>
                  <button 
                    onClick={() => {
                      setIsYearDropdownOpen(!isYearDropdownOpen);
                      setIsMonthDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 md:gap-2 lg:gap-3 text-[#666] font-medium transition-all hover:text-[#333] whitespace-nowrap"
                  >
                    <Calendar size={14} className="text-[#666] md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <span className="hidden sm:inline">{selectedYear}</span>
                    <span className="sm:hidden">{selectedYear.toString().slice(-2)}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isYearDropdownOpen ? 'rotate-180' : ''} text-[#666] md:w-3 md:h-3 lg:w-4 lg:h-4 flex-shrink-0`} />
                  </button>
                  
                  {isYearDropdownOpen && (
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[120px] overflow-hidden z-50">
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => {
                            setSelectedYear(y);
                            setIsYearDropdownOpen(false);
                          }}
                          className={`w-full px-6 py-2.5 text-left text-sm font-bold transition-colors ${
                            selectedYear === y ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-px h-3 md:h-4 lg:h-6 bg-gray-300 flex-shrink-0"></div>
                
                {/* Month Dropdown */}
                <div className="relative" ref={monthRef}>
                  <button 
                    onClick={() => {
                      setIsMonthDropdownOpen(!isMonthDropdownOpen);
                      setIsYearDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 md:gap-2 lg:gap-3 text-[#666] font-medium transition-all hover:text-[#333] whitespace-nowrap"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#666] md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="hidden sm:inline">{selectedMonth}</span>
                    <span className="sm:hidden">{selectedMonth.slice(0, 3)}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isMonthDropdownOpen ? 'rotate-180' : ''} text-[#666] md:w-3 md:h-3 lg:w-4 lg:h-4 flex-shrink-0`} />
                  </button>

                  {isMonthDropdownOpen && (
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[150px] overflow-hidden z-50">
                      <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
                        {months.map((m) => (
                          <button
                            key={m}
                            onClick={() => {
                              setSelectedMonth(m);
                              setIsMonthDropdownOpen(false);
                            }}
                            className={`w-full px-6 py-2.5 text-left text-xs md:text-sm font-bold transition-colors ${
                              selectedMonth === m ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Navigation Buttons Area - Fixed height to avoid jump */}
            <Slider
              key={`${selectedYear}-${selectedMonth}-${filteredEvents.length === 0}`}
              prevElClass="events-prev"
              nextElClass="events-next"
              variant="dark"
              navigationContainerClass={`mb-3 md:mb-6 ${filteredEvents.length > 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              navButtonClass="!h-8 !w-8 md:!h-9 md:!w-9 !px-0"
              spaceBetween={12}
              centeredSlides={filteredEvents.length === 0}
              allowTouchMove={filteredEvents.length > 1}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 12 },
                480: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.5, spaceBetween: 16 },
                768: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 16 },
                1280: { slidesPerView: 3, spaceBetween: 16 },
              }}
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, idx) => (
                  <EventCard key={idx} {...event} />
                ))
              ) : (
                <NoEvents />
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
