import React from 'react';
import { Link } from 'react-router-dom';
import { entertainmentData } from '../data/entertainment';

export default function EntertainmentSection() {
  return (
    <section className="entertainment-section" aria-label="मनोरंजन">
      <div className="center-container">
        
        {/* Section Header: Left Title with Red Bar, Right Pill 'और पढ़ें' */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>मनोरंजन</span>
          </h2>
          <Link 
            to="/entertainment" 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4x2 Grid */}
        <div className="entertainment-grid-4col">
          {entertainmentData.map((item) => (
            <article key={item.id} className="entertainment-card">
              <Link to={item.url || "/entertainment"} className="ent-img-link">
                <div className="ent-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </Link>
              <div className="ent-card-body">
                <h3 className="ent-card-title">
                  <Link to={item.url || "/entertainment"}>{item.title}</Link>
                </h3>
                <div className="ent-card-time">{item.time}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
