import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageViewTracker from './components/PageViewTracker.jsx';
import Gateway from './pages/Gateway.jsx';
import Community from './pages/Community.jsx';
import Services from './pages/HomepageV2.jsx';
import Events from './pages/Events.jsx';
import Village from './pages/Village.jsx';
import Resources from './pages/Resources.jsx';
import ConsultationIntake from './pages/ConsultationIntake.jsx';
import WorthQuiz from './pages/WorthQuiz.jsx';
import BetterTogetherRecap from './pages/BetterTogetherRecap.jsx';
import HelpingHands from './pages/HelpingHands.jsx';
import EventCollaboration from './pages/EventCollaboration.jsx';
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
        <Route path="/services" element={<Services />} />
        <Route path="/homepage-v2" element={<Navigate to="/services" replace />} />
        <Route path="/events" element={<Events />} />
        <Route path="/village" element={<Village />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/consultation-intake" element={<ConsultationIntake />} />
        <Route path="/worth-quiz" element={<WorthQuiz />} />
        <Route path="/better-together-recap" element={<BetterTogetherRecap />} />
        <Route path="/helping-hands" element={<HelpingHands />} />
        <Route path="/event-collaboration" element={<EventCollaboration />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
