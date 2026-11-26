import React from 'react';
import { Link } from 'react-router-dom';
import { photoData } from '../data/photos';

export default function PhotoSection() {
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
            <Link 
              to="/aur-padho?category=फोटो" 
              state={{ category: "फोटो" }} 
              className="black-more-pill"
            >
              और पढ़ें
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="photo-grid-4col">
            {photoData.map((item) => (
              <article key={item.id} className="photo-card">
                <Link to="/news" className="photo-img-link">
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
