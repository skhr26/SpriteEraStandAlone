import React from 'react';
import { Link } from 'react-router-dom';
import { categoryTrioData } from '../data/categoryTrio';
import { getRouteForCategory } from '../data/routeMap';

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
                <Link 
                  to={getRouteForCategory(col.title)}
                  className="trio-more-pill"
                >
                  और पढ़ें
                </Link>
              </div>

              {/* Big Lead Card with Headline Overlay */}
              <article className="trio-lead-card">
                <Link to={col.lead.url || "/news"} className="trio-lead-link">
                  <div className="trio-lead-img-wrap">
                    <img 
                      src={col.lead.imageUrl} 
                      alt={col.lead.headline} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </Link>
              </article>

              {/* 3 Compact Stories (Thumbnail LEFT, Title RIGHT) */}
              <div className="trio-compact-group">
                {col.stories.map((story) => (
                  <article key={story.id} className="trio-compact-story">
                    <Link to={story.url || "/news"} className="trio-thumb">
                      <img 
                        src={story.imageUrl} 
                        alt={story.headline} 
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                      />
                    </Link>
                    <div className="trio-story-body">
                      <h3 className="trio-story-title">
                        <Link to={story.url || "/news"}>{story.headline}</Link>
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
