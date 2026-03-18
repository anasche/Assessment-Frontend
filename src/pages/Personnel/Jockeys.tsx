import React, { useEffect } from 'react';
import PersonnelHeader from '@/widgets/Personnel/PersonnelHeader';
import PersonnelSubNav from '@/widgets/Personnel/PersonnelSubNav';
import PersonnelFilters from '@/widgets/Personnel/PersonnelFilters';
import PersonnelTable from '@/widgets/Personnel/PersonnelTable';

const Jockeys: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headers = [
    { key: 'rank', label: 'Rank', align: 'left' as const },
    { key: 'name', label: 'Jockeys', align: 'left' as const },
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
    { key: 'rating', label: 'Rating', align: 'center' as const },
  ];

  const data = Array(10).fill({
    id: 'arrow-eagle',
    rank: 2,
    name: "arrow eagle",
    horses: 4,
    runners: "M",
    wins: "PUR SANG",
    places: 4,
    earnings: 4,
    owners_premiums: 0,
    earnings_and_premiums: "162.100",
    breeders_premiums: "72.945",
    earnings_per_runner: "235.045",
    earnings_per_horse: "40.525",
    runs_per_horse: 4,
    rating: "50.5"
  });

  return (
    <>
      <PersonnelHeader title="Jockeys" placeholder="Enter the name of a Jockeys" />
      <PersonnelSubNav />
      <PersonnelFilters />
      <PersonnelTable headers={headers} data={data} linkPrefix="/personnel/jockey" />
    </>
  );
};

export default Jockeys;
