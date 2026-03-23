import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface PersonnelFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  year: string;
  discipline: string;
  breed: string;
  age: string;
  sex: string;
  class: string;
}

const PersonnelFilters: React.FC<PersonnelFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    year: 'All',
    discipline: 'All',
    breed: 'All',
    age: 'All',
    sex: 'All',
    class: 'All'
  });

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const filterOptions = {
    year: ['All', '2025', '2024', '2023', '2022'],
    discipline: ['All', 'Flat', 'Jump'],
    breed: ['All', 'PUR SANG', 'ARABIAN'],
    age: ['All', '3', '4', '5', '6+'],
    sex: ['All', 'M', 'F', 'C', 'G', 'H'],
    class: ['All', 'Class 1', 'Class 2', 'Class 3']
  };

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    setDropdownOpen(null);
    // Don't call onFilterChange here - only when FILTER button is clicked
  };

  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const toggleDropdown = (filterType: string) => {
    setDropdownOpen(dropdownOpen === filterType ? null : filterType);
  };

  const renderFilterDropdown = (
    filterType: keyof FilterState,
    label: string,
    options: string[]
  ) => (
    <div className="relative flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
      <span className="text-[10px] md:text-xs font-bold text-[#0A0B14] uppercase tracking-wider">
        {label}
      </span>
      <div className="relative">
        <button
          onClick={() => toggleDropdown(filterType)}
          className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all min-w-[80px] justify-between"
        >
          {filters[filterType]} <ChevronDown size={12} className="md:w-[14px] md:h-[14px]" />
        </button>
        
        {dropdownOpen === filterType && (
          <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterChange(filterType, option)}
                className={`w-full px-4 py-2 text-left text-xs hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  filters[filterType] === option ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="pb-8 md:pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4">
          {renderFilterDropdown('year', 'Year', filterOptions.year)}
          {renderFilterDropdown('discipline', 'Discipline', filterOptions.discipline)}
          {renderFilterDropdown('breed', 'Breed', filterOptions.breed)}
          {renderFilterDropdown('age', 'Age', filterOptions.age)}
          {renderFilterDropdown('sex', 'Sex', filterOptions.sex)}
          {renderFilterDropdown('class', 'Class', filterOptions.class)}

          <button 
            onClick={handleApplyFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest flex items-center gap-2 md:gap-3 shadow-lg shadow-blue-600/20 transition-all md:ml-4 w-full md:w-auto justify-center"
          >
            FILTER <div className="bg-white/20 p-1 rounded-full"><ArrowRight size={10} className="md:w-3 md:h-3" /></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonnelFilters;
