import React from 'react';
import './DetectionSections.css';

export default function DetectionSections() {
  const sections = [
    {
      title: "Fake News Detection",
      desc: "Instantly verify headlines and breaking news using AI-powered source validation and linguistic analysis.",
      btn: "Detect Fake News",
      icon: "📰"
    },
    {
      title: "Fake Product Detection",
      desc: "Scan product images to detect counterfeit packaging, wrong labels, and manipulated serial numbers.",
      btn: "Detect Fake Product",
      icon: "📦"
    },
    {
      title: "Fake Review Detection",
      desc: "Analyze product reviews to identify bot-generated, duplicate, or manipulated ratings.",
      btn: "Detect Fake Reviews",
      icon: "⭐"
    },
  ];

  return (
    <div className="detect-wrapper-static">
      <h1 className="detect-title">Detection Tools</h1>

      <div className="detect-grid">
        {sections.map((s, i) => (
          <div key={i} className="detect-card">
            <div className="card-icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <button>
              {s.btn}
              <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}