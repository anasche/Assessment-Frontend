import React, { useEffect, lazy, Suspense } from 'react';
import RacesHeader from '@/widgets/Races/RacesHeader';
import Loading from '@/components/Loading';

const UpcomingRace = lazy(() => import('@/widgets/Races/UpcomingRace'));
const RaceGrid = lazy(() => import('@/widgets/Races/RaceGrid'));

const Races: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RacesHeader />
      <Suspense fallback={<Loading />}>
        <UpcomingRace />
        <RaceGrid />
      </Suspense>
    </>
  );
};

export default Races;
