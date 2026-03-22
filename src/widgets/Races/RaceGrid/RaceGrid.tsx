import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import EventCard from '@/components/EventCard';
import { Link } from 'react-router-dom';

const RaceGrid: React.FC = () => {
  const races = Array(9).fill({
    id: 1,
    title: "Moroccan leg of the UAE President Cup Series",
    country: "Morocco",
    flag: "🇲🇦",
    date: "30 apr, 2025",
    daysRemaining: 7,
    slug: "moroccan-leg"
  });

  return (
    <section className="pt-8 md:pt-12 pb-12 md:pb-16 lg:pb-20 bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-[20px] max-w-[1688px]">
        {/* Filters */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex bg-gray-50 p-1.5 md:p-2 rounded-full border border-gray-100 shadow-sm gap-1 md:gap-2 w-full max-w-md md:max-w-none md:w-auto">
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-white rounded-full text-[10px] md:text-xs font-bold tracking-widest text-gray-400 hover:text-gray-900 shadow-sm transition-all border border-gray-100 flex-1 md:flex-none justify-center">
               <Calendar size={12} className="md:w-3.5 md:h-3.5" /> 
               <span className="hidden sm:inline">SEASON</span>
               <span className="sm:hidden">S</span>
               <ChevronDown size={12} className="md:w-3.5 md:h-3.5" />
            </button>
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-white rounded-full text-[10px] md:text-xs font-bold tracking-widest text-gray-400 hover:text-gray-900 shadow-sm transition-all border border-gray-100 flex-1 md:flex-none justify-center">
               <MapPin size={12} className="md:w-3.5 md:h-3.5" /> 
               <span className="hidden sm:inline">EVENT</span>
               <span className="sm:hidden">E</span>
               <ChevronDown size={12} className="md:w-3.5 md:h-3.5" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {races.map((race, idx) => (
            <EventCard 
              key={idx}
              {...race}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceGrid;
