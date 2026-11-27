import React from 'react';
import { Link } from 'react-router-dom';
import { videoData } from '../data/videos';

export default function VideoSection() {
  return (
    <section className="video-section" aria-label="वीडियो">
      <div className="center-container">
        
        {/* Section Header: Left Title with Red Bar, Right Pill 'और पढ़ें' */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>वीडियो</span>
          </h2>
          <Link 
            to="/video" 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4x2 Video Grid */}
        <div className="video-grid-4col">
          {videoData.map((item) => (
            <article key={item.id} className="video-item-card">
              <Link to={item.url || "/video"} className="video-thumb-link">
                <div className="video-thumb-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="video-card-body">
                <h3 className="video-card-title">
                  <Link to={item.url || "/video"}>{item.title}</Link>
                </h3>
                <div className="video-card-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
