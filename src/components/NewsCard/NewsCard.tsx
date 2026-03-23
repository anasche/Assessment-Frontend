import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

interface NewsCardProps {
  image: string;
  tag?: string;
  title: string;
  date: string;
  description?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  tag,
  title,
  date,
  description,
}) => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-[#0A0B14] mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-3">
          {description ||
            "The Moroccan leg of the UAE President Cup for Purebred Arabian Horses promises to be an extraordinary event, showcasing the best of Arabian horse heritage..."}
        </p>

        <div className="mt-auto flex justify-end">
          <Link
            to={`/news/${slug}`}
            className="group/btn relative inline-flex items-center justify-start bg-gradient-to-r from-[#3c3cb6] to-[#141473] rounded-[100px] py-[10px] pr-[10px] pl-5 transition-all duration-300 ease-in-out active:rounded-[12px]"
          >
            <span className="text-white block text-xs md:text-sm font-medium transform transition-all duration-300 ease-in-out group-hover/btn:translate-x-[20%]">
              Continue Reading
            </span>
            <span className="ms-3 size-7 md:size-10 rounded-full bg-white text-black text-xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover/btn:scale-0 group-hover/btn:opacity-0">
              <IoArrowForwardOutline />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
