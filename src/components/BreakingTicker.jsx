import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { breakingNewsTicker } from '../data/navigation';

function getTickerLink(text) {
  if (text.includes("दरगाह-राघोपुर")) return "/state/bihar/patna-raghopur-bidupur-6-lane-bridge-features";
  if (text.includes("NCP") || text.includes("संजय राउत")) return "/state/maharashtra/ncp-both-factions-merger-sanjay-raut-sharad-pawar-statement";
  if (text.includes("AAP") || text.includes("पंजाब")) return "/india/politics/aap-punjab-candidates-ticket-cuts-reasons-behind-decision";
  if (text.includes("IND vs NZ")) return "/sports/cricket/ind-vs-nz-4th-odi-live-score-mitchell-santner-out";
  if (text.includes("Gold Rate")) return "/business/market/gold-rate-today-delhi-prices-drop-24k-gold-silver";
  return "/latest-news";
}

export default function BreakingTicker() {
  const location = useLocation();
  const isWebStoriesListing = location.pathname.includes('web-stories') || 
                              location.pathname.includes('webstories') || 
                              location.pathname.includes('ampstories');

  return (
    <>
      {/* ── Full-Width Breaking News Ticker Bar (Edge-to-Edge) ── */}
      <div className="breaking-ticker-full-width">
        <div className="stream-ticker-bar">
          <div className="stream-ticker-badge">
            ब्रेकिंग न्यूज़
          </div>
          <div className="stream-ticker-track">
            <Marquee
              speed={65}
              pauseOnHover={true}
              gradient={false}
              autoFill={true}
              className="stream-ticker-marquee"
            >
              {breakingNewsTicker.map((text, idx) => (
                <span key={idx} className="stream-ticker-segment">
                  <span className="ticker-pipe">|</span>
                  <Link to={getTickerLink(text)} className="ticker-link">{text}</Link>
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* ── Leaderboard Google Ad Banner (Shown on Homepage, omitted on Web Stories matching user's template) ── */}
      {!isWebStoriesListing && (
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
      )}
    </>
  );
}
