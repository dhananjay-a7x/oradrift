import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PricingSection from './components/pricing/PricingSection';
import FAQ from './components/home/FAQ';
import BlogGrid from './components/blog/BlogGrid';
import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;