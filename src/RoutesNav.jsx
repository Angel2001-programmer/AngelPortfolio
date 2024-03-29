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
        path='/'
        element={<Home />}
      />
      <Route
        exact
        path='/project'
        element={<Project />}
      />
      <Route
        exact
        path='/certificates'
        element={<Certificate />}
      />
      <Route
        exact
        path='/resume'
        element={<Resume />}
      />
      <Route
        exact
        path='/testimonials'
        element={<Testimonial />}
      />
    </Routes>
  );
};

export default RoutesNav;
