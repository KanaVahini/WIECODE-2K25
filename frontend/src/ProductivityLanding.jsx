import React from 'react';
import './ProductivityLanding.css';
import TrueFocus from './TrueFocus';
import Navbar from "./components/Navbar";
import DetectionSections from "./components/DetectionSections.jsx";
import Footer from './components/footer.jsx';

const ProductivityLanding = () => {
  return (
    <div className="landing-container">

      <Navbar />

      {/* Content */}
      <div className="main-content">
        <div className="content-grid">

          <div className="left-content">

            <h1 className="main-heading">
              Verify<br />AUTHENTICITY
            </h1>

            <p className="description">
              Your decisions are too valuable for deception. Tap here to expose the fake news, counterfeit products, and misleading reviews that shape your world.
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
      </div>   {/* ← END of main-content */}

      {/* FULL WIDTH SCROLL SECTION — placed OUTSIDE main-content */}
      <DetectionSections />
      <Footer />                        

    </div>
  );    
};

export default ProductivityLanding;
