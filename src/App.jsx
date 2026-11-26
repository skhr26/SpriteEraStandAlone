import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import Footer from './components/Footer';
import NotificationBell from './components/NotificationBell';
import HomePage from './pages/HomePage';
import AurPadhoPage from './pages/AurPadhoPage';
import AurpadhoWebStoriesPage from './pages/AurpadhoWebStoriesPage';
import CricketArticlePage from './pages/CricketArticlePage';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search]);

  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('navbharat_theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('navbharat_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-container">
      <ScrollToTop />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main-body-content">
        <BreakingTicker />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aur-padho" element={<AurPadhoPage />} />
          <Route path="/aurpadho" element={<AurPadhoPage />} />
          <Route path="/taazakhabar" element={<AurPadhoPage />} />
          <Route path="/aurpadho-webstories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/aurpadhowebstories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/web-stories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/webstories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/news" element={<CricketArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <NotificationBell />
      <Footer />
    </div>
  );
}