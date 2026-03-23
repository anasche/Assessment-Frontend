import React, { useState } from "react";
import Title from "@/components/Title";
import Event1 from "@/assets/images/events/event-1.png";
import Event2 from "@/assets/images/events/event-2.jpg";
import Event3 from "@/assets/images/events/event-3.jpg";
import Event4 from "@/assets/images/events/event-4.png";

interface Video {
  id: number;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Moroccan Leg of the #UAEPresidentCup\nfor Purebred Arabian Horses",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: Event1,
  },
  {
    id: 2,
    title: "UAE President's Cup 2026 – Highlights Day 1",
    youtubeId: "tgbNymZ7vqY",
    thumbnail: Event2,
  },
  {
    id: 3,
    title: "Training Session: Behind the Scenes",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: Event3,
  },
  {
    id: 4,
    title: "Training Session: Behind the Scenes",
    youtubeId: "tgbNymZ7vqY",
    thumbnail: Event4,
  },
];

const LiveEvent: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Video>(videos[0]);
  const [playing, setPlaying] = useState(false);

  const sidebarVideos = videos.slice(1);

  const handleSidebarClick = (video: Video) => {
    setActiveVideo(video);
    setPlaying(false);
  };

  const embedSrc = `https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1&enablejsapi=1&autoplay=1`;

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        {/* Header */}
        <div className="text-center mb-10">
          <Title dark={true} className="mb-3">
            Live Event
          </Title>
          <p className="font-medium text-[15px] leading-relaxed text-black/60 max-w-2xl mx-auto">
            Watch the UAE President's Cup live and enjoy the latest horse racing
            action and highlights.
          </p>
        </div>

        {/* Layout: main 8 cols + sidebar 4 cols */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {/* ── Main player ── */}
          <div className="w-full lg:flex-1">
            <div
              className="relative overflow-hidden rounded-tl-[16px] rounded-tr-[16px] rounded-br-[11px] rounded-bl-[11px] shadow-xl bg-black"
              style={{ aspectRatio: "1144/622" }}
            >
              {/* Poster */}
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                onClick={() => setPlaying(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 cursor-pointer ${
                  playing ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />

              {/* Gradient over poster */}
              {!playing && (
                <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.82)_100%)]" />
              )}

              {/* LIVE NOW badge */}
              {!playing && (
                <div className="absolute top-5 left-5 z-30 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-white tracking-widest uppercase">
                    LIVE NOW
                  </span>
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
                </div>
              )}

              {/* Watch later + Share */}
              {!playing && (
                <div className="absolute top-4 right-5 z-30 flex items-center gap-5">
                  <button className="flex flex-col items-center gap-1 text-white">
                    {/* Clock icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wider">
                      Watch later
                    </span>
                  </button>
                  <button className="flex flex-col items-center gap-1 text-white">
                    {/* Share icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wider">
                      Share
                    </span>
                  </button>
                </div>
              )}

              {/* YouTube play button */}
              {!playing && (
                <div
                  className="absolute inset-0 z-30 flex items-center justify-center cursor-pointer"
                  onClick={() => setPlaying(true)}
                >
                  <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[10px] flex items-center justify-center hover:bg-[#cc0000] transition-colors shadow-2xl">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 fill-white ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Title overlay */}
              {!playing && (
                <div className="absolute bottom-6 left-6 z-30 max-w-[60%]">
                  <h3 className="text-[12px] md:text-[16px] lg:text-[20px] font-bold text-white leading-snug line-clamp-2 lg:whitespace-pre-line">
                    {activeVideo.title}
                  </h3>
                </div>
              )}

              {/* YouTube iframe */}
              {playing && (
                <iframe
                  key={activeVideo.youtubeId}
                  src={embedSrc}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0 z-10"
                />
              )}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="w-full lg:w-[333px] flex-shrink-0 flex flex-col gap-3">
            {sidebarVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleSidebarClick(video)}
                className={`group cursor-pointer relative overflow-hidden rounded-[12px] border-2 transition-all duration-200 ${
                  activeVideo.id === video.id
                    ? "border-blue-500"
                    : "border-transparent hover:border-blue-400/40"
                }`}
                style={{ aspectRatio: "333/167" }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.78)_100%)]" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-[12px] font-bold text-white leading-snug line-clamp-2">
                    {video.title}
                  </h4>
                </div>
                {/* Live badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded">
                    Live
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEvent;
