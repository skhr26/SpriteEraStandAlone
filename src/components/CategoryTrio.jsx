import React from 'react';
import { categoryTrioData } from '../data/categoryTrio';

export default function CategoryTrio() {
  return (
    <section className="category-trio-section" aria-label="बिज़नेस, खेल और क्राइम">
      <div className="center-container">
        <div className="category-trio-grid">
          {categoryTrioData.map((col) => (
            <div key={col.id} className="category-trio-col">
              
              {/* Column Header: Red Bar + Title on Left, 'और पढ़ें' Pill on Right */}
              <div className="trio-col-header">
                <h2 className="trio-col-title">
                  <span className="trio-red-bar">|</span>
                  <span className="trio-title-text">{col.title}</span>
                </h2>
                <a href={col.moreUrl} className="trio-more-pill">
                  और पढ़ें
                </a>
              </div>

              {/* Big Lead Card with Headline Overlay */}
              <article className="trio-lead-card">
                <a href={col.lead.url} className="trio-lead-link">
                  <div className="trio-lead-img-wrap">
                    <img 
                      src={col.lead.imageUrl} 
                      alt={col.lead.headline} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </a>
              </article>

              {/* 3 Compact Stories (Thumbnail LEFT, Title RIGHT) */}
              <div className="trio-compact-group">
                {col.stories.map((story) => (
                  <article key={story.id} className="trio-compact-story">
                    <div className="trio-thumb">
                      <img 
                        src={story.imageUrl} 
                        alt={story.headline} 
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                      />
                    </div>
                    <div className="trio-story-body">
                      <h3 className="trio-story-title">
                        <a href={story.url}>{story.headline}</a>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
