import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { breakingNewsTicker } from '../data/navigation';

export default function BreakingTicker() {
  return (
    <>
      {/* ── Full-Width Breaking News Ticker Bar (Spreads across 100% screen width) ── */}
      <div className="breaking-ticker-full-width">
        <div className="stream-ticker-bar">
          <div className="stream-ticker-badge">
            ब्रेकिंग न्यूज़
          </div>
          <div className="stream-ticker-track">
            <Marquee
              speed={50}
              pauseOnHover={true}
              gradient={false}
              autoFill={true}
              className="stream-ticker-marquee"
            >
              {breakingNewsTicker.map((text, idx) => (
                <span key={idx} className="stream-ticker-segment">
                  <span className="ticker-pipe">|</span>
                  <Link to="/news" className="ticker-link">{text}</Link>
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* ── Leaderboard Google Ad Banner (Strictly centered inside center container) ── */}
      <div className="center-container leaderboard-ad-section">
        <div className="leaderboard-ad-wrapper">
          <div className="leaderboard-ad-box">
            <img 
              src="/assets/google-ad-banner.jpg" 
              alt="Google Ads - More than clicks, your search ads start instant conversations" 
              className="google-ad-banner-img"
            />
          </div>
        </div>

        {/* ── Thin 1px Horizontal Divider Line Matching Screenshot ── */}
        <div className="lead-section-divider"></div>
      </div>
    </>
  );
}
