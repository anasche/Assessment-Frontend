import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import EventCard from '@/components/EventCard/EventCard';

const RaceGrid: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  const years = [2024, 2025];
  const months = ["January", "February", "March", "April", "May", "June"];

  const races = [
    {
      id: 1,
      title: "Moroccan leg of the UAE President Cup Series",
      country: "Morocco 🇲🇦",
      date: "30 apr, 2025",
      location: "Casablanca, Morocco",
      year: 2025,
      month: "April",
      daysRemaining: 7,
      slug: "moroccan-leg"
    },
    {
      id: 2,
      title: "Saudi Arabian leg of the President Cup",
      country: "KSA 🇸🇦",
      date: "25 apr, 2025",
      location: "Riyadh, KSA",
      year: 2025,
      month: "April",
      daysRemaining: 2,
      slug: "saudi-leg"
    },
    {
      id: 3,
      title: "Oman International Derby",
      country: "Oman 🇴🇲",
      date: "20 apr, 2025",
      location: "Muscat, Oman",
      year: 2025,
      month: "April",
      daysRemaining: 0,
      slug: "oman-derby"
    },
    {
      id: 4,
      title: "Qatar Gold Cup",
      country: "Qatar 🇶🇦",
      date: "12 apr, 2025",
      location: "Doha, Qatar",
      year: 2025,
      month: "April",
      daysRemaining: 0,
      slug: "qatar-cup"
    },
    {
      id: 5,
      title: "French leg of the UAE President Cup Series",
      country: "France 🇫🇷",
      date: "15 may, 2025",
      location: "Paris, France",
      year: 2025,
      month: "May",
      daysRemaining: 22,
      slug: "french-leg"
    },
    {
      id: 6,
      title: "UAE National Day Cup",
      country: "UAE 🇦🇪",
      date: "03 jun, 2025",
      location: "Abu Dhabi, UAE",
      year: 2025,
      month: "June",
      daysRemaining: 40,
      slug: "uae-cup"
    },
    {
      id: 7,
      title: "Italian Invitational",
      country: "Italy 🇮🇹",
      date: "20 jan, 2024",
      location: "Rome, Italy",
      year: 2024,
      month: "January",
      daysRemaining: 0,
      slug: "italian-invitational"
    },
    {
      id: 8,
      title: "UK Championship",
      country: "UK 🇬🇧",
      date: "10 mar, 2024",
      location: "London, UK",
      year: 2024,
      month: "March",
      daysRemaining: 0,
      slug: "uk-championship"
    },
    {
      id: 9,
      title: "German Grand Prix",
      country: "Germany 🇩🇪",
      date: "28 feb, 2024",
      location: "Berlin, Germany",
      year: 2024,
      month: "February",
      daysRemaining: 0,
      slug: "german-gp"
    }
  ];

  const filteredRaces = races.filter(
    (race) => race.year === selectedYear && race.month === selectedMonth
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
    <section className="pt-8 md:pt-12 pb-12 md:pb-16 lg:pb-20 bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-[20px] max-w-[1688px]">
        {/* Filters */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base relative border border-gray-200 shadow-sm">
            
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
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[120px] overflow-hidden z-50">
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
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[150px] overflow-hidden z-50">
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

        {/* Grid */}
        {filteredRaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredRaces.map((race, idx) => (
              <EventCard 
                key={race.id}
                {...race}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16 md:py-20 lg:py-24">
            <div className="text-center">
              <p className="text-gray-400 text-lg md:text-xl font-medium">
                No races scheduled for this period
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Try selecting a different month or year
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RaceGrid;
