import React, { useState, useEffect } from "react";
import Races1 from "@/assets/images/races/races1.png";
import { EventCountryIcon, EventDateIcon } from "@/components/icons/PersonnelIcons";

const UpcomingRace: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 33,
    hours: 18,
    minutes: 30,
    seconds: 55,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pb-8 md:pb-12 bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-[20px] max-w-[1688px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Upcoming Event Card */}
          <div className="flex flex-col rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden w-full h-auto min-h-[445px] xl:h-[445px] text-white shadow-2xl">
            {/* Header */}
            <div className="bg-[#151585] py-6 px-6 md:px-8 lg:px-10 text-center z-10 relative">
              <h3 className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold mb-2">
                Upcoming Event
              </h3>
              <p className="text-white/70 text-sm md:text-base font-sans font-light">
                Don't miss what's coming up in the President's Cup lineup
              </p>
            </div>

            {/* Body */}
            <div className="bg-[#000057] flex-1 relative p-6 md:p-8 lg:p-10 flex flex-col justify-end overflow-hidden">
              {/* Horse Image - positioned only on the right half */}
              <img
                src={Races1}
                alt="Race Horse"
                className="absolute right-0 top-0 w-1/2 h-full object-cover object-left z-0"
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000057] via-[#000057]/60 to-transparent z-5"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#000057] via-[#000057]/80 to-transparent z-5"></div>

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-2 md:pb-6 w-full">
                {/* Event Country */}
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5 min-w-0">
                  <div className="flex-shrink-0 rounded-[15px] overflow-hidden">
                    <EventCountryIcon
                      size={30}
                      className="text-white w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 md:gap-1 text-left min-w-0">
                    <span className="text-white/60 text-[10px] md:text-xs tracking-widest font-sans">
                      Event Country
                    </span>
                    <span className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold flex items-center gap-2 whitespace-nowrap">
                      Morocco{" "}
                      <span className="text-xl md:text-2xl lg:text-3xl">
                        🇲🇦
                      </span>
                    </span>
                  </div>
                </div>

                {/* Event Date */}
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5 min-w-0">
                  <div className="flex-shrink-0 rounded-[15px] overflow-hidden">
                    <EventDateIcon
                      size={30}
                      className="text-white w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 md:gap-1 text-left min-w-0">
                    <span className="text-white/60 text-[10px] md:text-xs tracking-widest font-sans">
                      Event Date
                    </span>
                    <span className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold whitespace-nowrap">
                      1 may, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Countdown Card */}
          <div className="flex flex-col rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden w-full h-auto min-h-[445px] xl:h-[445px] text-white shadow-2xl border border-white/5">
            {/* Header */}
            <div className="bg-[#151585] py-6 px-6 md:px-8 lg:px-10 text-center z-10 relative">
              <h3 className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold mb-2">
                Event Countdown
              </h3>
              <p className="text-white/70 text-sm md:text-base font-sans font-light">
                Mark your calendar: days, hours, and minutes to the grand start
              </p>
            </div>

            {/* Body */}
            <div className="bg-[#000057] flex-1 relative p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[150px] md:w-[250px] lg:w-[300px] h-[150px] md:h-[250px] lg:h-[300px] bg-blue-800/10 rounded-full blur-[50px] md:blur-[70px] lg:blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto pb-4 md:pb-6">
                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 md:gap-4 lg:gap-6 w-full mb-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="bg-[#151585] rounded-xl md:rounded-[20px] w-full aspect-[1/1.1] flex items-center justify-center mb-3 border border-white/5">
                        <span className="text-3xl md:text-4xl lg:text-[44px] font-syne font-bold text-white leading-none">
                          {item.value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-[10px] md:text-sm font-sans text-white font-normal">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full relative h-[1px] bg-white/10 mt-2">
                  <div className="absolute left-0 top-0 w-[40%] h-full bg-blue-600"></div>
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
