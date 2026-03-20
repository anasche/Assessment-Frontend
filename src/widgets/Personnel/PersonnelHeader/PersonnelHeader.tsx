import React from 'react';
import Title from '@/components/Title';
import { Search } from 'lucide-react';

interface PersonnelHeaderProps {
  title: string;
  placeholder: string;
}

const PersonnelHeader: React.FC<PersonnelHeaderProps> = ({ title, placeholder }) => {
  return (
    <section style={{ paddingTop: '93px' }} className="pb-6 md:pb-8 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <Title as="h1" dark={true} className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </Title>
        <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-12">
          Here you will find the {title.toLowerCase()}' honours list.
        </p>
        
        <div className="max-w-sm md:max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder={placeholder}
            className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all pl-12 md:pl-14 shadow-sm"
          />
          <Search size={16} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500 transition-colors md:w-[18px] md:h-[18px]" />
        </div>
        
        <p className="text-[9px] md:text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-6 md:mt-8">
          Top {title.toLowerCase()}
        </p>
      </div>
    </section>
  );
};

export default PersonnelHeader;
