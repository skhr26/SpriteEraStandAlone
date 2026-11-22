import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationBell() {
  return (
    <div className="floating-bell-container" title="सूचनाएं चालू करें">
      <span className="bell-new-tag">NEW</span>
      <button 
        className="floating-notification-bell" 
        aria-label="सूचनाएं चालू करें"
      >
        <Bell size={20} color="#ffffff" strokeWidth={2.2} />
      </button>
    </div>
  );
}
