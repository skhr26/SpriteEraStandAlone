import React from 'react';
import { Link } from 'react-router-dom';
import { entertainmentData } from '../data/entertainment';

export default function EntertainmentSection() {
  return (
    <section className="entertainment-section" aria-label="मनोरंजन समाचार">
      <div className="center-container">
        
        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>मनोरंजन</span>
          </h2>
          <Link 
            to="/aur-padho?category=मनोरंजन" 
            state={{ category: "मनोरंजन" }} 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4x2 Grid */}
        <div className="entertainment-grid-4col">
          {entertainmentData.map((item) => (
            <article key={item.id} className="entertainment-card">
              <Link to="/news" className="ent-img-link">
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
                  <Link to="/news">{item.title}</Link>
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
