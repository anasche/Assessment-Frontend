import React, { useEffect } from 'react';
import RacesHeader from '@/widgets/Races/RacesHeader';
import UpcomingRace from '@/widgets/Races/UpcomingRace';
import RaceGrid from '@/widgets/Races/RaceGrid';

const Races: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RacesHeader />
      <UpcomingRace />
      <RaceGrid />
    </>
  );
};

export default Races;
