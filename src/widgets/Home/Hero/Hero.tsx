import React from "react";
import HeroBanner from "@/assets/images/banner/hero-banner.png";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Marquee from "@/components/Marquee";
import { Play } from "lucide-react";

// Import sponsor images
import sponsor1 from "@/assets/images/sponsors/sponsor-1.png";
import sponsor2 from "@/assets/images/sponsors/sponsor-2.png";
import sponsor3 from "@/assets/images/sponsors/sponsor-3.png";
import sponsor4 from "@/assets/images/sponsors/sponsor-4.png";
import sponsor5 from "@/assets/images/sponsors/sponsor-5.png";
import sponsor6 from "@/assets/images/sponsors/sponsor-6.png";
import sponsor7 from "@/assets/images/sponsors/sponsor-7.png";
import sponsor8 from "@/assets/images/sponsors/sponsor-8.png";
import sponsor9 from "@/assets/images/sponsors/sponsor-9.png";
import ExploreLink from "@/components/ExploreLink";
import { useHero } from "./useHero";

const Hero: React.FC = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: sponsor1 },
    { name: "Sponsor 2", logo: sponsor2 },
    { name: "Sponsor 3", logo: sponsor3 },
    { name: "Sponsor 4", logo: sponsor4 },
    { name: "Sponsor 5", logo: sponsor5 },
    { name: "Sponsor 6", logo: sponsor6 },
    { name: "Sponsor 7", logo: sponsor7 },
    { name: "Sponsor 8", logo: sponsor8 },
    { name: "Sponsor 9", logo: sponsor9 },
  ];
const { main } = useHero();
  return (
    <section ref={main} className="relative w-full mx-auto h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 cover">
        <img
          src={HeroBanner}
          alt="Horse Racing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>
      </div>

      {/* Hero Content — responsive dimensions and positioning */}
      <div className="relative xl:absolute bottom-0 xl:left-1/2 xl:-translate-x-1/2 w-full z-10 px-6 pb-[200px] flex flex-col items-center justify-center gap-6 xl:gap-[19px] text-center text-white">
        <Title as="h1" className="whitespace-nowrap fade">
          Tradition in Every Trot
        </Title>
        <p className="font-medium fade text-[17px] leading-none tracking-tightest text-white max-w-sm md:max-w-xl">
          All the latest info about Moroccan leg of the series
        </p>
        <div className="flex justify-center mt-2 xl:mt-0 fade">
          <ExploreLink to="/live-stream">FREE LIVE STREAM</ExploreLink>
          {/* <Button className="uppercase shadow-2xl shadow-blue-500/20">
            FREE LIVE STREAM
            <div className="bg-white/20 p-1 rounded-full">
              <Play size={14} fill="white" />
            </div>
          </Button> */}
        </div>
      </div>

      {/* Sponsors Bar — responsive height and scrolling */}
      <div className="relative fade z-10 bg-[linear-gradient(180deg,rgba(21,21,133,0.04)_0%,#161687_100%)] h-24 xl:h-[141px] flex items-center shrink-0">
        <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px] overflow-hidden">
          <Marquee speed={25}>
            <div className="flex items-center gap-8 md:gap-12 xl:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-8 md:h-10 xl:h-12 flex items-center justify-center"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
