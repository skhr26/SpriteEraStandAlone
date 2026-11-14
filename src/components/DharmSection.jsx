import React from 'react';
import { dharmData } from '../data/dharm';

export default function DharmSection() {
  const topRow = dharmData.slice(0, 3);
  const bottomRow = dharmData.slice(3, 5);

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

        {/* Top Row: 3 cards */}
        <div className="dharm-grid">
          {topRow.map((item) => (
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
          ))}
        </div>

        {/* Bottom Row: 2 centered cards */}
        <div className="dharm-grid dharm-grid-bottom">
          {bottomRow.map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
