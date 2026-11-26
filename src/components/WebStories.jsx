import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
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
            to="/aurpadho-webstories" 
            className="section-more-link"
            title="और पढ़ें"
          >
            <span>और पढ़ें</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* 6 Portrait (9:16) Cards mapped via webStoriesList.map() */}
        <div className="web-stories-slider" data-slot="web-stories-grid">
          {webStoriesList.map((story) => (
            <Link 
              key={story.id} 
              to="/news" 
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
              <div className="web-story-gradient" />
              <div className="web-story-badge">
                <span>📑 {story.slidesCount}</span>
              </div>
              <div className="web-story-info">
                <span className="web-story-tag">{story.section}</span>
                <h3 className="web-story-title">{story.headline}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
