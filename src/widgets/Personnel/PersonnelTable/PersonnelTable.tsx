import React from 'react';
import { Link } from 'react-router-dom';


interface PersonnelTableProps {
  headers: { key: string; label: string; align?: 'left' | 'center' | 'right' }[];
  data: any[];
  linkPrefix: string;
}

const PersonnelTable: React.FC<PersonnelTableProps> = ({ headers, data, linkPrefix }) => {
  return (
    <section className="pb-20 md:pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0A1045] text-white">
                {headers.map((header, idx) => (
                   <th 
                    key={idx} 
                    className={`px-4 py-3 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                      header.align === 'center' ? 'text-center' : header.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  {headers.map((header, colIdx) => (
                    <td 
                      key={colIdx} 
                      className={`px-4 py-4 text-sm ${
                        header.align === 'center' ? 'text-center' : header.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {header.key === 'rank' ? (
                        <span className="text-gray-600 font-medium">{row[header.key]}</span>
                      ) : header.key === 'name' || header.key === 'horse' ? (
                        <Link 
                          to={`${linkPrefix}/${row.id || '1'}`}
                          className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {row[header.key]}
                        </Link>
                      ) : header.key === 'rating' ? (
                        <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {row[header.key]}
                        </span>
                      ) : (
                        <span className="text-gray-900 font-medium">
                          {row[header.key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {data.map((row, rowIdx) => (
            <div key={rowIdx} className="bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-transparent hover:border-gray-100">
              {/* Header with Rank and Name */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold text-sm">#{row.rank}</span>
                  <Link 
                    to={`${linkPrefix}/${row.id || '1'}`}
                    className="text-gray-900 font-bold text-sm underline decoration-gray-300 hover:decoration-blue-600 transition-all uppercase tracking-wider"
                  >
                    {row.horse || row.name}
                  </Link>
                </div>
                {row.rating && (
                  <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {row.rating}
                  </span>
                )}
              </div>

              {/* Dynamic Content Based on Available Fields */}
              <div className="space-y-4">
                {/* Basic Info Grid - Show available fields */}
                <div className="grid grid-cols-2 gap-4">
                  {row.age && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Age</div>
                      <div className="text-gray-900 font-bold text-xs">{row.age}</div>
                    </div>
                  )}
                  {row.sex && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Sex</div>
                      <div className="text-gray-900 font-bold text-xs">{row.sex}</div>
                    </div>
                  )}
                  {row.breed && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Breed</div>
                      <div className="text-gray-900 font-bold text-xs">{row.breed}</div>
                    </div>
                  )}
                  {row.horses && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Horses</div>
                      <div className="text-gray-900 font-bold text-xs">{row.horses}</div>
                    </div>
                  )}
                  {row.runners && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Runners</div>
                      <div className="text-gray-900 font-bold text-xs">{row.runners}</div>
                    </div>
                  )}
                  {row.races && (
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Races</div>
                      <div className="text-gray-900 font-bold text-xs">{row.races}</div>
                    </div>
                  )}
                </div>

                {/* Performance Stats */}
                {(row.wins || row.places) && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    {row.wins && (
                      <div className="text-center">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Wins</div>
                        <div className="text-gray-900 font-bold text-xs">{row.wins}</div>
                      </div>
                    )}
                    {row.places && (
                      <div className="text-center">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Places</div>
                        <div className="text-gray-900 font-bold text-xs">{row.places}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Financial Stats */}
                {(row.earnings || row.owners_premiums || row.earnings_and_premiums || row.earning_per_race || row.breeders_premiums || row.earnings_per_runner || row.earnings_per_horse || row.runs_per_horse) && (
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    {row.earnings && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Earnings</span>
                        <span className="text-gray-900 font-bold text-xs">{row.earnings}</span>
                      </div>
                    )}
                    {row.owners_premiums && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Premiums</span>
                        <span className="text-gray-900 font-bold text-xs">{row.owners_premiums}</span>
                      </div>
                    )}
                    {row.earnings_and_premiums && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total</span>
                        <span className="text-gray-900 font-bold text-xs">{row.earnings_and_premiums}</span>
                      </div>
                    )}
                    {row.breeders_premiums && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Breeders</span>
                        <span className="text-gray-900 font-bold text-xs">{row.breeders_premiums}</span>
                      </div>
                    )}
                    {row.earning_per_race && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Per Race</span>
                        <span className="text-gray-900 font-bold text-xs">{row.earning_per_race}</span>
                      </div>
                    )}
                    {row.earnings_per_runner && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Per Runner</span>
                        <span className="text-gray-900 font-bold text-xs">{row.earnings_per_runner}</span>
                      </div>
                    )}
                    {row.earnings_per_horse && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Per Horse</span>
                        <span className="text-gray-900 font-bold text-xs">{row.earnings_per_horse}</span>
                      </div>
                    )}
                    {row.runs_per_horse && (
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Runs/Horse</span>
                        <span className="text-gray-900 font-bold text-xs">{row.runs_per_horse}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonnelTable;
