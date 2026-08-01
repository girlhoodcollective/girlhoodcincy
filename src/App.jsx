import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageViewTracker from './components/PageViewTracker.jsx';
import Gateway from './pages/Gateway.jsx';
import Community from './pages/Community.jsx';
import HomepageV2 from './pages/HomepageV2.jsx';
import Events from './pages/Events.jsx';
import Village from './pages/Village.jsx';
import Resources from './pages/Resources.jsx';
import ConsultationIntake from './pages/ConsultationIntake.jsx';
import WorthQuiz from './pages/WorthQuiz.jsx';
import BetterTogetherRecap from './pages/BetterTogetherRecap.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/community" element={<Community />} />
        <Route path="/homepage-v2" element={<HomepageV2 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/village" element={<Village />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/consultation-intake" element={<ConsultationIntake />} />
        <Route path="/worth-quiz" element={<WorthQuiz />} />
        <Route path="/better-together-recap" element={<BetterTogetherRecap />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
