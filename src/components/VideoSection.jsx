import React from 'react';
import { videoData } from '../data/videos';

export default function VideoSection() {
  return (
    <section className="video-section-grey-wrap" aria-label="वीडियो समाचार">
      <div className="center-container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>वीडियो</span>
          </h2>
          <a href="#videos" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 4x2 Video Grid */}
        <div className="video-grid-4col">
          {videoData.map((item) => (
            <article key={item.id} className="video-item-card">
              <a href={item.url} className="video-thumb-link">
                <div className="video-thumb-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </a>
              <div className="video-card-body">
                <h3 className="video-card-title">
                  <a href={item.url}>{item.title}</a>
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
