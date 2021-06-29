import React from "react";

import "./timeline-item.css";

export default function TimelineItem() {
  return (
    <div className="timeline-item">
      <div className="timeline-item_content">
        <p className="timeline-item_content__title">Bonjour</p>
        <p className="timeline-item_content__body">Voici le test</p>
        <a href="/">LIEN </a>
      </div>
      <span className="timeline-item_content__circle">1</span>
    </div>
  );
}
