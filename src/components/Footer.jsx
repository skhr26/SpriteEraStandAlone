import React from 'react';
import { Link } from 'react-router-dom';
import { getRouteForCategory } from '../data/routeMap';
import { 
  XCircleIcon, 
  YouTubeCircleIcon, 
  FacebookCircleIcon, 
  LinkedInCircleIcon, 
  WhatsAppCircleIcon, 
  InstagramCircleIcon, 
  GoogleNewsCircleIcon,
  AppleIcon,
  GooglePlayIcon
} from './SocialIcons';
import { footerNavSections, footerLegalLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="navbharat-site-footer" data-testid="footer">
      <div className="center-container">

        {/* 0. Top Crisp Dark Divider Line (Matching user reference) */}
        <div className="footer-top-divider"></div>

        {/* 1. Centered Large Navbharat Logo (Matching media_1794729423429_1c7dc249.png) */}
        <div className="footer-brand-logo-wrap">
          <Link to="/" className="footer-brand-link" aria-label="Navbharat Home">
            <img src="/assets/logo.png" alt="नवभारत" className="footer-big-logo" />
          </Link>
        </div>

        {/* 2. Directory Grid: 6 Columns matching screenshot */}
        <div className="footer-directory-grid">
          
          {/* Column 1: 'फॉलो करें' with 7 Circular Social Icons & App Store Badges */}
          <div className="footer-col follow-col">
            <h4 className="footer-col-heading">फॉलो करें</h4>
            
            {/* 7 Social Circles */}
            <div className="footer-social-matrix">
              <div className="social-row">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X"><XCircleIcon size={26} /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube"><YouTubeCircleIcon size={26} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><FacebookCircleIcon size={26} /></a>
              </div>
              <div className="social-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInCircleIcon size={26} /></a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" title="WhatsApp"><WhatsAppCircleIcon size={26} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramCircleIcon size={26} /></a>
              </div>
              <div className="social-row">
                <a href="https://news.google.com" target="_blank" rel="noopener noreferrer" title="Google News"><GoogleNewsCircleIcon size={26} /></a>
              </div>
            </div>

            {/* App Store & Google Play Download Buttons */}
            <div className="footer-store-buttons">
              <a href="#" className="store-pill-btn">
                <AppleIcon size={18} />
                <div className="store-btn-text">
                  <span className="store-sub">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              <a href="#" className="store-pill-btn">
                <GooglePlayIcon size={16} />
                <div className="store-btn-text">
                  <span className="store-sub">GET IT ON</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Columns 2 to 6: Section, States, Maharashtra, More, Group Site */}
          {footerNavSections.map((sec, idx) => (
            <div key={idx} className="footer-col">
              <h4 className="footer-col-heading">{sec.title}</h4>
              <ul className="footer-col-links">
                {sec.links.map((link, lIdx) => {
                  const targetLink = getRouteForCategory(link.name);

                  return (
                    <li key={lIdx}>
                      {link.external ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link to={targetLink}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>

        {/* 5. Bottom Legal Links & Copyright Bar */}
        <div className="footer-legal-bar">
          <ul className="footer-legal-list">
            {footerLegalLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <li><a href={item.href}>{item.name}</a></li>
                {idx < footerLegalLinks.length - 1 && <li className="legal-pipe">|</li>}
              </React.Fragment>
            ))}
          </ul>

          {/* Copyright & Powered By Credits */}
          <div className="footer-copyright-row">
            <span className="copyright-text">© Copyright Navbharat Live 2026 All rights reserved.</span>
            <span className="powered-by-text">Powered by Quintype</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
