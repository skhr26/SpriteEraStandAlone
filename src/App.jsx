import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import Footer from './components/Footer';
import NotificationBell from './components/NotificationBell';
import HomePage from './pages/HomePage';
import TazaKhabarPage from './pages/TazaKhabarPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('navbharat_theme') === 'dark';
  });

  // Default to 'home' so the original HomePage renders first when visiting the site
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#latest') {
      return 'latest';
    }
    return 'home';
  });

  const navigateToLatest = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setActivePage('latest');
    window.location.hash = 'latest';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const navigateToHome = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setActivePage('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#latest') {
        setActivePage('latest');
      } else if (window.location.hash === '#home' || !window.location.hash) {
        setActivePage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('navbharat_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('navbharat_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      {/* 1. Full-Width 2-Row Header (Topbar + Navbar with dynamic tab switching) */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activePage={activePage}
        setActivePage={setActivePage}
        onNavigateToHome={navigateToHome}
        onNavigateToLatest={navigateToLatest}
      />

      {/* Main Content Area */}
      <main className="main-body-content">
        {/* 2. Full-Width Breaking News Ticker with react-fast-marquee */}
        <BreakingTicker />

        {/* Dynamic Page View: TazaKhabarPage (Matching user screenshots) or HomePage */}
        {activePage === 'home' ? (
          <HomePage onNavigateToLatest={navigateToLatest} />
        ) : (
          <TazaKhabarPage onNavigateToHome={navigateToHome} />
        )}
      </main>

      {/* Floating Notification Bell */}
      <NotificationBell />

      {/* Site Footer with Slider Dots, Ad Box, Logo, Directory & Copyright Bar */}
      <Footer />
    </div>
  );
}
