import React from "react";
import Gallery1 from "@/assets/images/gallery/image1.jpg";
import Gallery2 from "@/assets/images/gallery/image2.jpg";
import Gallery3 from "@/assets/images/gallery/image3.jpg";

interface GalleryGridProps {
  onAlbumClick: (albumId: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ onAlbumClick }) => {
  const albums = Array(6).fill({
    id: 1,
    title: "Moroccan leg of the UAE President Cup Series",
    imageCount: 30,
    images: [Gallery1, Gallery2, Gallery3],
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {albums.map((album, idx) => (
            <div
              key={idx}
              onClick={() => onAlbumClick(album.id)}
              className="group cursor-pointer"
            >
              <div className="flex gap-2 h-[260px] mb-6">
                <div className="w-1/3 flex flex-col gap-2">
                  <div className="h-1/2 rounded-2xl overflow-hidden">
                    <img
                      src={album.images[1]}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-1/2 rounded-2xl overflow-hidden">
                    <img
                      src={album.images[2]}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="w-2/3 rounded-2xl overflow-hidden">
                  <img
                    src={album.images[0]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A0B14] mb-1 group-hover:text-blue-600 transition-colors">
                {album.title}
              </h3>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {album.imageCount} Image
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
