import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { latestStories } from '../data/latest';

export default function LatestNews() {
  return (
    <section
      className="news-grid-section"
      id="latest-news-section"
      aria-label="Latest News Grid"
    >
      <div className="center-container">
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="section-indicator" />
            <h2 className="section-title">ताजा खबर</h2>
          </div>

          <Link
            to="/latest-news"
            className="section-more-link"
            title="और पढ़ें"
          >
            <span>और पढ़ें</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="four-col-grid" data-slot="latest-news-grid">
          {latestStories.map((story) => (
            <article key={story.id} className="news-card-v" data-slot="news-card">
              <Link
                to={story.url || "/latest-news"}
                className="card-img-wrap"
                title={story.headline}
                aria-label={story.headline}
              >
                <img
                  src={story.imageUrl}
                  alt={story.headline}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = '/assets/placeholder.svg';
                  }}
                />
              </Link>

              <div className="card-v-body">
                <span className="card-badge-pill">{story.section}</span>

                <h3 className="card-v-title">
                  <Link to={story.url || "/latest-news"}>{story.headline}</Link>
                </h3>

                <div className="card-meta">
                  <span className="card-author">{story.author}</span>
                  <span>•</span>
                  <span className="card-time">{story.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
