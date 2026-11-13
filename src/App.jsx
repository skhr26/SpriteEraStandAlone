import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import LeadGrid from './components/LeadGrid';
import LatestNews from './components/LatestNews';
import ViralNews from './components/ViralNews';
import WebStories from './components/WebStories';
import CategoryTrio from './components/CategoryTrio';
import StateNews from './components/StateNews';
import DharmSection from './components/DharmSection';
import VideoSection from './components/VideoSection';
import VisheshSection from './components/VisheshSection';
import EntertainmentSection from './components/EntertainmentSection';
import CareerSection from './components/CareerSection';
import PhotoSection from './components/PhotoSection';
import LifestyleSection from './components/LifestyleSection';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer';
import NotificationBell from './components/NotificationBell';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('navbharat_theme') === 'dark';
  });

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
      {/* 1. Full-Width 2-Row Header (Topbar + Navbar) */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Content Area */}
      <main className="main-body-content">
        {/* 2. Full-Width Breaking News Ticker & Google Ads Leaderboard */}
        <BreakingTicker />

        {/* 3. Lead 3-Column Stories Grid (#four-col-grid-lead) with balanced bottom baseline */}
        <LeadGrid />

        {/* 4. Section: ताजा खबर (Latest News - 4-Col Grid) */}
        <LatestNews />

        {/* 5. Section: वायरल (Viral Videos with Play Badges - 4-Col Grid) */}
        <ViralNews />

        {/* 6. Section: वेब स्टोरीज़ (Web Stories - 9:16 Portrait Slider) */}
        <WebStories />

        {/* 7. Section: बिज़नेस | खेल | क्राइम (Category Trio - 3-Col Grid) */}
        <CategoryTrio />

        {/* 8. Section: राज्य विशेष (State News with Left Vertical State Tabs) */}
        <StateNews />

        {/* 9. Section: धर्म (Dharm - 3x2 Grid with 5 Cards + 1 Ad box) */}
        <DharmSection />

        {/* 10. Section: वीडियो (Video - Greyish Background, 4x2 Grid of 8 Cards) */}
        <VideoSection />

        {/* 11. Section: नवभारत विशेष (Navbharat Vishesh - 4 Editorial Cards) */}
        <VisheshSection />

        {/* 12. Section: मनोरंजन (Entertainment - 4x2 Grid of 8 Cards) */}
        <EntertainmentSection />

        {/* 13. Section: करियर (Career - Top Ad Banner + 6 Cards Single Row) */}
        <CareerSection />

        {/* 14. Section: फोटो (Photo Gallery - 4-Col Row) */}
        <PhotoSection />

        {/* 15. Section: लाइफस्टाइल (Lifestyle - 4-Col Grid) */}
        <LifestyleSection />

        {/* 16. Section: टेक्नॉलजी (Technology - 4-Col Grid) */}
        <TechnologySection />
      </main>

      {/* Floating Notification Bell */}
      <NotificationBell />

      {/* 17. Site Footer with Slider Dots, Ad Box, Logo, 6 Directory Columns & Legal Bar */}
      <Footer />
    </div>
  );
}
