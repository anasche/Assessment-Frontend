import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/assets/logo/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isNewsDetailPage =
    location.pathname.startsWith("/news/") && location.pathname !== "/news";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events & Races", path: "/races" },
    { name: "Ticket", path: "/ticket" },
    { name: "Horses & People", path: "/personnel/horses" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 h-16 md:h-20 xl:h-[93px] backdrop-blur-sm
        ${
          isNewsDetailPage
            ? "bg-white shadow-sm border-b border-black/[0.06]"
            : isScrolled
              ? "bg-white/95 shadow-sm border-b border-black/[0.06]"
              : "bg-white/[0.26]"
        }`}
    >
      <div className="relative w-full h-full max-w-[1728px] mx-auto px-4 md:px-8 xl:px-0">
        {/* Logo — flex on mobile, absolute on desktop */}
        <div className="h-full flex items-center xl:absolute xl:left-[77px] xl:top-[26px] xl:w-[154px] xl:h-[42px]">
          <Link to="/">
            <img
              src={Logo}
              alt="UAE President Cup"
              className="w-32 md:w-36 xl:w-[154px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav Menu — Desktop only (XL+) */}
        <div className="absolute hidden xl:flex items-center left-[389px] top-[36.5px] h-[20px] gap-[20px]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative whitespace-nowrap text-[14px] leading-[20px] pb-[4px] transition-all duration-200 border-b-2 no-underline
                  ${
                    isActive
                      ? "font-bold text-[#1B3A6B] border-[#1B3A6B]"
                      : "font-normal text-[#1a1a1a] border-transparent hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side items — hidden on mobile, absolute on xl */}
        <div className="hidden xl:flex items-center absolute right-[77px] top-[25px] gap-8">
          {/* Live Now */}
          <div className="flex items-center gap-[10px] h-[20px]">
            <span className="text-[14px] font-normal leading-[20px] text-[#1a1a1a] whitespace-nowrap">
              Live now
            </span>
            <span className="inline-block w-[10px] h-[10px] rounded-full bg-red-600 shrink-0" />
          </div>

          {/* Season Button */}
          <div className="flex items-center cursor-pointer h-[20px] gap-[10px]">
            <span className="text-[14px] font-normal leading-[20px] text-[#1a1a1a] whitespace-nowrap">
              Season
            </span>
            <ChevronDown
              size={14}
              className="text-[#1a1a1a]"
              strokeWidth={1.5}
            />
          </div>

          {/* Language Button */}
          <div className="flex items-center justify-center cursor-pointer w-[45px] h-[45px] rounded-full bg-gray-200">
            <span className="flex items-center gap-[2px] text-[13px] font-medium text-[#1a1a1a] leading-none">
              EN
              <ChevronDown size={11} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Mobile Menu Button - Visible below XL */}
        <div className="xl:hidden absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <div className="px-6 pt-4 pb-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 text-sm font-semibold tracking-widest uppercase hover:text-[#1B3A6B] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                <span>Live now</span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
              </div>
              <div className="flex items-center gap-1 text-sm text-[#1a1a1a]">
                Season <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a]">
                EN <ChevronDown size={12} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
