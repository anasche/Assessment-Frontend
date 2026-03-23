import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // animation duration (lower = faster)
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-max animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
