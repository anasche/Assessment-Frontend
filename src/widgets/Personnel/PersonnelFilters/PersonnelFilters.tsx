import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "@/components/Button";

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

const PersonnelFilters: React.FC<PersonnelFiltersProps> = ({
  onFilterChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    year: "All",
    discipline: "All",
    breed: "All",
    age: "All",
    sex: "All",
    class: "All",
  });

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Initialize filters from URL params on component mount
  useEffect(() => {
    const urlFilters: FilterState = {
      year: searchParams.get("year") || "All",
      discipline: searchParams.get("discipline") || "All",
      breed: searchParams.get("breed") || "All",
      age: searchParams.get("age") || "All",
      sex: searchParams.get("sex") || "All",
      class: searchParams.get("class") || "All",
    };
    setFilters(urlFilters);

    // Call onFilterChange if any filters are set in URL
    const hasActiveFilters = Object.values(urlFilters).some(
      (value) => value !== "All",
    );
    if (hasActiveFilters && onFilterChange) {
      onFilterChange(urlFilters);
    }
  }, []);

  const filterOptions = {
    year: ["All", "2025", "2024", "2023", "2022"],
    discipline: ["All", "Flat", "Jump"],
    breed: ["All", "PUR SANG", "ARABIAN"],
    age: ["All", "3", "4", "5", "6+"],
    sex: ["All", "M", "F", "C", "G", "H"],
    class: ["All", "Class 1", "Class 2", "Class 3"],
  };

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    setDropdownOpen(null);
    // Don't call onFilterChange here - only when FILTER button is clicked
  };

  const handleApplyFilters = () => {
    // Update URL search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Set filter params, remove if 'All'
    Object.entries(filters).forEach(([key, value]) => {
      if (value === "All") {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
    });

    setSearchParams(newSearchParams);

    // Call the callback
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
    options: string[],
  ) => (
    <div className="relative flex flex-col md:flex-row items-center gap-1 md:gap-2 w-full md:w-auto">
      <span className="text-[9px] md:text-xs font-bold text-[#0A0B14] tracking-wider text-center md:whitespace-nowrap">
        {label}
      </span>
      <div className="relative w-full md:w-auto">
        <button
          onClick={() => toggleDropdown(filterType)}
          className="flex items-center justify-between gap-1 md:gap-3 px-2 md:px-6 py-2 md:py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[9px] md:text-xs font-bold text-gray-500 hover:text-gray-900 transition-all min-w-[70px] md:min-w-[80px] w-full md:w-auto"
        >
          <span className="truncate">{filters[filterType]}</span>
          <ChevronDown
            size={10}
            className="md:w-[14px] md:h-[14px] flex-shrink-0"
          />
        </button>

        {dropdownOpen === filterType && (
          <div className="absolute top-full mt-2 left-0 right-0 md:left-0 md:right-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterChange(filterType, option)}
                className={`w-full px-4 py-2 text-left text-xs hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  filters[filterType] === option
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-gray-700"
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
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* First Row - Year, Discipline, Breed */}
          <div className="grid grid-cols-3 gap-2">
            {renderFilterDropdown("year", "Year", filterOptions.year)}
            {renderFilterDropdown(
              "discipline",
              "Discipline",
              filterOptions.discipline,
            )}
            {renderFilterDropdown("breed", "Breed", filterOptions.breed)}
          </div>

          {/* Second Row - Age, Sex, Class */}
          <div className="grid grid-cols-3 gap-2">
            {renderFilterDropdown("age", "Age", filterOptions.age)}
            {renderFilterDropdown("sex", "Sex", filterOptions.sex)}
            {renderFilterDropdown("class", "Class", filterOptions.class)}
          </div>

          {/* Filter Button */}
          <Button
            onClick={handleApplyFilters}
            variant="primary"
            size="md"
            fullWidth={true}
            className="!h-12 !text-xs !font-bold !tracking-widest shadow-lg shadow-blue-600/20"
          >
            FILTER{" "}
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowRight size={12} />
            </div>
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-wrap items-center justify-center gap-4">
          {renderFilterDropdown("year", "Year", filterOptions.year)}
          {renderFilterDropdown(
            "discipline",
            "Discipline",
            filterOptions.discipline,
          )}
          {renderFilterDropdown("breed", "Breed", filterOptions.breed)}
          {renderFilterDropdown("age", "Age", filterOptions.age)}
          {renderFilterDropdown("sex", "Sex", filterOptions.sex)}
          {renderFilterDropdown("class", "Class", filterOptions.class)}

          <Button
            onClick={handleApplyFilters}
            variant="primary"
            size="md"
            className="!h-10 !px-8 !text-xs !font-bold !tracking-widest shadow-lg shadow-blue-600/20 ml-4"
          >
            FILTER{" "}
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowRight size={10} className="w-3 h-3" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonnelFilters;
