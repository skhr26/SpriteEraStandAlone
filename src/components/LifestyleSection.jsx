import React from 'react';
import { Link } from 'react-router-dom';
import { lifestyleData } from '../data/lifestyle';

export default function LifestyleSection() {
  return (
    <section className="lifestyle-section" aria-label="लाइफस्टाइल समाचार">
      <div className="center-container">
        
        {/* Header */}
        <div className="section-header-row">
          <h2 className="section-title-bold">
            <span className="accent-bar">|</span>
            <span>लाइफस्टाइल</span>
          </h2>
          <Link 
            to="/aur-padho?category=लाइफस्टाइल" 
            state={{ category: "लाइफस्टाइल" }} 
            className="black-more-pill"
          >
            और पढ़ें
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="standard-grid-4col">
          {lifestyleData.map((item) => (
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
