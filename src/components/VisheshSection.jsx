import React from 'react';
import { Link } from 'react-router-dom';
import { visheshData } from '../data/vishesh';

export default function VisheshSection() {
  return (
    <section className="vishesh-section" aria-label="नवभारत विशेष">
      <div className="center-container">
        
        {/* Section Header: Left Title with Red Bar, Right Pill 'और पढ़ें' */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>नवभारत विशेष</span>
          </h2>
          <Link 
            to="/latest-news" 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="vishesh-grid-4col">
          {visheshData.map((item) => (
            <article key={item.id} className="vishesh-card">
              <Link to={item.url || "/latest-news"} className="vishesh-img-link">
                <div className="vishesh-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="vishesh-body">
                <h3 className="vishesh-title">
                  <Link to={item.url || "/latest-news"}>{item.title}</Link>
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
