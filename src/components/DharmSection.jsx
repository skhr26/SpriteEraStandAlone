import React from 'react';
import { dharmData } from '../data/dharm';

export default function DharmSection() {
  return (
    <section className="dharm-section" aria-label="धर्म समाचार">
      <div className="center-container">
        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>धर्म</span>
          </h2>
          <a href="#dharm" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 3x2 Grid */}
        <div className="dharm-grid">
          {dharmData.map((item) => {
            if (item.isAd) {
              return (
                <div key={item.id} className="dharm-ad-placeholder">
                  <div className="ad-box-inner">
                    <span className="ad-tag-corner">Ad</span>
                  </div>
                </div>
              );
            }
            return (
              <article key={item.id} className="dharm-card">
                <a href={item.url} className="dharm-img-link">
                  <div className="dharm-img-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </a>
                <div className="dharm-body">
                  <h3 className="dharm-title">
                    <a href={item.url}>{item.title}</a>
                  </h3>
                  <div className="dharm-time">{item.time}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
