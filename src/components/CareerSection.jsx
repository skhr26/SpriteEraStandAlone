import React from 'react';
import { Link } from 'react-router-dom';
import { careerData } from '../data/career';

export default function CareerSection() {
  return (
    <section className="career-section-container" aria-label="करियर">
      <div className="center-container">

        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>करियर</span>
          </h2>
          <Link 
            to="/career" 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 6-Column Single Row Grid */}
        <div className="career-grid-6col">
          {careerData.map((item) => (
            <article key={item.id} className="career-card">
              <Link to={item.url || "/career"} className="career-img-link">
                <div className="career-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="career-body">
                <h3 className="career-title">
                  <Link to={item.url || "/career"}>{item.title}</Link>
                </h3>
                <div className="career-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
