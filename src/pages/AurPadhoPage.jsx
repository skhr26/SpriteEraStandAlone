import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation, Navigate } from 'react-router-dom';
import { 
  aurPadhoLeadFeatured, 
  aurPadhoLeadCol1List, 
  aurPadhoLeadCol2List, 
  aurPadhoLeadCol3List, 
  aurPadhoGridArticles 
} from '../data/aurPadho';

export default function AurPadhoPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(9);

  // Dynamic category heading from query parameter (?category=...) or location state
  const categoryTitle = 
    searchParams.get('category') || 
    searchParams.get('title') || 
    location.state?.category || 
    'ताज़ा खबर';

  // If visiting Web Stories, route directly to the dedicated Web Stories page
  if (categoryTitle === 'वेब स्टोरीज़' || categoryTitle === 'वेब स्टोरीज' || categoryTitle === 'webstories') {
    return <Navigate to="/aurpadho-webstories" replace />;
  }

  useEffect(() => {
    document.title = `${categoryTitle} - Navbharat Live`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryTitle]);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, aurPadhoGridArticles.length));
  };

  const displayedArticles = aurPadhoGridArticles.slice(0, visibleCount);

  return (
    <div className="taza-khabar-page" data-testid="aur-padho-page">
      
      {/* ── 1. Top Leaderboard Ad Placeholder ── */}
      <div className="center-container taza-top-ad-container">
        <div className="taza-top-ad-box" aria-label="Advertisement Banner"></div>
      </div>

      {/* ── 2. Page Header & Breadcrumb: "होम › [Dynamic Section Title]" ── */}
      <div className="center-container taza-header-container">
        <nav className="taza-breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/" className="taza-breadcrumb-link">
            होम
          </Link>
          <span className="taza-breadcrumb-separator">›</span>
          <span className="taza-breadcrumb-current">{categoryTitle}</span>
        </nav>
        <h1 className="taza-main-title">
          <span className="taza-red-accent">|</span>
          <span>{categoryTitle}</span>
        </h1>
      </div>

      {/* ── 3. Top 3-Column Lead Section ── */}
      <div className="center-container taza-lead-section">
        <div className="taza-lead-3col-grid">
          
          {/* ── Column 1: Featured Story + 3 Compact Stories ── */}
          <div className="taza-col-1">
            {/* Featured Big Card */}
            <div 
              data-test-id="story-card" 
              className="arr--story-card with-rounded-corners storycard-m_card__KJwRa taza-feat-card"
            >
              <Link 
                data-test-id="arr--hero-image" 
                aria-label="fallback-hero-image" 
                className="arr--hero-image with-rounded-corners hero-image-m_hero-image__3lraV taza-hero-image" 
                to={aurPadhoLeadFeatured.url}
              >
                <div className="hero-image-m_image-wrapper__2EIzt taza-image-wrapper">
                  <figure 
                    className="arr--responsive-hero-image with-rounded-corners hero-image-m_image__1mz0U taza-responsive-figure" 
                    style={{ paddingTop: '56.25%' }}
                  >
                    <img 
                      src={aurPadhoLeadFeatured.imageUrl} 
                      alt={aurPadhoLeadFeatured.title} 
                      className="qt-image arr-image-placeholder taza-feat-img" 
                      width="100%" 
                      height="100%"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </figure>
                </div>
              </Link>

              <div 
                data-test-id="story-card-content" 
                className="arr--content-wrapper with-rounded-corners taza-content-wrapper"
              >
                <div className="arr--default-story-content" data-test-id="default-story-content">
                  <div data-test-id="headline" className="arrow-component arr--headline">
                    <Link aria-label="headline" to={aurPadhoLeadFeatured.url}>
                      <h2 className="taza-feat-title">
                        {aurPadhoLeadFeatured.title}
                      </h2>
                    </Link>
                  </div>
                  <div className="arr--author-time taza-author-time">
                    <div data-test-id="publish-time" className="time arr--publish-time">
                      <div>
                        <time className="arr__timeago">{aurPadhoLeadFeatured.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-stories below featured card (Thumbnail Left, Text Right) */}
            <div className="taza-col1-sublist">
              {aurPadhoLeadCol1List.map((item) => (
                <article key={item.id} className="taza-compact-item left-thumb">
                  <Link to={item.url} className="taza-compact-thumb-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="taza-compact-thumb"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </Link>
                  <div className="taza-compact-body">
                    <h3 className="taza-compact-title">
                      <Link to={item.url}>{item.title}</Link>
                    </h3>
                    <div className="taza-compact-time">{item.time}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ── Column 2: 6 Stories Feed (Text Left, Thumbnail Right) ── */}
          <div className="taza-col-2">
            <div className="taza-col2-feed">
              {aurPadhoLeadCol2List.map((item) => (
                <article key={item.id} className="taza-compact-item right-thumb">
                  <div className="taza-compact-body">
                    <h3 className="taza-compact-title">
                      <Link to={item.url}>{item.title}</Link>
                    </h3>
                    <div className="taza-compact-time">{item.time}</div>
                  </div>
                  <Link to={item.url} className="taza-compact-thumb-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="taza-compact-thumb"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* ── Column 3: 300x250 Ad Placeholder + 2 Stories ── */}
          <div className="taza-col-3">
            {/* 300x250 Rectangle Ad Box */}
            <div className="taza-side-ad-box" aria-label="Square Advertisement"></div>

            {/* 2 Compact Stories (Text Left, Thumbnail Right) */}
            <div className="taza-col3-feed">
              {aurPadhoLeadCol3List.map((item) => (
                <article key={item.id} className="taza-compact-item right-thumb">
                  <div className="taza-compact-body">
                    <h3 className="taza-compact-title">
                      <Link to={item.url}>{item.title}</Link>
                    </h3>
                    <div className="taza-compact-time">{item.time}</div>
                  </div>
                  <Link to={item.url} className="taza-compact-thumb-wrap">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="taza-compact-thumb"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── 4. 3x3 Articles Grid ── */}
      <div className="center-container taza-grid-section">
        <div className="taza-articles-grid">
          {displayedArticles.map((article) => (
            <div 
              key={article.id} 
              data-test-id="story-card" 
              className="arr--story-card with-rounded-corners storycard-m_card__KJwRa storycard-m_default-card__1-POn taza-story-card"
            >
              <Link 
                data-test-id="arr--hero-image" 
                aria-label="fallback-hero-image" 
                className="arr--hero-image with-rounded-corners hero-image-m_hero-image__3lraV taza-hero-image" 
                to={article.url}
              >
                <div className="hero-image-m_image-wrapper__2EIzt taza-image-wrapper">
                  <figure 
                    className="arr--responsive-hero-image with-rounded-corners hero-image-m_image__1mz0U taza-responsive-figure" 
                    style={{ paddingTop: '56.25%' }}
                  >
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="qt-image arr-image-placeholder taza-card-img" 
                      width="100%" 
                      height="100%"
                      onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                    />
                  </figure>
                  <div className="hero-image-m_icon-wrapper__3ogj_"></div>
                </div>
              </Link>

              <div 
                data-test-id="story-card-content" 
                className="arr--content-wrapper with-rounded-corners storycardContent-m_wrapper__TEmfA taza-content-wrapper"
              >
                <div className="arr--default-story-content" data-test-id="default-story-content">
                  <div data-test-id="headline" className="arrow-component arr--headline">
                    <Link aria-label="headline" to={article.url}>
                      <h3 className="headline-m_headline__3_NhV taza-headline">
                        {article.title}
                      </h3>
                    </Link>
                  </div>

                  <div className="arr--author-time author-with-timestamp-m_author-time-wrapper__G7_eI taza-author-time">
                    {article.author && (
                      <span className="taza-author-name">{article.author}</span>
                    )}
                    {article.author && <span className="author-timestamp-bullet">•</span>}
                    <div data-test-id="publish-time" className="time arr--publish-time timestamp-m_time__2v46i">
                      <div>
                        <time className="arr__timeago">{article.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 5. "और पढ़ें" (Load More) Button ── */}
        {visibleCount < aurPadhoGridArticles.length && (
          <div className="taza-load-more-wrap">
            <button 
              type="button" 
              className="taza-load-more-btn"
              onClick={handleLoadMore}
            >
              और पढ़ें
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
