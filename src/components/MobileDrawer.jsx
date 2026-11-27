import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { navCategories } from '../data/navigation';
import { getRouteForCategory } from '../data/routeMap';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`mobile-drawer-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img src="/assets/logo.png" alt="Navbharat Live" />
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="drawer-body">
          <ul className="drawer-menu-list">
            {navCategories.map((cat, idx) => (
              <li key={idx} className="drawer-menu-item">
                <Link to={getRouteForCategory(cat.name)} onClick={onClose}>
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="drawer-menu-item">
              <a 
                href="https://epaper.navbharatlive.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={onClose}
              >
                📰 ई-पेपर (E-Paper)
              </a>
            </li>
            <li className="drawer-menu-item">
              <Link to="/viral" onClick={onClose}>
                📹 वायरल (Viral)
              </Link>
            </li>
            <li className="drawer-menu-item">
              <Link to="/ampstories/web-stories" onClick={onClose}>
                📱 वेब स्टोरीज़ (Web Stories)
              </Link>
            </li>
          </ul>
        </div>

        <div className="drawer-footer">
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
            Navbharat Live © 2026<br />सर्वाधिकार सुरक्षित
          </div>
        </div>
      </div>
    </>
  );
}
