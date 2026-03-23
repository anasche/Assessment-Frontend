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
    <section className="pt-24 md:pt-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center">
          <div className="inline-flex w-full max-w-md md:max-w-none md:w-auto" style={{ backgroundColor: '#151585' }}>
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.path}
                className={({ isActive }) =>
                  `flex-1 md:flex-none px-3 md:px-8 py-2.5 text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 text-center ${
                    isActive
                      ? "text-white underline"
                      : "text-white/60 hover:text-white"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonnelSubNav;
