import React from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../data/photos';

export default function PhotoSection() {
  return (
    <section className="photo-section" aria-label="फोटो">
      <div className="center-container">
        <div className="photo-inner-wrapper">
          
          {/* Section Header */}
          <div className="section-header-row">
            <h2 className="section-title-bold">
              <span className="accent-bar">|</span>
              <span>फोटो</span>
            </h2>
            <Link 
              to="/photo" 
              className="black-more-pill"
            >
              और पढ़ें
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="photo-grid-4col">
            {photoData.map((item) => (
              <article key={item.id} className="photo-card">
                <Link to={item.url || "/photo"} className="photo-img-link" title={item.title}>
                  <div className="photo-img-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
