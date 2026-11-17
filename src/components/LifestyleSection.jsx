import React from 'react';
import { lifestyleData } from '../data/lifestyle';

export default function LifestyleSection({ onNavigateToLatest }) {
  return (
    <section className="lifestyle-section" aria-label="लाइफस्टाइल समाचार">
      <div className="center-container">
        
        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>लाइफस्टाइल</span>
          </h2>
          <a href="#latest" onClick={onNavigateToLatest} className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="standard-grid-4col">
          {lifestyleData.map((item) => (
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
