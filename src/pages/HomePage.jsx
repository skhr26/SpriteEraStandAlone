import React from 'react';
import LeadGrid from '../components/LeadGrid';
import LatestNews from '../components/LatestNews';
import ViralNews from '../components/ViralNews';
import WebStories from '../components/WebStories';
import CategoryTrio from '../components/CategoryTrio';
import StateNews from '../components/StateNews';
import DharmSection from '../components/DharmSection';
import VideoSection from '../components/VideoSection';
import VisheshSection from '../components/VisheshSection';
import EntertainmentSection from '../components/EntertainmentSection';
import CareerSection from '../components/CareerSection';
import PhotoSection from '../components/PhotoSection';
import LifestyleSection from '../components/LifestyleSection';
import TechnologySection from '../components/TechnologySection';

export default function HomePage({ onNavigateToLatest }) {
  return (
    <div className="home-page-container">
      {/* 1. Lead 3-Column Stories Grid (#four-col-grid-lead) */}
      <LeadGrid onNavigateToLatest={onNavigateToLatest} />

      {/* 2. Section: ताजा खबर (Latest News - 4-Col Grid) */}
      <LatestNews onNavigateToLatest={onNavigateToLatest} />

      {/* 3. Section: वायरल (Viral Videos with Play Badges - 4-Col Grid) */}
      <ViralNews onNavigateToLatest={onNavigateToLatest} />

      {/* 4. Section: वेब स्टोरीज़ (Web Stories - 9:16 Portrait Slider) */}
      <WebStories onNavigateToLatest={onNavigateToLatest} />

      {/* 5. Section: बिज़नेस | खेल | क्राइम (Category Trio - 3-Col Grid) */}
      <CategoryTrio onNavigateToLatest={onNavigateToLatest} />

      {/* 6. Section: राज्य विशेष (State News with Left Vertical State Tabs) */}
      <StateNews onNavigateToLatest={onNavigateToLatest} />

      {/* 7. Section: धर्म (Dharm - 3x2 Grid with 5 Cards + 1 Ad box) */}
      <DharmSection onNavigateToLatest={onNavigateToLatest} />

      {/* 8. Section: वीडियो (Video - Greyish Background, 4x2 Grid of 8 Cards) */}
      <VideoSection onNavigateToLatest={onNavigateToLatest} />

      {/* 9. Section: नवभारत विशेष (Navbharat Vishesh - 4 Editorial Cards) */}
      <VisheshSection onNavigateToLatest={onNavigateToLatest} />

      {/* 10. Section: मनोरंजन (Entertainment - 4x2 Grid of 8 Cards) */}
      <EntertainmentSection onNavigateToLatest={onNavigateToLatest} />

      {/* 11. Section: करियर (Career - Top Ad Banner + 6 Cards Single Row) */}
      <CareerSection onNavigateToLatest={onNavigateToLatest} />

      {/* 12. Section: फोटो (Photo Gallery - 4-Col Row) */}
      <PhotoSection onNavigateToLatest={onNavigateToLatest} />

      {/* 13. Section: लाइफस्टाइल (Lifestyle - 4-Col Grid) */}
      <LifestyleSection onNavigateToLatest={onNavigateToLatest} />

      {/* 14. Section: टेक्नॉलजी (Technology - 4-Col Grid) */}
      <TechnologySection onNavigateToLatest={onNavigateToLatest} />
    </div>
  );
}
