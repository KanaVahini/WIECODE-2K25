import React from 'react';
import './ProductivityLanding.css';

const ProductivityLanding = () => {
  return (
    <div className="landing-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-box">
            <div className="logo-diamond"></div>
          </div>
          <span className="made-by-text">made by</span>
          <span className="framer-text">Framer</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Customers</a>
          <a href="#" className="nav-link">Updates</a>
          <a href="#" className="nav-link">Help</a>
          <button className="get-free-btn">Get for free</button>
        </div>
      </nav>

      {/* Content */}
      <div className="main-content">
        <div className="content-grid">

          <div className="left-content">
            <div className="version-badge">Version 2.0 is here</div>

            <h1 className="main-heading">
              Pathway to<br />productivity
            </h1>

            <p className="description">
              Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes.
            </p>

            <div className="button-group">
              <button className="primary-btn">Get for free</button>
              <button className="secondary-btn">
                Learn more <span className="arrow">→</span>
              </button>
            </div>
          </div>

          <div className="right-content">
            <div className="cylinder-space"></div>
            <div className="wheel-space"></div>
            <div className="curved-space"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductivityLanding;
