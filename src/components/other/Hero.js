import React from 'react';

import heroPhone from '../../img/hero-phone.svg';
import heroTablet from '../../img/hero-tablet.svg';

const Hero = () => (
  <div className="bg-hero center">
    <main className="content section-top-resp">
      <div className="anim-seq">
        <h1 className="anim-fadeInLeft wide">Mikkel Bengtsen</h1>
        <h3 className="anim-fadeInLeft">- a developer with a passion for creating.</h3>
      </div>

      <div className="hero anim-seq anim-fadeInUp display-container">
        <div className="hero-nested">
          <img className="hero-phone anim-fadeInUp" src={heroPhone} alt="Phone Illustration"/>
          <img className="hero-tablet anim-fadeInUp" src={heroTablet} alt="Tablet Illustration"/>
        </div>
      </div>
    </main>
  </div>
);

export default Hero;
