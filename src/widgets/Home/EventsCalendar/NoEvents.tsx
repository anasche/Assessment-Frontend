import React from "react";

const NoEvents: React.FC = () => {
  return (
    <div className="bg-[#05061F]/80 backdrop-blur-md border border-white/10 rounded-[15px] md:rounded-[20px] lg:rounded-[30px] p-4 md:p-4 lg:p-5 flex flex-col items-center justify-center mb-6 md:mb-8 lg:mb-[50px] min-h-[200px] md:min-h-[180px] lg:min-h-[208px] w-full max-w-[350px] md:max-w-sm text-white/40 italic text-center mx-auto">
      No events scheduled for this period
    </div>
  );
};

export default NoEvents;
