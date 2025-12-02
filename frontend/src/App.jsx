import React, { useState } from "react";
import LightRays from "./LightRays";
import "./App.css";

export default function App() {
  const [demoOn, setDemoOn] = useState(false);

  return (
    <div className="app-root">
      {/* Light rays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.6}
        lightSpread={1.4}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.12}
        noiseAmount={0.02}
        distortion={0.003}
        className="custom-rays"
      />

      {/* Foreground overlay */}
      <div className="page-overlay">

        {/* NAVBAR */}
        <header className="nav-card">
          <div className="nav-inner">
            <div className="brand">
              <div className="brand-logo">♖</div>
              <div className="brand-name">WIECode</div>
            </div>

            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* CENTER CONTENT — CLEAN VERSION */}
        <main className="center-content">
          <span className="badge">✨ Chapter 12 of 12</span>

          <h1 className="hero-heading">
            May this 2026 bring even more happiness to our lives :)
          </h1>

          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </main>

        {/* BOTTOM RIGHT TOGGLE */}
        <div className="demo-toggle">
          <span className="demo-label">Demo Content</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={demoOn}
              onChange={() => setDemoOn(!demoOn)}
            />
            <span className="slider" />
          </label>
        </div>

      </div>
    </div>
  );
}
