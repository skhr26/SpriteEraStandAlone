import React from 'react';
import { Link } from 'react-router-dom';
import { webStoriesList } from '../data/webStories';

export default function WebStories() {
  return (
    <section className="news-grid-section" id="webstories" aria-label="Web Stories">
      <div className="center-container">
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="section-indicator"></span>
            <h2 className="section-title">वेब स्टोरीज़</h2>
          </div>
          <Link 
            to="/ampstories/web-stories" 
            className="ws-pill-more-btn"
            title="और पढ़ें"
          >
            और पढ़ें
          </Link>
        </div>

        {/* Exactly 6 Portrait (9:16) Cards strictly filling 1 row matching Image 3 */}
        <div className="web-stories-slider" data-slot="web-stories-grid">
          {webStoriesList.slice(0, 6).map((story) => (
            <Link 
              key={story.id} 
              to={story.url || (story.slug ? `/ampstories/web-stories/${story.slug}` : `/web-story/${story.id}`)} 
              className="web-story-card" 
              data-slot="web-story"
            >
              <img 
                src={story.imageUrl} 
                alt={story.headline} 
                className="web-story-bg" 
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
              />
              <div className="web-story-frosted-cap">
                {story.headline}
              </div>
            </Link>
          ))}
        </div>

        {/* Influencer Nominate Banner strictly matching Image 3 */}
        <div className="web-stories-bottom-ad-wrap">
          <img 
            src="/assets/navbharat-reels-influencer-ad.jpg" 
            alt="नवभारत From Reels to Recognition! Honouring Influencers Beyond the Buzz Nominate Yourself Now!" 
            className="web-stories-bottom-ad-img" 
          />
        </div>
      </div>
    </section>
  );
}
