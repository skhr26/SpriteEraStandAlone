import React from 'react';
import { careerData } from '../data/career';

export default function CareerSection() {
  return (
    <section className="career-section" aria-label="करियर समाचार">
      <div className="center-container">
        
        {/* Top Leaderboard Ad Banner (YouTube Amplify Ad) */}
        <div className="career-ad-wrapper">
          <div className="career-ad-box">
            <img 
              src="/assets/youtube-ad-banner.jpg" 
              alt="Amplify your best content on YouTube" 
              className="career-ad-img"
            />
          </div>
        </div>

        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>करियर</span>
          </h2>
          <a href="#career" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 6-Column Single Row Grid */}
        <div className="career-grid-6col">
          {careerData.map((item) => (
            <article key={item.id} className="career-card">
              <a href={item.url} className="career-img-link">
                <div className="career-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </a>
              <div className="career-body">
                <h3 className="career-title">
                  <a href={item.url}>{item.title}</a>
                </h3>
                <div className="career-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
