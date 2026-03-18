import React, { lazy, Suspense } from 'react';
import AboutHero from '@/widgets/About/AboutHero/AboutHero';
import Loading from '@/components/Loading';

const BoardMembers = lazy(() => import('@/widgets/About/BoardMembers/BoardMembers'));

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <Suspense fallback={<Loading />}>
        <BoardMembers />
      </Suspense>
    </>
  );
};

export default About;
