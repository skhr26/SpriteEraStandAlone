import React from 'react';
import { photoData } from '../data/photos';

export default function PhotoSection({ onNavigateToLatest }) {
  return (
    <section className="photo-section" aria-label="फोटो गैलरी">
      <div className="photo-section-dark-strip">
        <div className="center-container">
          
          {/* Header with Title + Horizontal Rule + Pill */}
          <div className="section-header-divider-row">
            <h2 className="section-title-bold">
              <span className="accent-bar">|</span>
              <span>फोटो</span>
            </h2>
            <div className="header-h-line"></div>
            <a href="#latest" onClick={onNavigateToLatest} className="black-more-pill">और पढ़ें</a>
          </div>

          {/* 4 Cards Grid */}
          <div className="photo-grid-4col">
            {photoData.map((item) => (
              <article key={item.id} className="photo-card">
                <a href={item.url} className="photo-img-link">
                  <div className="photo-img-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </a>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
