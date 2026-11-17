import React from 'react';
import { ChevronRight } from 'lucide-react';
import { latestStories } from '../data/latest';

export default function LatestNews({ onNavigateToLatest }) {
  return (
    <section className="news-grid-section" id="latest-news-section" aria-label="Latest News Grid">
      <div className="center-container">
        <div className="section-header">
          <div 
            className="section-title-wrap" 
            style={{ cursor: 'pointer' }}
            onClick={onNavigateToLatest}
            title="ताजा खबर पेज देखें"
          >
            <span className="section-indicator"></span>
            <h2 className="section-title">ताजा खबर</h2>
          </div>
          <a 
            href="#latest" 
            onClick={onNavigateToLatest} 
            className="section-more-link"
            title="ताजा खबर पेज देखें"
          >
            <span>और पढ़ें</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* 4-Column Responsive Grid mapped via latestStories.map() */}
        <div className="four-col-grid" data-slot="latest-news-grid">
          {latestStories.map((story) => (
            <article key={story.id} className="news-card-v" data-slot="news-card">
              <a 
                href="#latest" 
                onClick={onNavigateToLatest} 
                className="card-img-wrap"
                title="ताजा खबर पढ़ें"
              >
                <img 
                  src={story.imageUrl} 
                  alt={story.headline} 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                />
              </a>
              <div className="card-v-body">
                <span className="card-badge-pill">{story.section}</span>
                <h3 className="card-v-title">
                  <a href="#latest" onClick={onNavigateToLatest}>{story.headline}</a>
                </h3>
                <div className="card-meta">
                  <span className="card-author">{story.author}</span>
                  <span>•</span>
                  <span className="card-time">{story.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
