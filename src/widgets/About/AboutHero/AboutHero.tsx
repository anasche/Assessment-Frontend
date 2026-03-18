import React from "react";
import About1 from "@/assets/images/about/about-1.jpg";
import Title from "@/components/Title";

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* First Section - Text Left, Image Right (Overlapped) */}
        <div className="relative mb-16 lg:mb-32">
          {/* Mobile/Tablet Layout */}
          <div className="block xl:hidden">
            <div className="bg-gray-100 rounded-[30px] p-6 md:p-8 mb-8">
              <Title dark={true} className="mb-6">
                UAE <br /> President Cup
              </Title>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  The series of races for the UAE President's Cup for Purebred
                  Arabian Horses began in 1994, envisioned by the late founder,
                  Sheikh Zayed bin Sultan Al Nahyan, may Allah rest his soul.
                </p>
                <p>
                  The aim was to highlight the importance of purebred Arabian
                  horses and to elevate their status while celebrating the
                  heritage of the Emirates on a global scale.
                </p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden shadow-lg h-48 md:h-64 lg:h-80">
              <img
                src={About1}
                alt="Horse racing at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Layout (XL and above) */}
          <div className="hidden xl:block h-[704px]">
            {/* Text Container */}
            <div 
              className="absolute z-10 bg-gray-100 rounded-[50px] flex flex-col justify-center"
              style={{ 
                left: "22px", 
                top: "0px",
                width: "min(994px, 60vw)", 
                height: "704px",
                padding: "48px",
                paddingRight: "min(200px, 12vw)"
              }}
            >
              <Title dark={true} className="mb-8">
                UAE <br /> President Cup
              </Title>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  The series of races for the UAE President's Cup for Purebred
                  Arabian Horses began in 1994, envisioned by the late founder,
                  Sheikh Zayed bin Sultan Al Nahyan, may Allah rest his soul.
                </p>
                <p>
                  The aim was to highlight the importance of purebred Arabian
                  horses and to elevate their status while celebrating the
                  heritage of the Emirates on a global scale.
                </p>
              </div>
            </div>
            
            {/* Image Container */}
            <div 
              className="absolute z-20 rounded-[50px] overflow-hidden shadow-lg"
              style={{ 
                right: "22px", 
                top: "0px",
                width: "min(807px, 45vw)", 
                height: "704px"
              }}
            >
              <img
                src={About1}
                alt="Horse racing at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Section - Image Left, Text Right (Overlapped) */}
        <div className="relative">
          {/* Mobile/Tablet Layout */}
          <div className="block xl:hidden">
            <div className="bg-gray-100 rounded-[30px] p-6 md:p-8 mb-8">
              <Title dark={true} className="mb-6">
                UAE <br /> President Cup
              </Title>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Today, the prestigious cup has become one of the most important and historic classic races in the world, attracting the elite of horse owners.
                </p>
                <p>
                  In this challenge for titles, the best horses are supervised by the finest trainers and jockeys, and the races are held at some of the most historic tracks around the world.
                </p>
                <p>
                  Over 31 years, the series has made a notable international impact, highlighting the UAE's rich equestrian legacy and its pivotal role in preserving the journey of the Arabian horse.
                </p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden shadow-lg h-48 md:h-64 lg:h-80">
              <img
                src={About1}
                alt="Horse racing at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Layout (XL and above) */}
          <div className="hidden xl:block h-[704px]">
            {/* Image Container */}
            <div 
              className="absolute z-20 rounded-[50px] overflow-hidden shadow-lg"
              style={{ 
                left: "22px", 
                top: "0px",
                width: "min(807px, 45vw)", 
                height: "704px"
              }}
            >
              <img
                src={About1}
                alt="Horse racing at sunset"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Container */}
            <div 
              className="absolute z-10 bg-gray-100 rounded-[50px] flex flex-col justify-center"
              style={{ 
                right: "22px", 
                top: "0px",
                width: "min(994px, 60vw)", 
                height: "704px",
                padding: "48px",
                paddingLeft: "min(270px, 15vw)"
              }}
            >
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Today, the prestigious cup has become one of the most important and historic classic races in the world, attracting the elite of horse owners.
                </p>
                <p>
                  In this challenge for titles, the best horses are supervised by the finest trainers and jockeys, and the races are held at some of the most historic tracks around the world. The series is supported and guided by His His Highness Sheikh Mansour Bin Zayed Al Nahyan, UAE Vice President, Deputy Prime Minister and President of the Presidential Court, reflecting his commitment to developing the Arabian horse racing industry and supporting Arabian horse owners and breeders worldwide.
                </p>
                <p>
                  Over 31 years, the series has made a notable international impact, highlighting the UAE's rich equestrian legacy and its pivotal role in preserving the journey of the Arabian horse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;