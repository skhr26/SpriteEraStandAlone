import React from 'react';

export default function MahtariAd() {
  return (
    <div className="mahtari-ad-banner-box">
      <div className="ad-corner-badge">
        <span className="ad-info-icon">ⓘ</span>
      </div>
      <a href="#" className="mahtari-ad-link" aria-label="महतारी वंदन योजना">
        <img 
          src="/assets/mahtari-ad.jpg" 
          alt="महतारी वंदन योजना" 
          className="mahtari-ad-img"
          loading="eager"
        />
      </a>
    </div>
  );
}
