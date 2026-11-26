import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
// Importing content from separate viral.js file as requested
import { viralStories } from '../data/viral';

export default function ViralNews() {
  return (
    <section className="news-grid-section" id="viral" aria-label="Viral News Grid">
      <div className="center-container">
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="section-indicator"></span>
            <h2 className="section-title">वायरल</h2>
          </div>
          <Link 
            to="/aur-padho?category=वायरल" 
            state={{ category: "वायरल" }} 
            className="section-more-link"
          >
            <span>और पढ़ें</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* 4-Column Responsive Grid mapped from viral.js content */}
        <div className="four-col-grid" data-slot="viral-news-grid">
          {viralStories.map((story) => (
            <article key={story.id} className="news-card-v" data-slot="viral-card">
              <Link to="/news" className="card-img-wrap">
                <img 
                  src={story.imageUrl} 
                  alt={story.headline} 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                />
                
                {/* Red Circular Play Button Overlay */}
                <div className="video-play-overlay">
                  <div className="play-circle">
                    <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="video-duration">{story.duration}</span>
              </Link>

              <div className="card-v-body">
                <span className="card-badge-pill">{story.section}</span>
                <h3 className="card-v-title">
                  <Link to="/news">{story.headline}</Link>
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
