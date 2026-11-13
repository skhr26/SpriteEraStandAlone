import React from 'react';
import { visheshData } from '../data/vishesh';

export default function VisheshSection() {
  return (
    <section className="vishesh-section" aria-label="नवभारत विशेष">
      <div className="center-container">
        
        {/* Header with Title + Horizontal Rule + Pill */}
        <div className="section-header-divider-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>नवभारत विशेष</span>
          </h2>
          <div className="header-h-line"></div>
          <a href="#vishesh" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="vishesh-grid-4col">
          {visheshData.map((item) => (
            <article key={item.id} className="vishesh-card">
              <a href={item.url} className="vishesh-img-link">
                <div className="vishesh-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </a>
              <div className="vishesh-body">
                <h3 className="vishesh-title">
                  <a href={item.url}>{item.title}</a>
                </h3>
                <div className="vishesh-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
