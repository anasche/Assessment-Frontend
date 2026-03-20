import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
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
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
            <Link 
              key={idx} 
              to={`/races/${race.slug}`}
              className="group relative bg-[#0A1045] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-4 md:p-6 lg:p-8 min-h-[200px] md:min-h-[220px] lg:h-[240px] flex flex-col justify-between overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-blue-950/20"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[120px] md:w-[160px] lg:w-[200px] h-[120px] md:h-[160px] lg:h-[200px] bg-blue-600/5 rounded-full blur-[40px] md:blur-[50px] lg:blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/10 transition-colors"></div>

              <div>
                <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-3 md:px-4 py-1 mb-4 md:mb-6">
                   <span className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                     {race.daysRemaining} Days remaining
                   </span>
                </div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight pr-2 md:pr-4 line-clamp-3">
                  {race.title}
                </h4>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-4 md:mt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Event Country</span>
                  <div className="flex items-center gap-1.5 md:gap-2 text-white font-bold text-xs md:text-sm">
                    {race.country} <span className="text-sm md:text-base">{race.flag}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:ml-4 sm:border-l sm:border-white/10 sm:pl-4 md:pl-6">
                  <span className="text-[8px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Event Date</span>
                  <div className="text-white font-bold text-xs md:text-sm italic uppercase tracking-tighter">
                    {race.date.split(',')[0]} <span className="text-white/40 italic">, {race.date.split(',')[1]}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceGrid;
