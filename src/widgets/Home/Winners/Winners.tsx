import React from 'react';
import Title from '@/components/Title/Title';
import WinnerCard from './WinnerCard';


const Winners: React.FC = () => {
  const winners = [
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
    { horse: 'arrow eagle', owner: 'Alii', trainer: 'Kayle', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'Talat', rank: 4, time: "02:21:43", distance: "2,000 Km", title: "UAEPresidentCup Series" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-[77px]">
        <div className="text-center mb-12">
          <Title dark={true} className="mb-4">
            Winners of the Race
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {winners.map((winner, index) => (
            <WinnerCard key={index} winner={winner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
