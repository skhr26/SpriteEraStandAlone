import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Pause, 
  Play, 
  ArrowLeft 
} from 'lucide-react';
import { getWebStoryById, getAllWebStories } from '../../data/webStorySlides';
import './WebStoryPlayer.css';

const SLIDE_DURATION_MS = 5000; // 5 seconds per slide
const PROGRESS_INTERVAL_MS = 40; // Update bar every 40ms for smooth 60fps-like progress

/**
 * WebStoryPlayer (वेब स्टोरीज़ प्लेयर)
 * Full screen story player matching Instagram Stories & Google Web Stories
 * As requested by the user:
 * - 9:16 vertical card with auto-filling progress bars
 * - "नवभारत" logo at top center
 * - Share icon at top right
 * - Bold Hindi headline & reporter name at bottom
 * - Next/prev desktop buttons + touch tap zones
 * - Ambient blurred background
 */
export default function WebStoryPlayer({ storyId: propStoryId, onClose }) {
  const navigate = useNavigate();
  const params = useParams();
  
  // Resolve storyId from prop or URL params
  const targetStoryId = propStoryId || params.slug || params.storyId || 'work-is-underway-on-5-new-tata-suvs-nexon-to-the-safari-ev-arrive-by-2027-srs13';

  // State
  const [currentStoryId, setCurrentStoryId] = useState(targetStoryId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showToast, setShowToast] = useState('');

  const progressTimerRef = useRef(null);
  const isHoldingRef = useRef(false);

  // Get current story data and list of all stories
  const allStories = getAllWebStories();
  const currentStory = getWebStoryById(currentStoryId);
  const slides = currentStory?.slides || [];
  const currentSlide = slides[currentSlideIndex] || slides[0] || {};

  // Story Index in all stories
  const storyIndex = allStories.findIndex(
    s => s.id.toLowerCase() === currentStoryId.toLowerCase() ||
         (s.slug && s.slug.toLowerCase() === currentStoryId.toLowerCase()) ||
         (s.alias && s.alias.toLowerCase() === currentStoryId.toLowerCase())
  );

  // Handle closing the player
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/aurpadho-webstories');
    }
  }, [navigate, onClose]);

  // Navigate to Next Slide or Next Story
  const handleNext = useCallback(() => {
    setProgress(0);
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Transition to next story if available
      if (storyIndex >= 0 && storyIndex < allStories.length - 1) {
        const nextStory = allStories[storyIndex + 1];
        setCurrentStoryId(nextStory.id);
        setCurrentSlideIndex(0);
      } else {
        // Last slide of last story -> close player
        handleClose();
      }
    }
  }, [currentSlideIndex, slides.length, storyIndex, allStories, handleClose]);

  // Navigate to Previous Slide or Previous Story
  const handlePrev = useCallback(() => {
    setProgress(0);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    } else {
      // Transition to previous story if available
      if (storyIndex > 0) {
        const prevStory = allStories[storyIndex - 1];
        setCurrentStoryId(prevStory.id);
        setCurrentSlideIndex(prevStory.slides.length - 1);
      }
    }
  }, [currentSlideIndex, storyIndex, allStories]);

  // Update browser URL cleanly when currentStory changes (without throwing render errors)
  useEffect(() => {
    if (currentStory) {
      const targetUrl = currentStory.canonicalUrl || 
        (currentStory.slug ? `/ampstories/web-stories/${currentStory.slug}` : `/web-story/${currentStory.id}`);
      
      const currentPath = window.location.pathname;
      if (currentPath !== targetUrl) {
        navigate(targetUrl, { replace: true });
      }
    }
  }, [currentStory, navigate]);

  // Sync state if external URL param changes
  useEffect(() => {
    const activeParam = params.slug || params.storyId;
    if (activeParam && activeParam !== currentStoryId) {
      setCurrentStoryId(activeParam);
      setCurrentSlideIndex(0);
      setProgress(0);
    }
  }, [params.slug, params.storyId, currentStoryId]);

  // Slide Progress and Auto-Advance Timer
  useEffect(() => {
    if (isPaused) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const stepIncrement = (PROGRESS_INTERVAL_MS / SLIDE_DURATION_MS) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, PROGRESS_INTERVAL_MS);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPaused, handleNext]);

  // Keyboard navigation (Arrow keys & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleClose]);

  // Hold to pause handlers
  const handleTouchStart = () => {
    isHoldingRef.current = true;
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    isHoldingRef.current = false;
    setIsPaused(false);
  };

  // Share functionality
  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = {
      title: currentSlide?.headline || currentStory?.title,
      text: `${currentSlide?.headline} - नवभारत वेब स्टोरीज़`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast('लिंक कॉपी हो गया!');
        setTimeout(() => setShowToast(''), 2500);
      } catch (err) {
        setShowToast('शेयर करने के लिए URL कॉपी करें');
        setTimeout(() => setShowToast(''), 2500);
      }
    }
  };

  const togglePause = (e) => {
    e.stopPropagation();
    setIsPaused(prev => !prev);
  };

  const isFirstSlideOfFirstStory = storyIndex === 0 && currentSlideIndex === 0;

  return (
    <div className="web-story-viewer-overlay" role="dialog" aria-modal="true">
      {/* ── Atmospheric dynamic blurred background matching slide ── */}
      <div 
        className="web-story-ambient-bg" 
        style={{ backgroundImage: `url(${currentSlide?.image || currentStory?.coverImage || '/assets/webstory-backdrop.jpg'})` }} 
      />
      <div className="web-story-ambient-gradient" />

      {/* ── Main Stage Area (Card + Nav Arrows strictly matching Image 2) ── */}
      <div className="web-story-stage">
        {/* Desktop Prev Button */}
        <button
          type="button"
          className="web-story-nav-btn prev"
          onClick={handlePrev}
          disabled={isFirstSlideOfFirstStory}
          title="पिछली स्लाइड (बायाँ तीर)"
          aria-label="पिछली स्लाइड"
        >
          <ChevronLeft size={28} />
        </button>

        {/* ── 9:16 Vertical Story Card ── */}
        <div 
          className="web-story-player-card"
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide Background Image */}
          <div className="web-story-image-wrap">
            <img 
              src={currentSlide?.image || currentStory?.coverImage} 
              alt={currentSlide?.headline || 'वेब स्टोरी'} 
              className="web-story-image"
              loading="eager"
            />
          </div>

          {/* Vignette Gradients for High Readability */}
          <div className="web-story-gradient-vignette" />

          {/* Segmented Top Progress Bars */}
          <div className="web-story-progress-container" aria-label="स्टोरी प्रोग्रेस">
            {slides.map((_, idx) => {
              let fillPercentage = 0;
              if (idx < currentSlideIndex) {
                fillPercentage = 100;
              } else if (idx === currentSlideIndex) {
                fillPercentage = progress;
              }

              return (
                <div key={idx} className="web-story-progress-track">
                  <div 
                    className={`web-story-progress-bar ${idx < currentSlideIndex ? 'completed' : ''}`}
                    style={{ width: `${fillPercentage}%` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Card Top Header: Centered Navbharat Logo + Right Send Icon matching Image 2 */}
          <header className="web-story-card-header">
            <span className="web-story-brand-logo">
              नवभारत
            </span>

            <div className="web-story-header-actions">
              <button 
                type="button" 
                className="web-story-action-icon-btn"
                onClick={handleShare}
                title="शेयर करें"
                aria-label="शेयर करें"
              >
                <Send size={18} />
              </button>
            </div>
          </header>

          {/* Left/Right Tap Zones for Interactive Clicking */}
          <div 
            className="web-story-tap-zone-prev" 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            title="पिछली स्लाइड"
          />
          <div 
            className="web-story-tap-zone-next" 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            title="अगली स्लाइड"
          />

          {/* Bottom Caption Box: Headline & Author strictly matching Image 2 */}
          <footer className="web-story-caption-box">
            <h2 className="web-story-caption-headline">
              {currentSlide?.headline || currentStory?.title}
            </h2>

            <div className="web-story-author-tag">
              <span>{currentSlide?.author || currentStory?.author || 'सिमरन सिंह'}</span>
            </div>
          </footer>
        </div>

        {/* Desktop Next Button */}
        <button
          type="button"
          className="web-story-nav-btn next"
          onClick={handleNext}
          title="अगली स्लाइड (दायाँ तीर)"
          aria-label="अगली स्लाइड"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="web-story-toast" role="status">
          {showToast}
        </div>
      )}
    </div>
  );
}
