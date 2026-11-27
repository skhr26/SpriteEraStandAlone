import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';

import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import Footer from './components/Footer';
import NotificationBell from './components/NotificationBell';
import HomePage from './pages/HomePage';
import AurPadhoPage from './pages/AurPadhoPage';
import AurpadhoWebStoriesPage from './pages/AurpadhoWebStoriesPage';
import WebStoryViewerPage from './pages/WebStoryViewerPage';
import CricketArticlePage from './pages/CricketArticlePage';
import { pathToCategory } from './data/routeMap';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search]);

  return null;
}

/**
 * Dispatches between State City pages (e.g. /state/maharashtra/nagpur -> AurPadhoPage)
 * and State Article slugs (e.g. /state/maharashtra/article-slug -> CricketArticlePage)
 */
function StateRouteDispatcher() {
  const { stateSlug, citySlug } = useParams();
  const path = `/state/${stateSlug}/${citySlug}`;
  if (pathToCategory[path] || pathToCategory['/' + citySlug]) {
    return <AurPadhoPage />;
  }
  return <CricketArticlePage />;
}

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('navbharat_theme') === 'dark';
  });

  const isWebStoriesListing = location.pathname === '/ampstories/web-stories' || 
                              location.pathname === '/web-stories' || 
                              location.pathname === '/webstories' || 
                              location.pathname === '/aurpadho-webstories' ||
                              location.pathname === '/aurpadhowebstories';

  const isStoryPlayer = !isWebStoriesListing && (
    location.pathname.startsWith('/ampstories/web-stories/') ||
    (location.pathname.startsWith('/ampstories/') && location.pathname !== '/ampstories/web-stories') ||
    location.pathname.startsWith('/web-story') || 
    location.pathname.startsWith('/webstory') || 
    location.pathname.includes('/player')
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('navbharat_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-container">
      <ScrollToTop />

      {!isStoryPlayer && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}

      <main className="main-body-content">
        {!isStoryPlayer && <BreakingTicker />}

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* ── Official Navbharat Live Categories (Clean SEO URLs) ── */}
          <Route path="/latest-news" element={<AurPadhoPage />} />
          <Route path="/india" element={<AurPadhoPage />} />
          <Route path="/world" element={<AurPadhoPage />} />
          <Route path="/sports" element={<AurPadhoPage />} />
          <Route path="/entertainment" element={<AurPadhoPage />} />
          <Route path="/business" element={<AurPadhoPage />} />
          <Route path="/lifestyle" element={<AurPadhoPage />} />
          <Route path="/astro" element={<AurPadhoPage />} />
          <Route path="/astro/aaj-ka-rashifal" element={<AurPadhoPage />} />
          <Route path="/astro/daily-horoscope" element={<AurPadhoPage />} />
          <Route path="/astro/saptahik-rashifal" element={<AurPadhoPage />} />
          <Route path="/astro/weekly-horoscope" element={<AurPadhoPage />} />
          <Route path="/astro/panchang" element={<AurPadhoPage />} />
          <Route path="/astro/ank-jyotish" element={<AurPadhoPage />} />
          <Route path="/astro/numerology" element={<AurPadhoPage />} />
          <Route path="/rashifal" element={<AurPadhoPage />} />
          <Route path="/panchang" element={<AurPadhoPage />} />
          <Route path="/dharm" element={<AurPadhoPage />} />
          <Route path="/viral" element={<AurPadhoPage />} />
          <Route path="/career" element={<AurPadhoPage />} />
          <Route path="/auto" element={<AurPadhoPage />} />
          <Route path="/tech" element={<AurPadhoPage />} />
          <Route path="/technology" element={<AurPadhoPage />} />
          <Route path="/video" element={<AurPadhoPage />} />
          <Route path="/videos" element={<AurPadhoPage />} />
          <Route path="/photo" element={<AurPadhoPage />} />
          <Route path="/photos" element={<AurPadhoPage />} />

          {/* ── Official State & City Editions ── */}
          <Route path="/state/maharashtra" element={<AurPadhoPage />} />
          <Route path="/state/madhya-pradesh" element={<AurPadhoPage />} />
          <Route path="/state/uttar-pradesh" element={<AurPadhoPage />} />
          <Route path="/state/chhattisgarh" element={<AurPadhoPage />} />
          <Route path="/state/delhi-ncr" element={<AurPadhoPage />} />
          <Route path="/state/bihar" element={<AurPadhoPage />} />
          <Route path="/maharashtra" element={<AurPadhoPage />} />
          <Route path="/madhya-pradesh" element={<AurPadhoPage />} />
          <Route path="/uttar-pradesh" element={<AurPadhoPage />} />
          <Route path="/chhattisgarh" element={<AurPadhoPage />} />
          <Route path="/delhi-ncr" element={<AurPadhoPage />} />
          <Route path="/bihar" element={<AurPadhoPage />} />
          
          <Route path="/state/:stateSlug" element={<AurPadhoPage />} />
          <Route path="/state/:stateSlug/:citySlug" element={<StateRouteDispatcher />} />

          {/* ── Web Stories (Listing & Full-Screen Player) ── */}
          <Route path="/ampstories/web-stories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/ampstories/web-stories/:slug" element={<WebStoryViewerPage />} />
          <Route path="/ampstories/:type/:slug" element={<WebStoryViewerPage />} />
          <Route path="/web-stories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/webstories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/web-story/:storyId?" element={<WebStoryViewerPage />} />
          <Route path="/webstory/:storyId?" element={<WebStoryViewerPage />} />
          <Route path="/web-stories/player/:storyId?" element={<WebStoryViewerPage />} />
          <Route path="/webstories/player/:storyId?" element={<WebStoryViewerPage />} />
          <Route path="/aurpadho-webstories" element={<AurpadhoWebStoriesPage />} />
          <Route path="/aurpadhowebstories" element={<AurpadhoWebStoriesPage />} />

          {/* ── Official Quintype News Article Slugs (e.g. /sports/cricket/slug or /india/slug) ── */}
          <Route path="/news" element={<CricketArticlePage />} />
          <Route path="/news/:slug" element={<CricketArticlePage />} />
          <Route path="/state/:stateSlug/:citySlug/:slug" element={<CricketArticlePage />} />
          <Route path="/:category/:subSection/:slug" element={<CricketArticlePage />} />
          <Route path="/:category/:slug" element={<CricketArticlePage />} />

          {/* ── Backward Compatibility ── */}
          <Route path="/aur-padho" element={<AurPadhoPage />} />
          <Route path="/aurpadho" element={<AurPadhoPage />} />
          <Route path="/taazakhabar" element={<AurPadhoPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isStoryPlayer && <NotificationBell />}
      {!isStoryPlayer && <Footer />}
    </div>
  );
}