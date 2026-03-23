import React from "react";

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "🏇" },
    { name: "Sponsor 2", logo: "🐎" },
    { name: "Sponsor 3", logo: "🏆" },
    { name: "Sponsor 4", logo: "🇦🇪" },
    { name: "Sponsor 5", logo: "📜" },
    { name: "Sponsor 6", logo: "🏰" },
  ];

  return (
    <section className="bg-blue-900 py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group text-2xl font-bold italic tracking-wider"
            >
              <span className="grayscale group-hover:grayscale-0 transition-opacity">
                {sponsor.logo}
              </span>
              <span className="text-sm tracking-[0.2em]">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
