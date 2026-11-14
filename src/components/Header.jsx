import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Moon, Sun } from 'lucide-react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import {
  FaApple,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGooglenews } from 'react-icons/si';
import { navCategories, moreMenuItems } from '../data/navigation';

const socials = [
  { title: 'X (Twitter)', href: 'https://twitter.com', bg: '#000000', Icon: FaXTwitter, size: 15 },
  { title: 'YouTube', href: 'https://youtube.com', bg: '#ff0000', Icon: FaYoutube, size: 18 },
  { title: 'Facebook', href: 'https://facebook.com', bg: '#1877f2', Icon: FaFacebookF, size: 15 },
  { title: 'LinkedIn', href: 'https://linkedin.com', bg: '#0a66c2', Icon: FaLinkedinIn, size: 15 },
  { title: 'WhatsApp', href: 'https://whatsapp.com', bg: '#25d366', Icon: FaWhatsapp, size: 18 },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    bg: 'linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)',
    Icon: FaInstagram,
    size: 17,
  },
  {
    title: 'Google News',
    href: 'https://news.google.com',
    bg: '#e8f0fe',
    Icon: SiGooglenews,
    size: 16,
    color: '#4285f4',
    className: 'gnews',
  },
];

export default function Header({ darkMode, setDarkMode, onOpenDrawer }) {
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Live date & time, e.g. "14 नव॰ 2026   10:36 AM"
  useEffect(() => {
    const hindiShortMonths = [
      'जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून',
      'जुलाई', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰',
    ];

    function update() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      setDateStr(`${now.getDate()} ${hindiShortMonths[now.getMonth()]} ${now.getFullYear()}`);
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
      {/* ======================= LAYER 1: TOP BAR ======================= */}
      <div className="custom-topbar">
        <div className="navbar-full-width custom-topbar-inner">
          {/* Left */}
          <div className="custom-topbar-left">
            <div className="app-shortcuts">
              <a href="#" className="app-icon-link" title="Download Android App" aria-label="Google Play">
                <IoLogoGooglePlaystore size={20} />
              </a>
              <a href="#" className="app-icon-link" title="Download iOS App" aria-label="App Store">
                <FaApple size={20} />
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

          {/* Center: logo */}
          <div className="custom-topbar-center">
            <a href="#" className="custom-logo-wrap" aria-label="Navbharat Home">
              <img src="/assets/logo.png" alt="नवभारत" className="custom-navbharat-logo" />
            </a>
          </div>

          {/* Right */}
          <div className="custom-topbar-right">
            <a href="#signin" className="custom-signin-link">
              साइन इन
            </a>

            <div className="custom-social-circles">
              {socials.map(({ title, href, bg, Icon, size, color, className }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  aria-label={title}
                  className={`soc-circle ${className || ''}`}
                  style={{ background: bg, color: color || '#fff' }}
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================= LAYER 2: NAVBAR ======================= */}
      <nav className="custom-bottom-navbar">
        <div className="navbar-full-width custom-nav-inner">
          <ul className="custom-nav-menu">
            {navCategories.map((item, idx) => (
              <li
                key={idx}
                className={`custom-nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a href={item.href} className={`custom-nav-link ${item.active ? 'active' : ''}`}>
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={14} className="dropdown-chevron" />}
                </a>

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

            {/* More (•••) */}
            <li
              className="custom-nav-item has-dropdown more-item"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button className="custom-nav-link more-btn" aria-label="More Categories">
                <BsThreeDots size={20} />
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

            {/* Theme toggle */}
            <li className="custom-nav-item theme-nav-item">
              <button
                className="custom-nav-link theme-icon-btn"
                onClick={() => setDarkMode(!darkMode)}
                title={darkMode ? 'लाइट मोड में बदलें' : 'डार्क मोड में बदलें'}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>

          {/* Search */}
          <div className="custom-nav-search-wrap">
            <button
              className="nav-search-trigger"
              onClick={() => setSearchOpen(!searchOpen)}
              title="खोजें"
              aria-label="Search"
            >
              <Search size={19} />
            </button>
          </div>
        </div>
      </nav>

      {/* Expandable search bar */}
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