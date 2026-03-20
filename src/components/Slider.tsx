import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {
  children: React.ReactNode;
  prevElClass: string;
  nextElClass: string;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };
  spaceBetween?: number;
  className?: string;
  navigationContainerClass?: string;
  navButtonClass?: string;
  variant?: "dark" | "light";
  onSwiper?: (swiper: any) => void;
  allowTouchMove?: boolean;
  centeredSlides?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  prevElClass,
  nextElClass,
  breakpoints,
  spaceBetween = 24,
  className = "",
  navigationContainerClass = "",
  navButtonClass = "",
  variant = "light",
  onSwiper,
  allowTouchMove = true,
  centeredSlides = false,
}) => {
  const isDark = variant === "dark";

  const defaultNavButtonClass = isDark
    ? "bg-black/80 backdrop-blur-md border border-white/20 hover:bg-black/90 text-white"
    : "border border-gray-200 hover:bg-gray-100 text-black";

  return (
    <div className={`w-full ${className}`}>
      {/* Navigation Buttons */}
      <div className={`flex gap-2 justify-end ${navigationContainerClass}`}>
        <button
          className={`${prevElClass} h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center transition-colors ${defaultNavButtonClass} ${navButtonClass}`}
        >
          <ArrowRight className="rotate-180" size={18} />
        </button>
        <button
          className={`${nextElClass} h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center transition-colors ${defaultNavButtonClass} ${navButtonClass}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevElClass}`,
          nextEl: `.${nextElClass}`,
        }}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        onSwiper={onSwiper}
        allowTouchMove={allowTouchMove}
        centeredSlides={centeredSlides}
        className="w-full"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
