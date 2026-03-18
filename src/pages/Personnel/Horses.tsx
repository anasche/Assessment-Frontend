import React, { useEffect } from 'react';
import PersonnelHeader from '@/widgets/Personnel/PersonnelHeader';
import PersonnelSubNav from '@/widgets/Personnel/PersonnelSubNav';
import PersonnelFilters from '@/widgets/Personnel/PersonnelFilters';
import PersonnelTable from '@/widgets/Personnel/PersonnelTable';

const Horses: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headers = [
    { key: 'rank', label: 'Rank', align: 'left' as const },
    { key: 'horse', label: 'Horse', align: 'left' as const },
    { key: 'age', label: 'Age', align: 'center' as const },
    { key: 'sex', label: 'Sex', align: 'center' as const },
    { key: 'breed', label: 'Breed', align: 'center' as const },
    { key: 'races', label: 'Races', align: 'center' as const },
    { key: 'wins', label: 'Wins', align: 'center' as const },
    { key: 'places', label: 'Non-winning prizes', align: 'center' as const },
    { key: 'earnings', label: 'Earnings', align: 'center' as const },
    { key: 'owners_premiums', label: 'Owners Premiums', align: 'center' as const },
    { key: 'earnings_and_premiums', label: 'Earnings and Premiums', align: 'center' as const },
    { key: 'earning_per_race', label: 'Earning / race', align: 'center' as const },
    { key: 'rating', label: 'Rating', align: 'center' as const },
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
    owners_premiums: "72.945",
    earnings_and_premiums: "235.045",
    earning_per_race: "40.525",
    rating: "50.5"
  });

  return (
    <>
      <PersonnelHeader title="Horses" placeholder="Enter the name of a horses" />
      <PersonnelSubNav />
      <PersonnelFilters />
      <PersonnelTable headers={headers} data={data} linkPrefix="/personnel/horse" />
    </>
  );
};

export default Horses;
