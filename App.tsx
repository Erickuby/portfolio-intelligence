import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Toolkit } from './pages/Toolkit';
import { DashboardDemo } from './pages/DashboardDemo';

import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Affiliate } from './pages/Affiliate';

import { Tools } from './pages/Tools';
import { Resources } from './pages/Resources';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { CourseSyllabus } from './pages/CourseSyllabus';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/dashboard-demo" element={<DashboardDemo />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-syllabus" element={<CourseSyllabus />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;