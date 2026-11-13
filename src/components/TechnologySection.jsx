import React from 'react';
import { technologyData } from '../data/technology';

export default function TechnologySection() {
  return (
    <section className="technology-section" aria-label="टेक्नॉलजी समाचार">
      <div className="center-container">
        
        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>टेक्नॉलजी</span>
          </h2>
          <a href="#technology" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="standard-grid-4col">
          {technologyData.map((item) => (
            <article key={item.id} className="standard-news-card">
              <a href={item.url} className="card-img-link">
                <div className="card-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href={item.url}>{item.title}</a>
                </h3>
                <div className="card-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
