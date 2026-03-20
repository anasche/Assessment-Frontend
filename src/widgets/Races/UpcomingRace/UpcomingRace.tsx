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
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
              <div>
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Upcoming Event</h3>
                <p className="text-white/70 text-xs md:text-sm">Don't miss what's coming up in the President's Cup lineup</p>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-12">
                   <div>
                    <div className="flex items-center gap-2 text-white/50 text-[9px] md:text-[10px] uppercase tracking-widest mb-2 font-bold">
                       <MapPin size={10} className="text-blue-400 md:w-3 md:h-3" /> EVENT COUNTRY
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-2 md:gap-3">
                      Morocco <span className="text-lg md:text-xl lg:text-2xl">🇲🇦</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white/50 text-[9px] md:text-[10px] uppercase tracking-widest mb-2 font-bold">
                       <Calendar size={10} className="text-blue-400 md:w-3 md:h-3" /> EVENT DATE
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold uppercase italic tracking-tighter">
                      1 may, <span className="opacity-60">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Countdown Card */}
          <div className="rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-[#0A1045] p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[350px] lg:h-[400px] text-white shadow-2xl shadow-blue-900/10 border border-white/5 relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[150px] md:w-[250px] lg:w-[300px] h-[150px] md:h-[250px] lg:h-[300px] bg-blue-800/10 rounded-full blur-[50px] md:blur-[70px] lg:blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

             <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Event Countdown</h3>
              <p className="text-white/50 text-xs md:text-sm">Mark your calendar: days, hours, and minutes to the grand start</p>
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
               {[
                 { label: 'Days', value: timeLeft.days },
                 { label: 'Hours', value: timeLeft.hours },
                 { label: 'Minutes', value: timeLeft.minutes },
                 { label: 'Seconds', value: timeLeft.seconds },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl w-full aspect-square flex items-center justify-center mb-2 md:mb-3 border border-white/10 group-hover:border-blue-500 transition-colors">
                       <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
                         {item.value.toString().padStart(2, '0')}
                       </span>
                    </div>
                    <span className="text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
            
            <div className="relative z-10 w-full h-0.5 bg-white/5 mt-3 md:mt-4 flex items-center">
               <div className="w-[70%] h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
               <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] -ml-0.5 md:-ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
