import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  MoreHorizontal, 
  Search, 
  Moon, 
  Sun 
} from 'lucide-react';
import { 
  GooglePlayIcon, 
  AppleIcon, 
  XCircleIcon, 
  YouTubeCircleIcon, 
  FacebookCircleIcon, 
  LinkedInCircleIcon, 
  WhatsAppCircleIcon, 
  InstagramCircleIcon, 
  GoogleNewsCircleIcon 
} from './SocialIcons';
import { navCategories, moreMenuItems } from '../data/navigation';

export default function Header({ darkMode, setDarkMode, onOpenDrawer }) {
  const [dateStr, setDateStr] = useState('13 नव॰ 2026');
  const [timeStr, setTimeStr] = useState('10:56 am');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Live Date and Time in Hindi (matching "13 नव॰ 2026  10:56 am")
  useEffect(() => {
    const hindiShortMonths = [
      'जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून',
      'जुलाई', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰'
    ];

    function update() {
      const now = new Date();
      const d = now.getDate();
      const m = hindiShortMonths[now.getMonth()];
      const y = now.getFullYear();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;

      setDateStr(`${d} ${m} ${y}`);
      setTimeStr(`${hours}:${minutes} ${ampm}`);
    }

    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`खोज परिणाम: "${searchQuery}"`);
    }
  };

  return (
    <header className="site-header-custom">
      {/* =====================================================================
          LAYER 1: FULL-WIDTH TOP BAR
          No max-width restriction - spreads 100% across the viewport
          ===================================================================== */}
      <div className="custom-topbar">
        <div className="navbar-full-width custom-topbar-inner">
          
          {/* Topbar Left: App icons, Date/Time, Pipe divider, E-paper */}
          <div className="custom-topbar-left">
            <div className="app-shortcuts">
              <a href="#" className="app-icon-link" title="Download Android App" aria-label="Google Play">
                <GooglePlayIcon size={15} />
              </a>
              <a href="#" className="app-icon-link" title="Download iOS App" aria-label="App Store">
                <AppleIcon size={17} />
              </a>
            </div>

            <div className="topbar-datetime">
              <span className="dt-date">{dateStr}</span>
              <span className="dt-time">{timeStr}</span>
            </div>

            <span className="topbar-divider">|</span>

            <a 
              href="https://epaper.navbharatlive.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-epaper-link"
            >
              ई-पेपर
            </a>
          </div>

          {/* Topbar Center: Logo */}
          <div className="custom-topbar-center">
            <a href="#" className="custom-logo-wrap" aria-label="Navbharat Home">
              <img src="/assets/logo.png" alt="नवभारत" className="custom-navbharat-logo" />
            </a>
          </div>

          {/* Topbar Right: Sign in + 7 Social Circles */}
          <div className="custom-topbar-right">
            <a href="#signin" className="custom-signin-link">
              साइन इन
            </a>

            <div className="custom-social-circles">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <XCircleIcon size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <YouTubeCircleIcon size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FacebookCircleIcon size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedInCircleIcon size={24} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <WhatsAppCircleIcon size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <InstagramCircleIcon size={24} />
              </a>
              <a href="https://news.google.com" target="_blank" rel="noopener noreferrer" title="Google News">
                <GoogleNewsCircleIcon size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =====================================================================
          LAYER 2: FULL-WIDTH WHITE NAVBAR WITH CENTERED LINKS & DROPDOWNS
          Spreads 100% across the viewport
          ===================================================================== */}
      <nav className="custom-bottom-navbar">
        <div className="navbar-full-width custom-nav-inner">
          
          {/* Centered Navigation Menu */}
          <ul className="custom-nav-menu">
            {navCategories.map((item, idx) => (
              <li 
                key={idx} 
                className={`custom-nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`custom-nav-link ${item.active ? 'active' : ''}`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="dropdown-chevron" />
                  )}
                </a>

                {/* Submenu Dropdown */}
                {item.hasDropdown && activeDropdown === idx && (
                  <ul className="custom-dropdown-menu">
                    {item.subItems.map((sub, sIdx) => (
                      <li key={sIdx} className="dropdown-item">
                        <a href={sub.href}>{sub.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* More Menu (Three Dots •••) */}
            <li 
              className="custom-nav-item has-dropdown more-item"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button className="custom-nav-link more-btn" aria-label="More Categories">
                <MoreHorizontal size={18} />
              </button>

              {moreDropdownOpen && (
                <ul className="custom-dropdown-menu more-dropdown">
                  {moreMenuItems.map((m, mIdx) => (
                    <li key={mIdx} className="dropdown-item">
                      <a href={m.href}>{m.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Dark Mode Toggle (Moon / Sun right next to •••) */}
            <li className="custom-nav-item theme-nav-item">
              <button 
                className="custom-nav-link theme-icon-btn" 
                onClick={() => setDarkMode(!darkMode)}
                title={darkMode ? "लाइट मोड में बदलें" : "डार्क मोड में बदलें"}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </li>
          </ul>

          {/* Far Right: Search Icon */}
          <div className="custom-nav-search-wrap">
            <button 
              className="nav-search-trigger" 
              onClick={() => setSearchOpen(!searchOpen)}
              title="खोजें"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

        </div>
      </nav>

      {/* Expandable Search Input Bar (Full Width) */}
      <div className={`search-dropdown ${searchOpen ? 'open' : ''}`}>
        <div className="navbar-full-width">
          <form className="search-input-wrapper" onSubmit={handleSearchSubmit}>
            <input 
              type="search" 
              className="search-input" 
              placeholder="खबरें, विषय या शहर खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={searchOpen}
            />
            <button type="submit" className="search-submit-btn" aria-label="Search Submit">
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
