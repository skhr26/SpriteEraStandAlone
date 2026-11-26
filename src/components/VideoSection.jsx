import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            to="/aur-padho?category=वीडियो" 
            state={{ category: "वीडियो" }} 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4x2 Video Grid */}
        <div className="video-grid-4col">
          {videoData.map((item) => (
            <article key={item.id} className="video-item-card">
              <Link to="/news" className="video-thumb-link">
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
                  <Link to="/news">{item.title}</Link>
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
