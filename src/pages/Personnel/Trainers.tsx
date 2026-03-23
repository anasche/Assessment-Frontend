import React, { useEffect } from 'react';
import PersonnelHeader from '@/widgets/Personnel/PersonnelHeader';
import PersonnelSubNav from '@/widgets/Personnel/PersonnelSubNav';
import PersonnelFilters from '@/widgets/Personnel/PersonnelFilters';
import PersonnelTable from '@/widgets/Personnel/PersonnelTable';

const Trainers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headers = [
    { key: 'rank', label: 'Rank', align: 'left' as const },
    { key: 'name', label: 'Trainers', align: 'left' as const },
    { key: 'horses', label: 'Horses', align: 'center' as const },
    { key: 'runners', label: 'Runners', align: 'center' as const },
    { key: 'wins', label: 'Wins', align: 'center' as const },
    { key: 'places', label: 'Non-winning prizes', align: 'center' as const },
    { key: 'earnings', label: 'Earnings', align: 'center' as const },
    { key: 'owners_premiums', label: 'Owners Premiums', align: 'center' as const },
    { key: 'earnings_and_premiums', label: 'Earnings and Premiums', align: 'center' as const },
    { key: 'breeders_premiums', label: 'Breeders\' Premiums', align: 'center' as const },
    { key: 'earnings_per_runner', label: 'Earnings /Runner', align: 'center' as const },
    { key: 'earnings_per_horse', label: 'Earnings /Horse', align: 'center' as const },
    { key: 'runs_per_horse', label: 'Runs / Horse', align: 'center' as const },
  ];

  const data = Array(10).fill({
    id: 'arrow-eagle',
    rank: 2,
    name: "AGA KHAN STUDS",
    horses: 4,
    runners: "M",
    wins: "PUR SANG",
    places: 4,
    earnings: 4,
    owners_premiums: 0,
    earnings_and_premiums: "162.100",
    breeders_premiums: "261.401",
    earnings_per_runner: "235.045",
    earnings_per_horse: "40.525",
    runs_per_horse: 4
  });

  return (
    <>
      <PersonnelSubNav />
      <PersonnelHeader title="Trainers" placeholder="Enter the name of a trainers" onSearch={() => {}} />
      <PersonnelFilters />
      <PersonnelTable headers={headers} data={data} linkPrefix="/personnel/trainer" />
    </>
  );
};

export default Trainers;
