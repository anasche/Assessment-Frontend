import React, { lazy, Suspense } from 'react';
import Hero from '@/widgets/Home/Hero/Hero';
import Loading from '@/components/Loading';

// Lazy load widgets that are below the fold
const LiveEvent = lazy(() => import('@/widgets/Home/LiveEvent/LiveEvent'));
const News = lazy(() => import('@/widgets/Home/News/News'));
const BookExperience = lazy(() => import('@/widgets/Home/BookExperience/BookExperience'));
const EventsCalendar = lazy(() => import('@/widgets/Home/EventsCalendar/EventsCalendar'));
const Winners = lazy(() => import('@/widgets/Home/Winners/Winners'));
const FAQ = lazy(() => import('@/widgets/Home/FAQ/FAQ'));

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <LiveEvent />
        <News />
        <BookExperience />
        <EventsCalendar />
        <Winners />
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
