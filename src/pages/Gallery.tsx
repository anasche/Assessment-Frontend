import React, { useState, useEffect, lazy, Suspense } from 'react';
import GalleryHeader from '@/widgets/Gallery/GalleryHeader';
import Loading from '@/components/Loading';

import Gallery1 from "@/assets/images/gallery/image1.png";
import Gallery2 from "@/assets/images/gallery/image2.jpg";
import Gallery3 from "@/assets/images/gallery/image3.jpg";

const GalleryGrid = lazy(() => import('@/widgets/Gallery/GalleryGrid'));
const GalleryLightbox = lazy(() => import('@/widgets/Gallery/GalleryLightbox'));

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
      <Suspense fallback={<Loading />}>
        <GalleryGrid onAlbumClick={handleAlbumClick} />
        <GalleryLightbox 
          isOpen={isLightboxOpen} 
          onClose={() => setIsLightboxOpen(false)} 
          images={images}
        />
      </Suspense>
    </>
  );
};

export default Gallery;
