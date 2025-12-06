import React from 'react';
import './ProductivityLanding.css';
import TrueFocus from './TrueFocus';

const ProductivityLanding = () => {
  return (
    <div className="landing-container">

      

      {/* Content */}
      <div className="main-content">
        <div className="content-grid">

          <div className="left-content">
            

            <h1 className="main-heading">
              Verify<br />AUTHENTICITY
            </h1>

            <p className="description">
              Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes.
            </p>

            <div className="button-group">
              <button className="primary-btn">Try Now !</button>
              <button className="secondary-btn">
                Learn more <span className="arrow">→</span>
              </button>
            </div>
          </div>

        </div>

        <div className="right-content">
          <div className="cylinder-space"></div>
          <div className="wheel-space"></div>
          <div className="curved-space"></div>
          <div className="true-focus-wrapper">
            <TrueFocus 
              sentence="Fake Fact"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
      </div>
    </div>
  );    
};

export default ProductivityLanding;
