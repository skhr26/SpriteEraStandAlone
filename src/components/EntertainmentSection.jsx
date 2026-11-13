import React from 'react';
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
          <a href="#entertainment" className="black-more-pill">और पढ़ें</a>
        </div>

        {/* 4x2 Grid */}
        <div className="entertainment-grid-4col">
          {entertainmentData.map((item) => (
            <article key={item.id} className="entertainment-card">
              <a href={item.url} className="ent-img-link">
                <div className="ent-img-wrap">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                  />
                </div>
              </a>
              <div className="ent-card-body">
                <h3 className="ent-card-title">
                  <a href={item.url}>{item.title}</a>
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
