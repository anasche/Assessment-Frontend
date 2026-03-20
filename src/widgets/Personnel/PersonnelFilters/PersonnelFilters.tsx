import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const PersonnelFilters: React.FC = () => {
  return (
    <section className="pb-8 md:pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
            <span className="text-[10px] md:text-xs font-bold text-[#0A0B14] uppercase tracking-wider">Year</span>
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all">
              2025 <ChevronDown size={12} className="md:w-[14px] md:h-[14px]" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
            <span className="text-[10px] md:text-xs font-bold text-[#0A0B14] uppercase tracking-wider">Discipline</span>
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all">
              Flat <ChevronDown size={12} className="md:w-[14px] md:h-[14px]" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
            <span className="text-[10px] md:text-xs font-bold text-[#0A0B14] uppercase tracking-wider">Racecourse</span>
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all">
              All <ChevronDown size={12} className="md:w-[14px] md:h-[14px]" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
            <span className="text-[10px] md:text-xs font-bold text-[#0A0B14] uppercase tracking-wider">Class</span>
            <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all">
              All <ChevronDown size={12} className="md:w-[14px] md:h-[14px]" />
            </button>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest flex items-center gap-2 md:gap-3 shadow-lg shadow-blue-600/20 transition-all md:ml-4 w-full md:w-auto justify-center">
            FILTER <div className="bg-white/20 p-1 rounded-full"><ArrowRight size={10} className="md:w-3 md:h-3" /></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonnelFilters;
