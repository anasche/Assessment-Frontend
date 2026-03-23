import React, { useEffect, useState, lazy, Suspense } from 'react';
import PersonnelHeader from '@/widgets/Personnel/PersonnelHeader';
import PersonnelSubNav from '@/widgets/Personnel/PersonnelSubNav';
import Loading from '@/components/Loading';

const PersonnelFilters = lazy(() => import('@/widgets/Personnel/PersonnelFilters'));
const PersonnelTable = lazy(() => import('@/widgets/Personnel/PersonnelTable'));

interface FilterState {
  year: string;
  discipline: string;
  breed: string;
  age: string;
  sex: string;
  class: string;
}

const Horses: React.FC = () => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
    year: 'All',
    discipline: 'All',
    breed: 'All',
    age: 'All',
    sex: 'All',
    class: 'All'
  });

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
    { id: 'buraak', rank: 1, horse: "BURAAK", age: 4, sex: "M", breed: "PUR SANG", races: 12, wins: 8, places: 2, earnings: "450.000", owners_premiums: "112.500", earnings_and_premiums: "562.500", earning_per_race: "37.500", rating: "95", year: "2025", discipline: "Flat", class: "Class 1" },
    { id: 'arrow-eagle', rank: 2, horse: "ARROW EAGLE", age: 5, sex: "M", breed: "PUR SANG", races: 15, wins: 6, places: 4, earnings: "320.000", owners_premiums: "80.000", earnings_and_premiums: "400.000", earning_per_race: "21.333", rating: "92", year: "2025", discipline: "Flat", class: "Class 1" },
    { id: 'desert-storm', rank: 3, horse: "DESERT STORM", age: 3, sex: "C", breed: "ARABIAN", races: 6, wins: 4, places: 1, earnings: "180.000", owners_premiums: "45.000", earnings_and_premiums: "225.000", earning_per_race: "30.000", rating: "88", year: "2024", discipline: "Jump", class: "Class 2" },
    { id: 'blue-ocean', rank: 4, horse: "BLUE OCEAN", age: 4, sex: "F", breed: "PUR SANG", races: 10, wins: 3, places: 5, earnings: "150.000", owners_premiums: "37.500", earnings_and_premiums: "187.500", earning_per_race: "15.000", rating: "85", year: "2025", discipline: "Flat", class: "Class 2" },
    { id: 'golden-sand', rank: 5, horse: "GOLDEN SAND", age: 6, sex: "G", breed: "PUR SANG", races: 22, wins: 5, places: 8, earnings: "210.000", owners_premiums: "52.500", earnings_and_premiums: "262.500", earning_per_race: "9.545", rating: "82", year: "2024", discipline: "Flat", class: "Class 3" },
    { id: 'velvet-night', rank: 6, horse: "VELVET NIGHT", age: 3, sex: "F", breed: "PUR SANG", races: 4, wins: 2, places: 1, earnings: "90.000", owners_premiums: "22.500", earnings_and_premiums: "112.500", earning_per_race: "22.500", rating: "80", year: "2025", discipline: "Jump", class: "Class 1" },
    { id: 'silver-wind', rank: 7, horse: "SILVER WIND", age: 5, sex: "H", breed: "ARABIAN", races: 14, wins: 3, places: 6, earnings: "125.000", owners_premiums: "31.250", earnings_and_premiums: "156.250", earning_per_race: "8.928", rating: "78", year: "2023", discipline: "Flat", class: "Class 2" },
    { id: 'thunder-bolt', rank: 8, horse: "THUNDER BOLT", age: 4, sex: "C", breed: "PUR SANG", races: 8, wins: 2, places: 3, earnings: "85.000", owners_premiums: "21.250", earnings_and_premiums: "106.250", earning_per_race: "10.625", rating: "76", year: "2024", discipline: "Jump", class: "Class 3" },
    { id: 'midnight-star', rank: 9, horse: "MIDNIGHT STAR", age: 3, sex: "F", breed: "ARABIAN", races: 5, wins: 3, places: 1, earnings: "95.000", owners_premiums: "23.750", earnings_and_premiums: "118.750", earning_per_race: "19.000", rating: "84", year: "2025", discipline: "Flat", class: "Class 1" },
    { id: 'royal-thunder', rank: 10, horse: "ROYAL THUNDER", age: 6, sex: "G", breed: "PUR SANG", races: 18, wins: 4, places: 7, earnings: "175.000", owners_premiums: "43.750", earnings_and_premiums: "218.750", earning_per_race: "9.722", rating: "79", year: "2023", discipline: "Jump", class: "Class 2" },
  ];

  const applyFiltersAndSearch = (filters?: FilterState, search?: string) => {
    let filtered = [...data];
    const currentSearch = search !== undefined ? search : searchTerm;
    const filtersToUse = filters || currentFilters;

    // Apply search filter first
    if (currentSearch.trim()) {
      filtered = filtered.filter(horse => 
        horse.horse.toLowerCase().includes(currentSearch.toLowerCase())
      );
    }

    // Apply other filters
    if (filtersToUse.year !== 'All') {
      filtered = filtered.filter(horse => horse.year === filtersToUse.year);
    }
    if (filtersToUse.discipline !== 'All') {
      filtered = filtered.filter(horse => horse.discipline === filtersToUse.discipline);
    }
    if (filtersToUse.breed !== 'All') {
      filtered = filtered.filter(horse => horse.breed === filtersToUse.breed);
    }
    if (filtersToUse.age !== 'All') {
      if (filtersToUse.age === '6+') {
        filtered = filtered.filter(horse => horse.age >= 6);
      } else {
        filtered = filtered.filter(horse => horse.age === parseInt(filtersToUse.age));
      }
    }
    if (filtersToUse.sex !== 'All') {
      filtered = filtered.filter(horse => horse.sex === filtersToUse.sex);
    }
    if (filtersToUse.class !== 'All') {
      filtered = filtered.filter(horse => horse.class === filtersToUse.class);
    }

    // Re-rank the filtered results
    const rankedFiltered = filtered.map((horse, index) => ({
      ...horse,
      rank: index + 1
    }));

    setFilteredData(rankedFiltered);
  };

  const handleFilterChange = (filters: FilterState) => {
    setCurrentFilters(filters);
    applyFiltersAndSearch(filters);
  };

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    applyFiltersAndSearch(undefined, search);
  };

  // Initialize with all data
  useEffect(() => {
    applyFiltersAndSearch();
  }, []);

  return (
    <>
      <PersonnelSubNav />
      <PersonnelHeader title="Horses" placeholder="Enter the name of a horses" onSearch={handleSearch} />
      <Suspense fallback={<Loading />}>
        <PersonnelFilters onFilterChange={handleFilterChange} />
        <PersonnelTable headers={headers} data={filteredData} linkPrefix="/personnel/horse" />
      </Suspense>
    </>
  );
};

export default Horses;
