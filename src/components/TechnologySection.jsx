import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            to="/aur-padho?category=टेक्नॉलजी" 
            state={{ category: "टेक्नॉलजी" }} 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="standard-grid-4col">
          {technologyData.map((item) => (
            <article key={item.id} className="standard-news-card">
              <Link to="/news" className="card-img-link">
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
                  <Link to="/news">{item.title}</Link>
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
