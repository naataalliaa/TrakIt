import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Interview from './components/Interview/Interview';



const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/interview" element={<Interview />} />
     
      {/* <Route path="/calendar_page" element={<Calendar_Page />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
