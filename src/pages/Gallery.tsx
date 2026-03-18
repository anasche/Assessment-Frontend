import React, { useState, useEffect } from 'react';
import GalleryHeader from '@/widgets/Gallery/GalleryHeader';
import GalleryGrid from '@/widgets/Gallery/GalleryGrid';
import GalleryLightbox from '@/widgets/Gallery/GalleryLightbox';
import Gallery1 from "@/assets/images/gallery/image1.png";
import Gallery2 from "@/assets/images/gallery/image2.jpg";
import Gallery3 from "@/assets/images/gallery/image3.jpg";

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbumId(albumId);
    setIsLightboxOpen(true);
  };

  const images = [
    { id: 1, src: Gallery1 },
    { id: 2, src: Gallery2 },
    { id: 3, src: Gallery3 },
    { id: 4, src: Gallery1 },
    { id: 5, src: Gallery2 },
    { id: 6, src: Gallery3 },
  ];

  return (
    <>
      <GalleryHeader />
      <GalleryGrid onAlbumClick={handleAlbumClick} />

      <GalleryLightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
        images={images}
      />
    </>
  );
};

export default Gallery;
