import React from 'react';
import { Link } from 'react-router-dom';
import { technologyData } from '../data/technology';

export default function TechnologySection() {
  return (
    <section className="technology-section" aria-label="टेक्नॉलजी">
      <div className="center-container">
        
        {/* Section Header: Left Title with Red Bar, Right Pill 'और पढ़ें' */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>टेक्नॉलजी</span>
          </h2>
          <Link 
            to="/tech" 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="standard-grid-4col">
          {technologyData.map((item) => (
            <article key={item.id} className="standard-news-card">
              <Link to={item.url || "/tech"} className="card-img-link">
                <div className="card-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="card-body">
                <h3 className="card-title">
                  <Link to={item.url || "/tech"}>{item.title}</Link>
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
