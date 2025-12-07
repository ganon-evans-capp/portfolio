import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './imports/HomePage';
import AboutPage from './imports/AboutPage';
import Resume from './imports/Resume';
import Media from './imports/Media';
import CappProjects from './imports/CappProjects';
import DataJournalism from './imports/DataJournalism';
import QuizbowlHome from './imports/QuizbowlHome';
import QuizbowlResume from './imports/QuizbowlResume';
import FavoriteQuestions from './imports/FavoriteQuestions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/media" element={<Media />} />
        <Route path="/capp" element={<CappProjects />} />
        <Route path="/data-journalism" element={<DataJournalism />} />
        <Route path="/quizbowl" element={<QuizbowlHome />} />
        <Route path="/quizbowl/resume" element={<QuizbowlResume />} />
        <Route path="/quizbowl/questions" element={<FavoriteQuestions />} />
      </Routes>
    </Router>
  );
}
