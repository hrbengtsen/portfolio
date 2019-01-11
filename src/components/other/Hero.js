import React from 'react';

import heroPhone from '../../img/hero-phone.svg';
import heroTablet from '../../img/hero-tablet.svg';

const Hero = () => (
  <div className="bg-hero center">
    <div className="content section-top">
      <div className="anim-name">
        <h2 className="wide">Mikkel Bengtsen</h2>
        <h3>- a developer with a passion for creating.</h3>
      </div>

      <div className="hero anim-pc display-container">
        <img className="hero-phone anim-phone" src={heroPhone} alt="#" height="400"/>
        <img className="hero-tablet anim-tablet" src={heroTablet} alt="#" height="400"/>
      </div>
    </div>
  </div>
);

export default Hero;
