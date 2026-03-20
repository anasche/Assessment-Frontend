import React, { useEffect } from 'react';
import PersonnelTable from '@/widgets/Personnel/PersonnelTable';
import PersonnelFilters from '@/widgets/Personnel/PersonnelFilters';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HorseDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const horseStats = [
    { label: "TOTAL PRIZE", value: "AED 75,000" },
    { label: "SIRE", value: "Bolt (USA)" },
    { label: "DAM", value: "Take Charge Girl (USA)" },
    { label: "DAMSIRE", value: "Will Take Charge (USA)" },
    { label: "OWNER", value: "DAISSAOUI MOHAMED" },
    { label: "TRAINER", value: "DAISSAOUI MOHAMED" },
    { label: "BREEDER", value: "Peter J. Sheppell" },
  ];

  const raceHeaders = [
    { key: 'date', label: 'Date', align: 'left' as const },
    { key: 'course', label: 'Course', align: 'left' as const },
    { key: 'distance', label: 'Distance', align: 'center' as const },
    { key: 'discipline', label: 'Discipline', align: 'center' as const },
    { key: 'jockey', label: 'Jockey', align: 'left' as const },
    { key: 'weight', label: 'Weight', align: 'center' as const },
    { key: 'pos', label: 'Pos', align: 'center' as const },
    { key: 'prize', label: 'Prize', align: 'right' as const },
  ];

  const raceData = [
    { id: 'race-1', date: '22/02/2025', course: 'MEYDAN', distance: '1600m', discipline: 'Flat', jockey: 'T. O\'SHEA', weight: '57.0kg', pos: '1st', prize: 'AED 45,000' },
    { id: 'race-2', date: '08/02/2025', course: 'JEBEL ALI', distance: '1400m', discipline: 'Flat', jockey: 'T. O\'SHEA', weight: '58.5kg', pos: '2nd', prize: 'AED 15,000' },
    { id: 'race-3', date: '15/01/2025', course: 'ABU DHABI', distance: '2200m', discipline: 'Flat', jockey: 'R. MULLEN', weight: '56.0kg', pos: '1st', prize: 'AED 60,000' },
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
              <div className="flex justify-center mb-8">
                 <div className="relative">
                    <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center grayscale">
                       🏇
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-white rounded-lg shadow-sm p-1">
                      <span className="text-xl">🇲🇦</span>
                    </div>
                 </div>
              </div>
              <div className="text-center mb-10">
                 <h1 className="text-2xl font-bold text-[#0A0B14] mb-1">BURAAK (MORCOO)</h1>
                 <p className="text-[10px] font-bold text-gray-300 tracking-[0.2em] uppercase">BAY COLT • 4Y • MAR</p>
              </div>

              <div className="space-y-6">
                 <h3 className="text-blue-600 font-bold text-sm border-l-2 border-blue-600 pl-4">Statistics</h3>
                 {horseStats.map((stat, idx) => (
                   <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                      <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase">{stat.label}</span>
                      <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pedigree & Details */}
          <div className="lg:col-span-8">
             <div className="bg-[#0A1045] rounded-[40px] p-10 text-white mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div>
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">OWNER</div>
                      <div className="font-bold text-sm tracking-tight">DAISSAOUI MOHAMED</div>
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">TRAINER</div>
                      <div className="font-bold text-sm tracking-tight">DAISSAOUI MOHAMED</div>
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">BREEDER</div>
                      <div className="font-bold text-sm tracking-tight uppercase">Haras National de Marrakech</div>
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">SEX</div>
                      <div className="font-bold text-sm tracking-tight uppercase tracking-widest">COLT</div>
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">AGE</div>
                      <div className="font-bold text-sm tracking-tight">4</div>
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">COLOR</div>
                      <div className="font-bold text-sm tracking-tight">Bay</div>
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2">HORSE RATING</div>
                      <div className="font-bold text-sm tracking-tight">88</div>
                   </div>
                </div>
             </div>

             {/* Pedigree section */}
             <div className="relative py-12">
                <div className="grid grid-cols-3 gap-0 relative">
                   {/* Column 1 */}
                   <div className="flex flex-col justify-center gap-24">
                      <div className="relative p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-1">Bolt D'oro (Morocco)</div>
                      </div>
                      <div className="relative p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-1">Take Charge Girl (Morocco)</div>
                      </div>
                   </div>
                   
                   {/* Column 2 */}
                   <div className="flex flex-col justify-between gap-12 pl-12 border-l border-gray-100">
                      <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mb-1">1999 MEDAGLIA D'ORO (Morocco)</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mb-1">2008 Globe Trot (Morocco) (Morocco)</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mb-1">2010 Will Take Charge (Morocco) (Morocco)</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                         <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mb-1">2009 Kaby Jo (Morocco)</div>
                      </div>
                   </div>

                   {/* Column 3 */}
                   <div className="flex flex-col justify-between gap-4 pl-12 border-l border-gray-100">
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1989 El Prado (IRE)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1989 Cappucino Bay (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1989 A.P. Indy (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1997 Trip (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1993 Unbridled's Song (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">1999 Take Charge Lady (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">2001 Limehouse (Morocco) (Morocco)</div>
                      <div className="text-[7px] font-bold text-gray-400 uppercase">2003 Time of Peace (Morocco)</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="text-center mb-16">
           <h2 className="text-6xl font-bold text-[#0A0B14] mb-2">Races</h2>
           <p className="text-gray-400 text-sm">Horse's profile and standings</p>
        </div>
      </div>

      {/* Races section filters and table */}
      <div className="container mx-auto px-4 max-w-7xl">
         <div className="flex flex-wrap items-center justify-center gap-4 mb-20 bg-gray-50/50 p-6 rounded-[32px] border border-gray-100">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#0A0B14] uppercase tracking-wider">Year</span>
              <button className="flex items-center gap-3 px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500">
                2025 <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#0A0B14] uppercase tracking-wider">Discipline</span>
              <button className="flex items-center gap-3 px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500">
                Flat <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#0A0B14] uppercase tracking-wider">Breed</span>
              <button className="flex items-center gap-3 px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500">
                PUR SANG <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#0A0B14] uppercase tracking-wider">Age</span>
              <button className="flex items-center gap-3 px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500">
                All <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#0A0B14] uppercase tracking-wider">Sex</span>
              <button className="flex items-center gap-3 px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500">
                All <ChevronDown size={14} />
              </button>
            </div>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-3 shadow-lg shadow-blue-600/20">
              FILTER <div className="bg-white/20 p-1 rounded-full"><ArrowRight size={12} /></div>
            </button>
         </div>
      </div>

      <PersonnelTable headers={raceHeaders} data={raceData} linkPrefix="/personnel/horse" />
    </div>
  );
};

export default HorseDetail;
