import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const UpcomingRace: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 33,
    hours: 18,
    minutes: 30,
    seconds: 55
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
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
          <div className="relative rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-[400px] text-white group cursor-pointer shadow-2xl shadow-blue-900/10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800" 
                alt="Race background" 
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 h-full p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div className="text-center pt-2 md:pt-4">
                <h3 className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold mb-2">Upcoming Event</h3>
                <p className="text-white/70 text-sm md:text-base font-sans font-light">Don't miss what's coming up in the President's Cup lineup</p>
              </div>

              <div className="flex justify-between items-end pb-2 md:pb-4 w-full">
                {/* Event Country */}
                <div>
                  <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-widest mb-1.5 font-sans">
                     <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                     EVENT COUNTRY
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold flex items-center gap-2 md:gap-4">
                    Morocco <span className="text-xl md:text-2xl lg:text-3xl">🇲🇦</span>
                  </div>
                </div>

                {/* Event Date */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-widest mb-1.5 font-sans">
                     <Calendar size={14} className="text-white/50" /> EVENT DATE
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold font-normal">
                    1 may, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Countdown Card */}
          <div className="rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-[#000057] p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[350px] lg:h-[400px] text-white shadow-2xl border border-white/5 relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[150px] md:w-[250px] lg:w-[300px] h-[150px] md:h-[250px] lg:h-[300px] bg-blue-800/10 rounded-full blur-[50px] md:blur-[70px] lg:blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

             <div className="relative z-10 text-center pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl lg:text-[40px] font-syne font-bold mb-2">Event Countdown</h3>
              <p className="text-white/70 text-sm md:text-base font-sans font-light">Mark your calendar: days, hours, and minutes to the grand start</p>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto pb-4 md:pb-6">
              <div className="flex justify-center gap-3 md:gap-4 lg:gap-6 w-full mb-6">
                 {[
                   { label: 'Days', value: timeLeft.days },
                   { label: 'Hours', value: timeLeft.hours },
                   { label: 'Minutes', value: timeLeft.minutes },
                   { label: 'Seconds', value: timeLeft.seconds },
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center flex-1">
                      <div className="bg-[#1C2366] rounded-xl md:rounded-[20px] w-full aspect-[4/5] flex items-center justify-center mb-3 border border-white/5">
                         <span className="text-3xl md:text-4xl lg:text-[50px] font-syne font-bold text-white leading-none">
                           {item.value.toString().padStart(2, '0')}
                         </span>
                      </div>
                      <span className="text-[10px] md:text-sm font-sans text-white font-normal">{item.label}</span>
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
    </section>
  );
};

export default UpcomingRace;
