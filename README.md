# Navbharat Live Homepage Clone (React + Vite)

An exact, pixel-accurate responsive layout clone of **[Navbharat Live](https://navbharatlive.com/)** built entirely with **React 19 + Vite**, featuring modular content files (`viral.js`, `latest.js`, etc.), clean component mapping using `.map()`, and strict `1172px` center-content max-width constraint across all viewports.

---

## 🚀 Key Architectural Features

### 1. Separate Content Files & Component Mapping (`.map()`)
As requested, all section data is decoupled from the UI into dedicated content files under `src/data/`:
- **`src/data/viral.js`** — Viral video stories (duration, view counts, titles, thumbnails)
- **`src/data/latest.js`** — Latest news stories ("ताजा खबर")
- **`src/data/lead.js`** — Hero lead story, Column 1, Column 2, Column 3 stories, cricket widget, and trending rankings
- **`src/data/webStories.js`** — 9:16 portrait web stories
- **`src/data/stateNews.js`** — State-specific news (Maharashtra, MP, UP, CG)
- **`src/data/navigation.js`** — Navbar categories, breaking ticker items, trending hashtags, footer columns

Components consume these files and dynamically render cards using `Array.map()`:
```jsx
// src/components/ViralNews.jsx
import { viralStories } from '../data/viral';

export default function ViralNews() {
  return (
    <div className="four-col-grid">
      {viralStories.map((story) => (
        <article key={story.id} className="news-card-v">
          <div className="card-img-wrap">
            <img src={story.imageUrl} alt={story.headline} />
            <div className="video-play-overlay">
              <div className="play-circle"><Play size={18} /></div>
            </div>
            <span className="video-duration">{story.duration}</span>
          </div>
          <div className="card-v-body">
            <span className="card-badge-pill">{story.section}</span>
            <h3 className="card-v-title">{story.headline}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
```

### 2. Strict Center-Content Max-Width (`1172px`)
All sections (Header, Ticker, Lead Grid, News Grids, Web Stories, Footer) are wrapped in `.center-container`:
```css
.center-container {
  width: 100%;
  max-width: 1172px; /* Navbharat Live grid specification */
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
}
```
- **Zero Distortion**: Prevents content stretching or misalignment on ultrawide (1440p / 4K) displays while maintaining responsive padding on mobile/tablet.

### 3. Full Responsiveness Across Breakpoints
- **Desktop (≥ 1024px)**:
  - 2-layer Header: Topbar with live Hindi date/time, e-paper button, logo, social links, login, and dark mode toggle.
  - Sticky crimson red navigation bar (`#fb4949`) with search dropdown.
  - Signature 3-Column Lead Grid (`#four-col-grid-lead`):
    - **Col 1**: Hero featured story (16:9 banner) + 3 compact stories (image left, text right).
    - **Col 2**: 7 stacked stories with 1px dividers (text left, image right).
    - **Col 3**: 3 compact stories + live cricket scorecard widget + trending list.
  - 4-Column grids for "ताजा खबर" and "वायरल".
  - 6-Card portrait slider for "वेब स्टोरीज़" (9:16 aspect ratio).
- **Tablet (640px – 1023px)**:
  - Responsive 2-column grids for news cards and horizontal touch navigation.
- **Mobile (< 640px)**:
  - Dedicated mobile header with hamburger drawer menu and category pill scrollbar.
  - Single-column readable feed with horizontal compact cards.

---

## 📁 Directory Structure

```
SpriteEraStandAlone/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   └── assets/
│       ├── logo.png
│       └── placeholder.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   ├── viral.js         <-- Viral section content
│   │   ├── latest.js        <-- Latest news content
│   │   ├── lead.js          <-- Lead 3-col stories content
│   │   ├── webStories.js    <-- Web stories content
│   │   ├── stateNews.js     <-- State tabs news content
│   │   └── navigation.js    <-- Menu links & ticker content
│   └── components/
│       ├── Header.jsx       <-- Layer 1 & 2 Header
│       ├── MobileDrawer.jsx <-- Slide-in mobile menu
│       ├── BreakingTicker.jsx <-- Pulsing live ticker
│       ├── LeadGrid.jsx     <-- 3-Column lead layout (.map())
│       ├── LatestNews.jsx   <-- "ताजा खबर" grid (.map())
│       ├── ViralNews.jsx    <-- "वायरल" grid (.map())
│       ├── WebStories.jsx   <-- "वेब स्टोरीज़" slider (.map())
│       ├── StateNews.jsx    <-- Interactive state tabs (.map())
│       ├── SocialIcons.jsx  <-- SVG brand icons
│       └── Footer.jsx       <-- Full cloned footer (.map())
```

---

## 🛠️ How to Run

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Preview production build:**
   ```bash
   npm run preview
   ```
