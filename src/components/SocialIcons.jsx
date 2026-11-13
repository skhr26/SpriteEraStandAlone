import React from 'react';

// Google Play Store Icon (Black triangle)
export function GooglePlayIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.954 1.954 0 0 1-.61-.318c-.37-.32-.6-.79-.6-1.368V3.5c0-.578.23-1.048.6-1.368.177-.154.385-.262.609-.318zm11.238 11.24L12.57 15.33l4.775 2.75 3.033-1.75-5.531-3.276zm-2.277-2.108L14.847 8.67l5.531-3.276-3.033-1.75-4.775 2.75zM4.66 2.873l9.043 9.043-9.043 9.043V2.873z" />
    </svg>
  );
}

// Apple Icon (Black apple)
export function AppleIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.93-2.84-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.72-.94 2.73 1.01.08 2.03-.49 2.65-1.24z" />
    </svg>
  );
}

// X / Twitter - Black circle with white X
export function XCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#000000" />
      <path
        d="M19.16 8.5h-1.89l-4.13 4.72-3.6-4.72H6.5l5.24 6.87L6.5 21.5h1.89l4.49-5.13 3.88 5.13h3.04l-5.6-7.34L19.16 8.5zm-2.55 11.58h-1.05L9.63 9.87h1.05l5.93 10.21z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// YouTube - Red circle with white play triangle
export function YouTubeCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#FF0000" />
      <path
        d="M21.2 11.2a1.75 1.75 0 0 0-1.23-1.24C18.88 9.67 14 9.67 14 9.67s-4.88 0-5.97.29a1.75 1.75 0 0 0-1.23 1.24A18.4 18.4 0 0 0 6.5 14c0 1 .1 1.95.3 2.8a1.75 1.75 0 0 0 1.23 1.24c1.09.29 5.97.29 5.97.29s4.88 0 5.97-.29a1.75 1.75 0 0 0 1.23-1.24c.2-.85.3-1.8.3-2.8 0-1-.1-1.95-.3-2.8z"
        fill="#FFFFFF"
      />
      <path d="M12.5 16.5l4-2.5-4-2.5v5z" fill="#FF0000" />
    </svg>
  );
}

// Facebook - Blue circle with white f
export function FacebookCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#1877F2" />
      <path
        d="M15.5 14.5h2.2l.33-2.5h-2.53V10.4c0-.68.22-1.15 1.24-1.15h1.26V7.02c-.22-.03-.98-.1-1.86-.1-1.84 0-3.1 1.12-3.1 3.2v1.88H11v2.5h2.04V21h2.46v-6.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// LinkedIn - Deep Blue circle with white in
export function LinkedInCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#0A66C2" />
      <path
        d="M9.8 11.2h2.3V19H9.8v-7.8zM11 7.8a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7zm4.2 3.4h2.2v1.1h.03c.3-.6 1.1-1.3 2.3-1.3 2.5 0 3 1.6 3 3.8V19h-2.3v-3.7c0-.9-.02-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2V19h-2.4v-7.8h-.03z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// WhatsApp - Green circle with white phone logo
export function WhatsAppCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#25D366" />
      <path
        d="M14 6.8a7.2 7.2 0 0 0-6.2 10.9L7 21.2l3.6-.95a7.2 7.2 0 1 0 3.4-13.45zm3.6 10.2c-.15.42-.88.8-1.22.85-.32.05-.72.08-2.32-.58a8.2 8.2 0 0 1-3.2-2.82c-.37-.5-.92-1.37-.92-2.34 0-.96.5-1.44.68-1.63.18-.2.4-.25.53-.25.13 0 .27 0 .38.01.12.01.28-.05.44.33.16.38.55 1.34.6 1.44.05.1.08.22.02.35-.07.13-.1.21-.2.33-.1.12-.2.27-.3.36-.1.1-.22.21-.1.41.13.22.58.96 1.25 1.55.86.77 1.58 1.01 1.8 1.12.22.1.35.09.48-.06.13-.15.55-.64.7-.86.15-.22.3-.18.5-.1.2.07 1.3.61 1.52.72.22.11.37.17.43.26.05.1.05.57-.1.99z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Instagram - Gradient circle with camera
export function InstagramCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <defs>
        <radialGradient id="instaGrad" cx="30%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#ffdc80" />
          <stop offset="25%" stopColor="#fd5949" />
          <stop offset="50%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="14" fill="url(#instaGrad)" />
      <rect x="8.5" y="8.5" width="11" height="11" rx="3" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="2.8" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="17.2" cy="10.8" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

// Google News - White circle with folded colored newspaper icon
export function GoogleNewsCircleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13.5" fill="#FFFFFF" stroke="#E5E7EB" />
      <path d="M9 9.5h6a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 17.5V11A1.5 1.5 0 0 1 9 9.5z" fill="#4285F4" />
      <path d="M15 11.5h4a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5h-4v-7.5z" fill="#34A853" opacity="0.9" />
      <rect x="9.5" y="11.5" width="5" height="1.2" rx="0.6" fill="#FFFFFF" />
      <rect x="9.5" y="13.5" width="5" height="1.2" rx="0.6" fill="#FFFFFF" />
      <rect x="9.5" y="15.5" width="3.5" height="1.2" rx="0.6" fill="#EA4335" />
      <circle cx="17.5" cy="14.5" r="1" fill="#FBBC05" />
    </svg>
  );
}

// Plain single-color SVGs for footer or generic use
export function FacebookIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TwitterIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
