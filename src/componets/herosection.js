import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>We Build Content Creators & AI-Powered Businesses</h1>
        <p>
          From content creation to AI-driven tools, we guide and support your journey in becoming a complete digital creator.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Explore Services</button>
        </div>
      </div>
      <div className="hero-right">
        {/* Image or animation goes here */}
        <div className="image-placeholder">[ Add visual here ]</div>
      </div>
    </section>
  );
};

export default HeroSection;
