import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
import { getRouteForCategory, getCategoryFromPath } from '../data/routeMap';

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

export default function Header({ darkMode, setDarkMode, activePage, setActivePage, onNavigateToHome, onNavigateToLatest, onOpenDrawer }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = getCategoryFromPath(location.pathname, searchParams.get('category'));
  const isHome = location.pathname === "/";

  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownTimeoutRef = React.useRef(null);

  const handleMouseEnterItem = (val) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(val);
  };

  const handleMouseLeaveItem = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target && typeof e.target.closest === 'function' && !e.target.closest('.has-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Sticky Navbar when scrolling past topbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      const q = searchQuery.trim();
      navigate(`/aur-padho?category=${encodeURIComponent(q)}`, {
        state: { category: q }
      });
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className={`site-header-custom ${isSticky ? 'has-sticky-nav' : ''}`}>
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
            <Link 
              to="/" 
              className="custom-logo-wrap" 
              aria-label="Navbharat Home"
            >
              <img src="/assets/logo.png" alt="नवभारत" className="custom-navbharat-logo" />
            </Link>
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
      <nav className={`custom-bottom-navbar ${isSticky ? 'is-sticky' : ''}`}>
        <div className="navbar-full-width custom-nav-inner">
          <ul className="custom-nav-menu">
            {navCategories.map((item, idx) => {
              const isItemHome = item.name === "होम";
              const targetTo = isItemHome ? "/" : getRouteForCategory(item.name);

              const isItemActive = isItemHome
                ? isHome
                : !isHome && (
                    item.name === currentCategory ||
                    (item.name === "ताजा खबर" && (currentCategory === "ताजा खबर" || currentCategory === "ताज़ा खबर")) ||
                    (item.name === "एस्ट्रो" && (currentCategory === "एस्ट्रो" || location.pathname.startsWith('/astro') || location.pathname.includes('rashifal') || location.pathname.includes('panchang'))) ||
                    (item.subItems && item.subItems.some(sub => sub.name === currentCategory || location.pathname === getRouteForCategory(sub.name)))
                  );

              return (
                <li
                  key={idx}
                  className={`custom-nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => handleMouseEnterItem(item.hasDropdown ? idx : null)}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <Link 
                    to={targetTo} 
                    className={`custom-nav-link ${isItemActive ? 'active' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={14} className="dropdown-chevron" />}
                  </Link>

                  {item.hasDropdown && activeDropdown === idx && (
                    <ul 
                      className="custom-dropdown-menu"
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      }}
                      onMouseLeave={handleMouseLeaveItem}
                    >
                      {item.subItems.map((sub, sIdx) => {
                        const isSubActive = !isHome && (currentCategory === sub.name || location.pathname === getRouteForCategory(sub.name));
                        const subTarget = getRouteForCategory(sub.name);
                        return (
                          <li key={sIdx} className="dropdown-item">
                            <Link 
                              to={subTarget}
                              className={isSubActive ? 'active-sub' : ''}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}

            {/* More (•••) */}
            <li
              className="custom-nav-item has-dropdown more-item"
              onMouseEnter={() => handleMouseEnterItem('more')}
              onMouseLeave={handleMouseLeaveItem}
            >
              <button 
                type="button"
                className={`custom-nav-link more-btn ${activeDropdown === 'more' ? 'active' : ''}`}
                aria-label="More Categories"
                title="अन्य श्रेणियां"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(prev => prev === 'more' ? null : 'more');
                }}
              >
                <BsThreeDots size={20} />
              </button>

              {activeDropdown === 'more' && (
                <ul 
                  className="custom-dropdown-menu more-dropdown"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  {moreMenuItems.map((m, mIdx) => {
                    const isMoreActive = !isHome && currentCategory === m.name;
                    const targetLink = getRouteForCategory(m.name);

                    return (
                      <li key={mIdx} className="dropdown-item">
                        <Link 
                          to={targetLink}
                          className={isMoreActive ? 'active-sub' : ''}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {m.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Theme toggle */}
            <li 
              className="custom-nav-item theme-nav-item"
              onMouseEnter={() => handleMouseEnterItem(null)}
            >
              <button
                type="button"
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
          <div 
            className="custom-nav-search-wrap"
            onMouseEnter={() => handleMouseEnterItem(null)}
          >
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
      <div className={`search-dropdown ${searchOpen ? 'open' : ''} ${isSticky ? 'sticky-search' : ''}`}>
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