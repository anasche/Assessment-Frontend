import React from 'react';

const results = [
  { rank: 1, horse: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "50kg", earnings: "33750", dob: "15/10/2021" },
  { rank: 2, horse: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "50kg", earnings: "33750", dob: "15/10/2021" },
  { rank: 3, horse: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "50kg", earnings: "33750", dob: "15/10/2021" },
  { rank: 4, horse: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "50kg", earnings: "33750", dob: "15/10/2021" },
  { rank: 5, horse: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "50kg", earnings: "33750", dob: "15/10/2021" },
];

const RaceResultsTable: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <tbody>
              {results.map((item, idx) => (
                <tr key={idx} className="bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-[20px]">
                  <td className="p-6 first:rounded-l-[20px] text-center w-20">
                    <div className="w-10 h-10 rounded-full bg-[#161687] flex items-center justify-center text-white font-bold text-sm">
                      {item.rank}
                    </div>
                  </td>
                  <td className="p-6 text-center w-24">
                     {/* Jockey/Horse icon placeholder */}
                     <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center grayscale">
                        🏇
                     </div>
                  </td>
                  <td className="p-6">
                    <div className="font-bold text-gray-900 text-lg mb-1">{item.horse}</div>
                  </td>
                  <td className="p-6 text-sm">
                    <div className="flex flex-col gap-2">
                       <span className="text-gray-400 font-medium">Owner: <span className="text-gray-900 font-bold">{item.owner}</span></span>
                       <span className="text-gray-400 font-medium">Trainer: <span className="text-gray-900 font-bold">{item.trainer}</span></span>
                       <span className="text-gray-400 font-medium">Jockey: <span className="text-gray-900 font-bold">{item.jockey}</span></span>
                    </div>
                  </td>
                  <td className="p-6 text-sm last:rounded-r-[20px]">
                    <div className="flex flex-col gap-2">
                       <span className="text-gray-400 font-medium whitespace-nowrap">Weight Earning: <span className="text-gray-900 font-bold">{item.weight} - {item.earnings}</span></span>
                       <span className="text-gray-400 font-medium">Date of Birth: <span className="text-gray-900 font-bold">{item.dob}</span></span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RaceResultsTable;
