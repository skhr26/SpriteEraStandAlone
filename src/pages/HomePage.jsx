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

export default function HomePage() {
  return (
    <div className="home-page-container">
      <LeadGrid />
      <LatestNews />
      <ViralNews />
      <WebStories />
      <CategoryTrio />
      <StateNews />
      <DharmSection />
      <VideoSection />
      <VisheshSection />
      <EntertainmentSection />
      <CareerSection />
      <PhotoSection />
      <LifestyleSection />
      <TechnologySection />
    </div>
  );
}