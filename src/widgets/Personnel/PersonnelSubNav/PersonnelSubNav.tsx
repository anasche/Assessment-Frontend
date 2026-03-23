import React from "react";
import { NavLink } from "react-router-dom";

const PersonnelSubNav: React.FC = () => {
  const tabs = [
    { name: "Horses", path: "/personnel/horses" },
    { name: "Owners", path: "/personnel/owners" },
    { name: "Trainers", path: "/personnel/trainers" },
    { name: "Jockeys", path: "/personnel/jockeys" },
  ];

  return (
    <div className="flex justify-center mb-8 md:mb-12 px-4">
      <div className="inline-flex bg-[#0A1045] rounded-lg p-1 w-full max-w-md md:max-w-none md:w-auto">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `flex-1 md:flex-none px-3 md:px-8 py-2.5 rounded-md text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 text-center ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-white/40 hover:text-white"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PersonnelSubNav;
