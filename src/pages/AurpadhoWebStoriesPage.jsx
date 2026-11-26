import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aurPadhoWebStoriesList } from '../data/aurPadhoWebStories';

export default function AurpadhoWebStoriesPage() {
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    document.title = 'वेब स्टोरीज़ | नवभारत';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, aurPadhoWebStoriesList.length));
  };

  const displayedStories = aurPadhoWebStoriesList.slice(0, visibleCount);

  return (
    <div className="ws-page-wrapper" data-testid="aurpadho-webstories-page">
      <main className="wrap">
        {/* Section Heading with Red Bar */}
        <h1 className="section-title">वेब स्टोरीज़</h1>

        {/* 6-Column 9:16 Portrait Grid */}
        <section className="stories" id="stories">
          {displayedStories.map((story) => (
            <Link 
              key={story.id} 
              to={story.url || "/news"} 
              className="story"
              title={story.headline}
            >
              {/* Colorful gradient placeholder */}
              <div 
                className="ph" 
                style={{ background: story.gradient }} 
              />
              
              {/* High-res Image overlay */}
              <img 
                src={story.imageUrl} 
                alt={story.headline} 
                loading="lazy"
                onError={(e) => { 
                  // If image fails, keep clean gradient visible
                  e.currentTarget.style.display = 'none'; 
                }}
              />

              {/* Frosted Glass Floating Caption */}
              <div className="cap">
                {story.headline}
              </div>
            </Link>
          ))}
        </section>

        {/* Load More Button */}
        {visibleCount < aurPadhoWebStoriesList.length && (
          <button 
            type="button" 
            className="more" 
            id="moreBtn"
            onClick={handleLoadMore}
          >
            और पढ़ें
          </button>
        )}
      </main>
    </div>
  );
}

// Named alias export matching user's requested naming convention
export { AurpadhoWebStoriesPage as aurpadhoWebStoriesPage };
