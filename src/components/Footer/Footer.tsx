import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";
import Logo from "@/assets/logo/logo.png";

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-white pt-20 pb-0 overflow-hidden font-dm-sans border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 xl:px-[77px] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Logo & Socials (takes 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <img
              src={Logo}
              alt="UAE President Cup"
              className="h-[80px] w-auto object-contain self-start"
            />
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <Twitter size={16} />
              </a>
              {/* TikTok Icon SVG */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.08-.78 2.36-1.21 3.71-1.3l.03 4.07c-.12.01-.25.01-.37.03-1.01.03-2.04.41-2.73 1.19-.53.58-.8 1.4-.76 2.19.03 1.05.57 2.05 1.44 2.62.58.38 1.27.56 1.96.56.88.02 1.75-.24 2.47-.75.71-.47 1.25-1.25 1.34-2.1.06-2.15.02-4.29.02-6.39l.02-9.45z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Events (takes 3 cols) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-8">Events</h3>
            <ul className="flex flex-col gap-6 text-[15px] font-medium text-[#1a1a1a]/70">
              <li>
                <Link
                  to="/news"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/races"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  Upcoming event
                </Link>
              </li>
              <li>
                <Link
                  to="/races"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  Events calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About (takes 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-8">About</h3>
            <ul className="flex flex-col gap-6 text-[15px] font-medium text-[#1a1a1a]/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help Center (takes 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-[#1B3A6B] mb-8">
              Help Center
            </h3>
            <ul className="flex flex-col gap-6 text-[15px] font-medium text-[#1a1a1a]/70">
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#1B3A6B] transition-colors text-left"
                >
                  Contact us
                </button>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#1B3A6B] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#161687] py-5 text-center">
        <p className="text-white text-[13px] font-medium tracking-tight">
          Privacy Policy . Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
