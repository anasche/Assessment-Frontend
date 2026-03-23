import Title from "@/components/Title";
import React from "react";
import About2 from "@/assets/images/about/about-2.png";

const BoardMembers: React.FC = () => {
  const members = [
    {
      id: 1,
      name: "Ahmed Al-Farsi",
      position: "Chairman",
      image: About2,
    },
    {
      id: 2,
      name: "Fatima Al-Mansoori",
      position: "Vice Chairperson",
      image: About2,
    },
    {
      id: 3,
      name: "Omar Al-Habsi",
      position: "Treasurer",
      image: About2,
    },
    {
      id: 4,
      name: "Aisha Al-Nuaimi",
      position: "Secretary",
      image: About2,
    },
    {
      id: 5,
      name: "Khalid Al-Suwaidi",
      position: "Board Member",
      image: About2,
    },
    {
      id: 6,
      name: "Mariam Al-Shamsi",
      position: "Board Member",
      image: About2,
    },
    {
      id: 7,
      name: "Yousef Al-Dhaheri",
      position: "Board Member",
      image: About2,
    },
    {
      id: 8,
      name: "Noor Al-Balushi",
      position: "Board Member",
      image: About2,
    },
  ];

  return (
    <section className="bg-white py-24 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-2">
          <Title dark={true}>Board Members</Title>
          <p className="font-medium text-[17px] leading-none tracking-tightest text-gray-700 max-w-sm md:max-w-xl mx-auto">
            Meet the Board{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center group text-center"
            >
              <div className="w-full aspect-square rounded-[40px] bg-gray-200 mb-6 transition-transform duration-500 group-hover:scale-105 shadow-sm border border-gray-100 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
