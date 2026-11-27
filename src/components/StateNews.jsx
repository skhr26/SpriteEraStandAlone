import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { statesList, stateNewsData } from '../data/stateNews';
import { getRouteForCategory } from '../data/routeMap';

export default function StateNews() {
  const [activeTab, setActiveTab] = useState('maharashtra');
  const currentState = stateNewsData[activeTab] || stateNewsData.maharashtra;

  return (
    <section className="state-section-container" aria-label="राज्य विशेष समाचार">
      <div className="center-container">
        
        {/* Section Header: Red Bar + Title on Left, 'और पढ़ें' on Right */}
        <div className="state-main-header">
          <h2 className="state-header-title">
            <span className="state-red-bar">|</span>
            <span>राज्य</span>
          </h2>
          <Link 
            to={currentState ? getRouteForCategory(currentState.name) : '/state/maharashtra'} 
            className="state-more-btn"
          >
            और पढ़ें
          </Link>
        </div>

        {/* Layout: Left Vertical State Tabs + Right News Grid */}
        <div className="state-layout-row">
          
          {/* Left Vertical State Tab Menu */}
          <aside className="state-sidebar-tabs">
            <ul className="state-tab-list">
              {statesList.map((state) => {
                const isActive = activeTab === state.id;
                return (
                  <li key={state.id} className="state-tab-item">
                    <button
                      className={`state-tab-button ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(state.id)}
                    >
                      <span>{state.name}</span>
                      {isActive && <span className="tab-active-arrow">▸</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right State News Content: 4 Cards (2x2) + 1 Column with 2 Compact Stories */}
          <div className="state-content-grid">
            
            {/* 4 Big News Cards in 2 Columns */}
            <div className="state-cards-grid">
              {currentState.cards.map((card) => {
                const cardUrl = card.url || `/state/${activeTab}/${card.id}`;
                return (
                  <article key={card.id} className="state-lead-card">
                    <Link to={cardUrl} className="state-card-thumb-wrap">
                      <img 
                        src={card.imageUrl} 
                        alt={card.title} 
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                      />
                    </Link>
                    <div className="state-card-body">
                      <h3 className="state-card-title">
                        <Link to={cardUrl}>{card.title}</Link>
                      </h3>
                      <div className="state-card-meta">
                        <span className="state-author">{card.author}</span>
                        <span className="state-meta-bullet">·</span>
                        <span className="state-time">{card.time}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Right-most 1 Column: 2 Compact Stories */}
            <div className="state-compact-col">
              {currentState.compact.map((story) => {
                const storyUrl = story.url || `/state/${activeTab}/${story.id}`;
                return (
                  <article key={story.id} className="state-compact-story">
                    <Link to={storyUrl} className="state-compact-thumb">
                      <img 
                        src={story.imageUrl} 
                        alt={story.title} 
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                      />
                    </Link>
                    <div className="state-compact-body">
                      <h3 className="state-compact-title">
                        <Link to={storyUrl}>{story.title}</Link>
                      </h3>
                      <div className="state-card-meta">
                        <span className="state-author">{story.author}</span>
                        <span className="state-meta-bullet">·</span>
                        <span className="state-time">{story.time}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
