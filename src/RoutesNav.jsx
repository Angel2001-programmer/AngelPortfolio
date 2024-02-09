import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/projects';
import Testimonial from './pages/testimonials';
import Resume from './pages/resume';
import Certificate from './pages/certificates';

const RoutesNav = () => {
  return (
    <Routes>
      <Route
        exact
        path='/AngelPortfolio/'
        element={<Home />}
      />
      <Route
        exact
        path='/AngelPortfolio/project'
        element={<Project />}
      />
      <Route
        exact
        path='/AngelPortfolio/certificates'
        element={<Certificate />}
      />
      <Route
        exact
        path='/AngelPortfolio/resume'
        element={<Resume />}
      />
      <Route
        exact
        path='/AngelPortfolio/testimonials'
        element={<Testimonial />}
      />
    </Routes>
  );
};

export default RoutesNav;
