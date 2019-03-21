import React from 'react';

import heroPhone from '../../img/hero-phone.svg';
import heroTablet from '../../img/hero-tablet.svg';

const Hero = () => (
  <div className="bg-hero center">
    <div className="content section-top">
      <div className="anim-seq">
        <h1 className="anim-fadeInLeft wide">Mikkel Bengtsen</h1>
        <h3 className="anim-fadeInLeft">- a developer with a passion for creating.</h3>
      </div>

      <div className="hero anim-seq anim-fadeInUp display-container">
        <img className="hero-phone anim-fadeInUp" src={heroPhone} alt="#"/>
        <img className="hero-tablet anim-fadeInUp" src={heroTablet} alt="#"/>
      </div>
    </div>
  </div>
);

export default Hero;
