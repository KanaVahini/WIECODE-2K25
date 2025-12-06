import React from 'react';
import './ProductivityLanding.css';
import TrueFocus from './TrueFocus';
import Navbar from "./components/Navbar";
import DetectionSections from "./components/DetectionSections.jsx";
import Footer from "./components/footer.jsx";   // FIXED import (case sensitive)

const ProductivityLanding = () => {
  return (
    <div className="landing-container">

      <Navbar />

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="main-content">

        <div className="content-grid">
          <div className="left-content">

            <h1 className="main-heading">
              Verify<br />AUTHENTICITY
            </h1>

            <p className="description">
              Your decisions are too valuable for deception. Tap here to expose the fake news,
              counterfeit products, and misleading reviews that shape your world.
            </p>

            <div className="button-group">
              <button className="primary-btn">Try Now !</button>
              <button className="secondary-btn">
                Learn more <span className="arrow">→</span>
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE ANIMATION */}
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
      {/* ---------------- END main-content ---------------- */}

      {/* STATIC DETECTION CARDS */}
      <DetectionSections />
        <section className="about-section">

    <div className="about-content">

        <h2 className="about-title">About Us</h2>

        <p className="about-text">
        At Authentify, we’re building more than a product — 
        we’re building a shield. A place where your decisions are guided by truth, 
        not noise. In a digital world overflowing with fake reviews, deceptive products, 
        and misleading news, we stand as your quiet guardian.  
        <br /><br />
        Our mission is simple: empower you to verify anything that shapes your world.  
        With intelligent detection, clean design, and seamless experiences, 
        Authentify helps you choose wisely, live confidently, and trust with clarity.
        </p>

    </div>
    </section>


      

      {/* FOOTER AT THE END */}
      <Footer />

    </div>
  );
};

export default ProductivityLanding;

