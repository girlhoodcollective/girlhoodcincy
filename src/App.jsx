import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Village from './pages/Village.jsx';
import WorkTogether from './pages/WorkTogether.jsx';
import Resources from './pages/Resources.jsx';
import Contact from './pages/Contact.jsx';
import ConsultationIntake from './pages/ConsultationIntake.jsx';
import WorthQuiz from './pages/WorthQuiz.jsx';
import BetterTogetherRecap from './pages/BetterTogetherRecap.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/village" element={<Village />} />
        <Route path="/work-together" element={<WorkTogether />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation-intake" element={<ConsultationIntake />} />
        <Route path="/worth-quiz" element={<WorthQuiz />} />
        <Route path="/better-together-recap" element={<BetterTogetherRecap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
