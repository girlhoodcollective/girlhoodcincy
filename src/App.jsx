import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Newsletter from './pages/Newsletter.jsx';
import WorkWithMe from './pages/WorkWithMe.jsx';
import Tools from './pages/Tools.jsx';
import UGC from './pages/UGC.jsx';
import Partners from './pages/Partners.jsx';
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
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/consultation-intake" element={<ConsultationIntake />} />
        <Route path="/worth-quiz" element={<WorthQuiz />} />
        <Route path="/better-together-recap" element={<BetterTogetherRecap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
