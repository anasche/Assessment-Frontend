import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import About from '@/pages/About';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Services from '@/pages/Services';
import Contacts from '@/pages/Contact';
import Home from './pages/Home';
import Races from '@/pages/Races';
import RaceDetail from '@/pages/RaceDetail';
import Gallery from '@/pages/Gallery';
import Owners from '@/pages/Personnel/Owners';
import Jockeys from '@/pages/Personnel/Jockeys';
import Trainers from '@/pages/Personnel/Trainers';
import Horses from '@/pages/Personnel/Horses';
import HorseDetail from '@/pages/Personnel/HorseDetail';
import OwnerDetail from '@/pages/Personnel/OwnerDetail';

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
