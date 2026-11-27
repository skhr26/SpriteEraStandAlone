import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WebStoryPlayer from '../components/webstories/WebStoryPlayer';
import { getWebStoryById } from '../data/webStorySlides';

/**
 * WebStoryViewerPage (वेब स्टोरीज़ व्यूअर पेज)
 * Dedicated full-screen route for playing Web Stories
 * Route patterns:
 * - /web-story/:storyId
 * - /webstory/:storyId
 * - /webstories/view/:storyId
 */
export default function WebStoryViewerPage() {
  const { slug, storyId } = useParams();
  const currentKey = slug || storyId;

  useEffect(() => {
    const story = getWebStoryById(currentKey);
    document.title = `${story?.title || 'वेब स्टोरीज़'} | नवभारत`;
  }, [currentKey]);

  return (
    <div className="web-story-viewer-page-container">
      <WebStoryPlayer storyId={currentKey} />
    </div>
  );
}

// Named alias export for developer convenience
export { WebStoryViewerPage as webStoryViewerPage };
