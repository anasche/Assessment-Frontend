import React, { useEffect } from 'react';
import PersonnelTable from '@/widgets/Personnel/PersonnelTable';
import { ChevronDown, Trophy, Users } from 'lucide-react';

const OwnerDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headers = [
    { key: 'rank', label: 'Rank', align: 'left' as const },
    { key: 'horse', label: 'Horses', align: 'left' as const },
    { key: 'age', label: 'Age', align: 'center' as const },
    { key: 'sex', label: 'Sex', align: 'center' as const },
    { key: 'breed', label: 'Breed', align: 'center' as const },
    { key: 'races', label: 'Races', align: 'center' as const },
    { key: 'wins', label: 'Wins', align: 'center' as const },
    { key: 'places', label: 'Non-winning prizes', align: 'center' as const },
    { key: 'earnings', label: 'Earnings', align: 'center' as const },
    { key: 'owners_premiums', label: 'Owners Premiums', align: 'center' as const },
    { key: 'earnings_and_premiums', label: 'Earnings and Premiums', align: 'center' as const },
    { key: 'runs_per_horse', label: 'Runs / Horse', align: 'center' as const },
  ];

  const data = Array(10).fill({
    id: 'buraak',
    rank: 2,
    horse: "arrow eagle",
    age: 4,
    sex: "M",
    breed: "PUR SANG",
    races: 4,
    wins: 4,
    places: 0,
    earnings: "162.100",
    owners_premiums: "261.401",
    earnings_and_premiums: 4,
    runs_per_horse: 4
  });

  return (
    <div className="pt-32">
      {/* Owner Header */}
      <section className="bg-white pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner">
               <img src="https://img.icons8.com/color/144/jockey-silk.png" alt="Silk" className="w-24 h-24 grayscale" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-[#0A0B14] mb-8 tracking-tighter">
                AGATHA STUDS
              </h1>
              <div className="flex justify-center md:justify-start gap-12">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Users size={24} />
                   </div>
                   <div>
                      <div className="text-2xl font-bold text-gray-900">143</div>
                      <div className="text-[10px] tracking-widest text-gray-400 font-bold">runners</div>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Trophy size={24} />
                   </div>
                   <div>
                      <div className="text-2xl font-bold text-gray-900">4</div>
                      <div className="text-[10px] tracking-widest text-gray-400 font-bold">victories</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex flex-wrap gap-4">
              {[
                { label: "Year", value: "20205" },
                { label: "Horse", value: "2025 Horses" },
                { label: "Race", value: "Last Races" },
                { label: "Runners", value: "Runners" },
                { label: "Entries", value: "Entries" },
                { label: "Trainers/Horses", value: "Trainers and horses" },
              ].map((filter, i) => (
                <button key={i} className="flex items-center gap-4 px-6 py-2 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-500 hover:text-gray-900 transition-all">
                  <span className="text-gray-900">{filter.value}</span> <ChevronDown size={14} className="text-gray-300" />
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Table Title */}
      <section className="bg-white pt-16">
         <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-6xl font-bold text-[#0A0B14] mb-12">2025</h2>
         </div>
      </section>

      <PersonnelTable headers={headers} data={data} linkPrefix="/personnel/horse" />
    </div>
  );
};

export default OwnerDetail;
