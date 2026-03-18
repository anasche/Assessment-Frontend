import React from 'react';
import AboutHero from '@/widgets/About/AboutHero/AboutHero';
import BoardMembers from '@/widgets/About/BoardMembers/BoardMembers';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <BoardMembers />
    </>
  );
};

export default About;
