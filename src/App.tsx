import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('@/pages/About'));
const News = lazy(() => import('@/pages/News'));
const NewsDetail = lazy(() => import('@/pages/NewsDetail'));
const Services = lazy(() => import('@/pages/Services'));
const Contacts = lazy(() => import('@/pages/Contact'));
const Races = lazy(() => import('@/pages/Races'));
const RaceDetail = lazy(() => import('@/pages/RaceDetail'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Owners = lazy(() => import('@/pages/Personnel/Owners'));
const Jockeys = lazy(() => import('@/pages/Personnel/Jockeys'));
const Trainers = lazy(() => import('@/pages/Personnel/Trainers'));
const Horses = lazy(() => import('@/pages/Personnel/Horses'));
const HorseDetail = lazy(() => import('@/pages/Personnel/HorseDetail'));
const OwnerDetail = lazy(() => import('@/pages/Personnel/OwnerDetail'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/races" element={<Races />} />
            <Route path="/races/:slug" element={<RaceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/personnel/owners" element={<Owners />} />
            <Route path="/personnel/jockeys" element={<Jockeys />} />
            <Route path="/personnel/trainers" element={<Trainers />} />
            <Route path="/personnel/horses" element={<Horses />} />
            <Route path="/personnel/horse/:id" element={<HorseDetail />} />
            <Route path="/personnel/owner/:id" element={<OwnerDetail />} />
            {/* Redirect for the main section link */}
            <Route path="/personnel" element={<Horses />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
