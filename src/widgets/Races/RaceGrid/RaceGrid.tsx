import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import EventCard from '@/components/EventCard';
import EventCardSkeleton from '@/components/EventCardSkeleton';
import { useUpcomingEvents } from '@/hooks/useApi';
import { getDaysRemaining, formatEventDate, getMonthNumber } from '@/utils/raceHelpers';

const RaceGrid: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  const years = [2024, 2025, 2026];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Get month number for API call
  const monthNumber = getMonthNumber(selectedMonth);
  
  // Fetch upcoming events from API
  const { data: eventsResponse, isLoading, error, isError } = useUpcomingEvents(monthNumber, selectedYear);

  // Transform API data to match EventCard props
  const transformedRaces = eventsResponse?.data?.data?.map(event => ({
    title: event.name,
    date: formatEventDate(event.localStartTime),
    country: event.country?.name,
    daysRemaining: getDaysRemaining(event.localStartTime),
    slug: event._id // Use event ID as slug for navigation
  })) || [];

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
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <EventCardSkeleton key={idx} />
            ))}
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 md:py-20 lg:py-24">
            <div className="text-center">
              <p className="text-red-600 text-lg md:text-xl font-medium">
                Failed to load races
              </p>
              <p className="text-red-400 text-sm md:text-base mt-2">
                {error?.message}
              </p>
            </div>
          </div>
        ) : transformedRaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {transformedRaces.map((race, idx) => (
              <EventCard 
                key={race.slug || idx}
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
