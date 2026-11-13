import React from 'react';
import { 
  heroLeadStory, 
  col1CompactStories, 
  col2Stories, 
  col3Stories 
} from '../data/lead';
import MahtariAd from './MahtariAd';

export default function LeadGrid() {
  return (
    <section className="lead-section-wrapper" aria-label="Lead News Stories">
      <div className="center-container">
        <div className="lead-columns-balanced">
          
          {/* =================================================================
              COLUMN 1: Hero Story + 3 Compact Stories (Thumbnail LEFT)
              ================================================================= */}
          <div className="lead-col col-1">
            
            {/* Lead Hero Story */}
            <article className="lead-hero-clean">
              <a href="#" className="hero-clean-img-wrap">
                <img 
                  src={heroLeadStory.imageUrl} 
                  alt={heroLeadStory.headline} 
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                />
              </a>
              <div className="hero-clean-body">
                <h2 className="hero-clean-title">
                  <a href="#">{heroLeadStory.headline}</a>
                </h2>
                <div className="story-timestamp">{heroLeadStory.time}</div>
              </div>
            </article>

            {/* 3 Compact Stories (Thumb LEFT, Title RIGHT) */}
            <div className="col1-stories-group">
              {col1CompactStories.map((story) => (
                <article key={story.id} className="clean-compact-story thumb-left">
                  <div className="clean-thumb">
                    <img 
                      src={story.imageUrl} 
                      alt={story.headline} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                  <div className="clean-content">
                    <h3 className="clean-story-title">
                      <a href="#">{story.headline}</a>
                    </h3>
                    <div className="story-timestamp">{story.time}</div>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* =================================================================
              COLUMN 2: 7 Stacked Stories (Title LEFT, Thumbnail RIGHT)
              ================================================================= */}
          <div className="lead-col col-2">
            <div className="col2-stories-group">
              {col2Stories.map((story) => (
                <article key={story.id} className="clean-compact-story thumb-right">
                  <div className="clean-content">
                    <h3 className="clean-story-title">
                      <a href="#">{story.headline}</a>
                    </h3>
                    <div className="story-timestamp">{story.time}</div>
                  </div>
                  <div className="clean-thumb">
                    <img 
                      src={story.imageUrl} 
                      alt={story.headline} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =================================================================
              COLUMN 3: Mahtari Ad + 3 Compact Stories (Title LEFT, Thumbnail RIGHT)
              ================================================================= */}
          <div className="lead-col col-3">
            
            {/* Sponsored Mahtari Vandan Ad */}
            <div className="col3-ad-container">
              <MahtariAd />
            </div>

            {/* 3 Compact Stories (Title LEFT, Thumb RIGHT) */}
            <div className="col3-stories-group">
              {col3Stories.map((story) => (
                <article key={story.id} className="clean-compact-story thumb-right">
                  <div className="clean-content">
                    <h3 className="clean-story-title">
                      <a href="#">{story.headline}</a>
                    </h3>
                    <div className="story-timestamp">{story.time}</div>
                  </div>
                  <div className="clean-thumb">
                    <img 
                      src={story.imageUrl} 
                      alt={story.headline} 
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
