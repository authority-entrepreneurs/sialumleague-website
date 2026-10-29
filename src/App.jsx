import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Schedule from './pages/Schedule.jsx';
import Standings from './pages/Standings.jsx';
import Rules from './pages/Rules.jsx';
import SignUp from './pages/SignUp.jsx';
import Stats from './pages/Stats.jsx';
import PastResults from './pages/PastResults.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="standings" element={<Standings />} />
        <Route path="rules" element={<Rules />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="stats" element={<Stats />} />
        <Route path="past-results" element={<PastResults />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
