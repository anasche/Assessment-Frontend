import React from 'react';
import Hero from '@/widgets/Home/Hero/Hero';
import LiveEvent from '@/widgets/Home/LiveEvent/LiveEvent';
import News from '@/widgets/Home/News/News';
import BookExperience from '@/widgets/Home/BookExperience/BookExperience';
import EventsCalendar from '@/widgets/Home/EventsCalendar/EventsCalendar';
import Winners from '@/widgets/Home/Winners/Winners';
import FAQ from '@/widgets/Home/FAQ/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LiveEvent />
      <News />
      <BookExperience />
      <EventsCalendar />
      <Winners />
      <FAQ />
    </>
  );
};

export default Home;
