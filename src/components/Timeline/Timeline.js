import React, { useState, useEffect } from "react";

import TimelineItem from "../TimelineItem/TimelineItem";

import "./timeline.css";

export default function Timeline() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight

    const scrolled = (windowScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-line_container">
        <div
          className="timeline-line_fill"
          style={{ height: `${scroll}%` }}
        ></div>
      </div>
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </div>
  );
}
