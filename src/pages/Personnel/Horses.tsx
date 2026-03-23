import React, { useEffect, lazy, Suspense } from 'react';
import PersonnelHeader from '@/widgets/Personnel/PersonnelHeader';
import PersonnelSubNav from '@/widgets/Personnel/PersonnelSubNav';
import Loading from '@/components/Loading/Loading';

const PersonnelFilters = lazy(() => import('@/widgets/Personnel/PersonnelFilters'));
const PersonnelTable = lazy(() => import('@/widgets/Personnel/PersonnelTable'));

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

  const data = [
    { id: 'buraak', rank: 1, horse: "BURAAK", age: 4, sex: "M", breed: "PUR SANG", races: 12, wins: 8, places: 2, earnings: "450.000", owners_premiums: "112.500", earnings_and_premiums: "562.500", earning_per_race: "37.500", rating: "95" },
    { id: 'arrow-eagle', rank: 2, horse: "ARROW EAGLE", age: 5, sex: "M", breed: "PUR SANG", races: 15, wins: 6, places: 4, earnings: "320.000", owners_premiums: "80.000", earnings_and_premiums: "400.000", earning_per_race: "21.333", rating: "92" },
    { id: 'desert-storm', rank: 3, horse: "DESERT STORM", age: 3, sex: "C", breed: "ARABIAN", races: 6, wins: 4, places: 1, earnings: "180.000", owners_premiums: "45.000", earnings_and_premiums: "225.000", earning_per_race: "30.000", rating: "88" },
    { id: 'blue-ocean', rank: 4, horse: "BLUE OCEAN", age: 4, sex: "F", breed: "PUR SANG", races: 10, wins: 3, places: 5, earnings: "150.000", owners_premiums: "37.500", earnings_and_premiums: "187.500", earning_per_race: "15.000", rating: "85" },
    { id: 'golden-sand', rank: 5, horse: "GOLDEN SAND", age: 6, sex: "G", breed: "PUR SANG", races: 22, wins: 5, places: 8, earnings: "210.000", owners_premiums: "52.500", earnings_and_premiums: "262.500", earning_per_race: "9.545", rating: "82" },
    { id: 'velvet-night', rank: 6, horse: "VELVET NIGHT", age: 3, sex: "F", breed: "PUR SANG", races: 4, wins: 2, places: 1, earnings: "90.000", owners_premiums: "22.500", earnings_and_premiums: "112.500", earning_per_race: "22.500", rating: "80" },
    { id: 'silver-wind', rank: 7, horse: "SILVER WIND", age: 5, sex: "H", breed: "ARABIAN", races: 14, wins: 3, places: 6, earnings: "125.000", owners_premiums: "31.250", earnings_and_premiums: "156.250", earning_per_race: "8.928", rating: "78" },
    { id: 'thunder-bolt', rank: 8, horse: "THUNDER BOLT", age: 4, sex: "C", breed: "PUR SANG", races: 8, wins: 2, places: 3, earnings: "85.000", owners_premiums: "21.250", earnings_and_premiums: "106.250", earning_per_race: "10.625", rating: "76" },
  ];

  return (
    <>
      <PersonnelHeader title="Horses" placeholder="Enter the name of a horses" />
      <PersonnelSubNav />
      <Suspense fallback={<Loading />}>
        <PersonnelFilters />
        <PersonnelTable headers={headers} data={data} linkPrefix="/personnel/horse" />
      </Suspense>
    </>
  );
};

export default Horses;
