import React from "react";
import ExploreLink from "@/components/ExploreLink";
import { MapPin, Calendar } from "lucide-react";

const RaceBanner: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative h-[480px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl shadow-blue-900/10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=2000"
              alt="Race Stage"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 h-full p-12 md:p-20 flex flex-col justify-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              Morocco <br /> Stage<span className="text-blue-500">2026</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl font-light leading-relaxed">
              Witness the excellence of Arabian horse racing at Anfa Racecourse,
              Casablanca.
            </p>

            <div className="flex flex-wrap items-center gap-10 mb-12">
              <div>
                <div className="flex items-center gap-2 text-white/50 text-[10px] tracking-widest mb-2 font-bold">
                  <Calendar size={12} className="text-blue-400" /> Event Date
                </div>
                <div className="text-2xl font-bold italic tracking-tighter">
                  30 OCT, <span className="opacity-40">2023</span>
                </div>
              </div>
              <div className="border-l border-white/10 pl-10">
                <div className="flex items-center gap-2 text-white/50 text-[10px] tracking-widest mb-2 font-bold">
                  <MapPin size={12} className="text-blue-400" /> Event Country
                </div>
                <div className="text-2xl font-bold italic tracking-tighter">
                  MOROCCO <span className="not-italic">🇲🇦</span>
                </div>
              </div>
            </div>

            <div className="flex">
              <ExploreLink to="#">BOOK EXPERIENCE</ExploreLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceBanner;
