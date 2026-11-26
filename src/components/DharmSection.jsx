import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            to="/aur-padho?category=धर्म" 
            state={{ category: "धर्म" }} 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* Top Row: 3 cards */}
        <div className="dharm-grid">
          {topRow.map((item) => (
            <article key={item.id} className="dharm-card">
              <Link to="/news" className="dharm-img-link">
                <div className="dharm-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="dharm-body">
                <h3 className="dharm-title">
                  <Link to="/news">{item.title}</Link>
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
              <Link to="/news" className="dharm-img-link">
                <div className="dharm-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="dharm-body">
                <h3 className="dharm-title">
                  <Link to="/news">{item.title}</Link>
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
