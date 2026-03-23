import React, { useState, useEffect, lazy, Suspense } from "react";
import GalleryHeader from "@/widgets/Gallery/GalleryHeader";
import Loading from "@/components/Loading/Loading";

const GalleryGrid = lazy(() => import("@/widgets/Gallery/GalleryGrid"));
const GalleryLightbox = lazy(() => import("@/widgets/Gallery/GalleryLightbox"));

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

  return (
    <>
      <GalleryHeader />
      <Suspense fallback={<Loading />}>
        <GalleryGrid onAlbumClick={handleAlbumClick} />
        <GalleryLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      </Suspense>
    </>
  );
};

export default Gallery;
