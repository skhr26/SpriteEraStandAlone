import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegCopy,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';
import { MdSportsCricket } from 'react-icons/md';
import { Sparkles } from 'lucide-react';
import { 
  cricketArticleData, 
  relatedArticles,
  astroArticleData,
  astroRelatedArticles
} from '../data/cricketArticle';
import { getCategoryFromPath, getRouteForCategory } from '../data/routeMap';

function ShareButtons({ className = '' }) {
  return (
    <div className={`article-share-row ${className}`.trim()} aria-label="इस खबर को शेयर करें">
      <button type="button" className="share-btn share-whatsapp" title="WhatsApp"><FaWhatsapp size={16} /></button>
      <button type="button" className="share-btn share-twitter" title="X"><FaXTwitter size={14} /></button>
      <button type="button" className="share-btn share-fb" title="Facebook"><FaFacebookF size={14} /></button>
      <button type="button" className="share-btn share-linkedin" title="LinkedIn"><FaLinkedinIn size={14} /></button>
      <button type="button" className="share-btn share-telegram" title="Telegram"><FaTelegramPlane size={14} /></button>
      <button type="button" className="share-btn share-copy" title="लिंक कॉपी करें"><FaRegCopy size={14} /></button>
    </div>
  );
}

export default function CricketArticlePage() {
  const location = useLocation();
  const { category, subSection, stateSlug, citySlug } = useParams();

  const isAstro = category === 'astro' || 
                  category === 'rashifal' || 
                  category === 'panchang' || 
                  location.pathname.startsWith('/astro') || 
                  location.pathname.includes('rashifal') || 
                  location.pathname.includes('panchang') || 
                  location.pathname.includes('numerology') || 
                  location.pathname.includes('jyotish');

  const article = isAstro ? astroArticleData : cricketArticleData;
  const currentRelatedArticles = isAstro ? astroRelatedArticles : relatedArticles;

  useEffect(() => {
    document.title = `${article.headline} | नवभारत`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.headline, location.pathname]);

  // Dynamic breadcrumb generation matching exact URL hierarchy
  const renderBreadcrumb = () => {
    if (stateSlug) {
      const stateName = getCategoryFromPath(`/state/${stateSlug}`);
      const cityName = citySlug ? getCategoryFromPath(`/state/${stateSlug}/${citySlug}`) : null;
      return (
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">होम</Link>
          <span className="breadcrumb-sep">›</span>
          <Link to={`/state/${stateSlug}`}>{stateName}</Link>
          {cityName && cityName !== stateName && (
            <>
              <span className="breadcrumb-sep">›</span>
              <Link to={`/state/${stateSlug}/${citySlug}`}>{cityName}</Link>
            </>
          )}
        </nav>
      );
    }

    if (category) {
      const catName = getCategoryFromPath(`/${category}`);
      return (
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">होम</Link>
          <span className="breadcrumb-sep">›</span>
          <Link to={`/${category}`}>{catName}</Link>
          {subSection && (
            <>
              <span className="breadcrumb-sep">›</span>
              <Link to={`/${category}/${subSection}`}>{subSection}</Link>
            </>
          )}
        </nav>
      );
    }

    return (
      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">होम</Link>
        <span className="breadcrumb-sep">›</span>
        <Link to="/sports">खेल</Link>
        <span className="breadcrumb-sep">›</span>
        <Link to="/sports/cricket">क्रिकेट</Link>
      </nav>
    );
  };

  const currentCategoryName = stateSlug 
    ? getCategoryFromPath(`/state/${stateSlug}`) 
    : (category ? getCategoryFromPath(`/${category}`) : 'क्रिकेट');

  return (
    <main className="article-page-wrapper">
      <div className="center-container">

        {renderBreadcrumb()}

        <div className="article-layout-grid">
          <article className="article-main-col">
            <div className="article-category-tag">
              {isAstro ? <Sparkles size={16} /> : <MdSportsCricket size={16} />}
              <span>{currentCategoryName}</span>
            </div>

            <h1 className="article-headline">{article.headline}</h1>
            <p className="article-subheadline">{article.subHeadline}</p>

            <div className="article-meta-row">
              <div className="article-author-info">
                <span className="article-author-name">{article.author}</span>
                <span className="article-meta-sep">|</span>
                <span className="article-date"><FaRegCalendarAlt size={12} />{article.publishDate}</span>
                <span className="article-meta-sep">|</span>
                <span className="article-time"><FaRegClock size={12} />{article.publishTime}</span>
              </div>
            </div>

            <ShareButtons />

            {article.matchInfo && !isAstro && (
              <section className="live-score-widget" aria-label="लाइव स्कोर">
                <div className="score-widget-header">
                  <div className="live-badge-pulse"><span className="live-dot" /><span>LIVE</span></div>
                  <span className="match-format">{article.matchInfo.format}</span>
                </div>
                <div className="score-widget-title">{article.matchInfo.tournament}</div>
                <div className="score-widget-venue">{article.matchInfo.venue}</div>

                <div className="score-teams-row">
                  <div className="score-team">
                    <div className="team-flag-wrap"><img src={article.matchInfo.team1.flag} alt={article.matchInfo.team1.name} /></div>
                    <div className="team-info">
                      <span className="team-name">{article.matchInfo.team1.name}</span>
                      <span className="team-score">{article.matchInfo.team1.score}</span>
                      <span className="team-overs">({article.matchInfo.team1.overs} ओवर)</span>
                    </div>
                  </div>
                  <div className="score-vs">VS</div>
                  <div className="score-team">
                    <div className="team-flag-wrap"><img src={article.matchInfo.team2.flag} alt={article.matchInfo.team2.name} /></div>
                    <div className="team-info">
                      <span className="team-name">{article.matchInfo.team2.name}</span>
                      <span className="team-score">{article.matchInfo.team2.score}</span>
                      <span className="team-overs">({article.matchInfo.team2.overs} ओवर)</span>
                    </div>
                  </div>
                </div>

                <div className="score-match-status">{article.matchInfo.status}</div>
                <div className="score-toss-info"><strong>टॉस:</strong> {article.matchInfo.toss}</div>
              </section>
            )}

            <figure className="article-featured-img-wrap">
              <img src={article.featuredImage} alt={article.headline} loading="eager" />
              <figcaption className="img-caption">{article.imageCaption}</figcaption>
            </figure>

            <div className="article-body-content">
              {article.bodyParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

              {article.playingXI && !isAstro && (
                <section className="playing-xi-section">
                  <h2 className="playing-xi-title">दोनों टीमों की प्लेइंग-11</h2>
                  <div className="playing-xi-grid">
                    <div className="playing-xi-team">
                      <h3 className="xi-team-name"><img src={article.matchInfo.team1.flag} alt="" className="xi-flag" />भारत-ए</h3>
                      <ol className="xi-player-list">{article.playingXI.indiaA.map((player) => <li key={player}>{player}</li>)}</ol>
                    </div>
                    <div className="playing-xi-team">
                      <h3 className="xi-team-name"><img src={article.matchInfo.team2.flag} alt="" className="xi-flag" />पाकिस्तान-ए</h3>
                      <ol className="xi-player-list">{article.playingXI.pakistanA.map((player) => <li key={player}>{player}</li>)}</ol>
                    </div>
                  </div>
                </section>
              )}

              {article.bodyParagraphs2.map((paragraph, index) => <p key={`more-${index}`}>{paragraph}</p>)}
            </div>

            <div className="article-tags-row">
              {article.tags.map((tag) => <Link key={tag} to={getRouteForCategory(tag)} className="article-tag-pill">{tag}</Link>)}
            </div>
            <ShareButtons className="article-share-bottom" />
          </article>

          <aside className="article-sidebar" aria-label="संबंधित सामग्री">
            <div className="article-sidebar-sticky">
              <section className="sidebar-related-section">
                <h2 className="sidebar-section-title"><span className="accent-bar">|</span><span>संबंधित खबरें</span></h2>
                {currentRelatedArticles.map((item) => (
                  <Link key={item.id} to={item.url} className="sidebar-related-card">
                    <div className="sidebar-related-thumb"><img src={item.imageUrl} alt={item.title} loading="lazy" /></div>
                    <div className="sidebar-related-body"><h3 className="sidebar-related-title">{item.title}</h3><span className="sidebar-related-time">{item.time}</span></div>
                  </Link>
                ))}
              </section>

              <section className="sidebar-trending-section">
                <h2 className="sidebar-section-title"><span className="accent-bar">|</span><span>ट्रेंडिंग</span></h2>
                {article.trending.map((item, index) => (
                  <Link key={item} to="/latest-news" className="sidebar-trending-item">
                    <span className="trending-number">{index + 1}</span><span className="trending-text">{item}</span><IoMdArrowForward size={14} className="trending-arrow" />
                  </Link>
                ))}
              </section>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
