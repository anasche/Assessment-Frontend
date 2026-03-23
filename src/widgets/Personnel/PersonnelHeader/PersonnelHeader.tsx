import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PersonnelHeaderProps {
  title: string;
  placeholder: string;
  onSearch?: (searchTerm: string) => void;
}

const PersonnelHeader: React.FC<PersonnelHeaderProps> = ({
  title,
  placeholder,
  onSearch,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize search term from URL params on component mount
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search') || '';
    setSearchTerm(urlSearchTerm);
    if (urlSearchTerm && onSearch) {
      onSearch(urlSearchTerm);
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    // Update URL search params
    const newSearchParams = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      newSearchParams.set('search', searchTerm.trim());
    } else {
      newSearchParams.delete('search');
    }
    setSearchParams(newSearchParams);

    // Call the onSearch callback
    if (onSearch) {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchClick();
    }
  };

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-syne font-medium text-[40px] leading-[49px] tracking-[-0.03em] text-[#0A0B14]">
          {title}
        </h1>
        <p className="font-sans font-normal text-[15px] leading-[20px] tracking-[-0.03em] text-[#000000] max-w-4xl mx-auto mb-8 md:mb-12">
          Here you will find the {title.toLowerCase()}' honours list.
        </p>

        <div className="max-w-sm md:max-w-xl mx-auto relative group">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all pr-12 md:pr-14 shadow-sm"
          />
          <button
            onClick={handleSearchClick}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
          >
            <Search
              size={16}
              className="md:w-[18px] md:h-[18px]"
            />
          </button>
        </div>

        <p className="text-[15px] font-normal text-black tracking-[-0.03em] leading-[100%] text-center mt-6 md:mt-8" style={{ fontFamily: 'DM Sans' }}>
          Top {title.toLowerCase()}
        </p>
      </div>
    </section>
  );
};

export default PersonnelHeader;
