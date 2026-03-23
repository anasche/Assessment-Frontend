import React, { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Gallery1 from "@/assets/images/gallery/image1.jpg";
import Gallery2 from "@/assets/images/gallery/image2.jpg";
import Gallery3 from "@/assets/images/gallery/image3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { id: number; src: string }[];
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  onClose,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col pt-20 pb-10">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors bg-white/10 p-4 rounded-full backdrop-blur-md"
      >
        <X size={32} />
      </button>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col max-w-7xl mx-auto w-full px-4 overflow-hidden justify-between">
        {/* Main Swiper */}
        <div className="flex-grow flex items-center justify-center min-h-0">
          <Swiper
            modules={[Thumbs, Keyboard, A11y]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            keyboard={{ enabled: true }}
            className="w-full h-full max-h-[70vh]"
          >
            {images.map((img) => (
              <SwiperSlide
                key={img.id}
                className="flex items-center justify-center"
              >
                <img
                  src={img.src}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Swiper */}
        <div className="mt-8 h-32 flex-shrink-0">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            spaceBetween={16}
            watchSlidesProgress
            className="h-full"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id} className="h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden cursor-pointer ring-offset-4 ring-offset-black transition-all duration-300 [.swiper-slide-thumb-active_&]:ring-4 [.swiper-slide-thumb-active_&]:ring-blue-500 opacity-40 [.swiper-slide-thumb-active_&]:opacity-100">
                  <img
                    src={img.src}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;

const images = [
  { id: 1, src: Gallery1 },
  { id: 2, src: Gallery2 },
  { id: 3, src: Gallery3 },
  { id: 4, src: Gallery1 },
  { id: 5, src: Gallery2 },
  { id: 6, src: Gallery3 },
];
