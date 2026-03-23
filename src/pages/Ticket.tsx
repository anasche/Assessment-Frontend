import React from "react";
import BookExperience from "@/widgets/Home/BookExperience/BookExperience";
import TicketCard from "@/components/TicketCard";
import BookingBg1 from "@/assets/images/experience/experience-1.jpg";
import BookingBg2 from "@/assets/images/gallery/image1.png";
import BookingBg3 from "@/assets/images/gallery/image2.jpg";
import BookingBg4 from "@/assets/images/gallery/image3.jpg";

const Ticket: React.FC = () => {
  const legs = [
    {
      title: "Moroccan leg of the\nUAE President Cup Series",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg1,
    },
    {
      title: "Moroccan leg of the\nUAE President Cup Series",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg2,
    },
    {
      title: "Track of\nChampions",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg3,
    },
    {
      title: "Battle of the\nArabian Horses",
      country: "Morocco",
      flag: "🇲🇦",
      date: "30 apr, 2025",
      image: BookingBg4,
    },
  ];

  return (
    <div className="bg-white" style={{ paddingTop: "93px" }}>
      {/* Banner using the BookExperience widget */}
      <BookExperience />

      {/* legs Grid */}
      <section className="py-12 md:py-24 max-w-[1728px] mx-auto px-4 md:px-8 xl:px-[77px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {legs.map((leg, index) => (
            <TicketCard key={index} {...leg} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ticket;
