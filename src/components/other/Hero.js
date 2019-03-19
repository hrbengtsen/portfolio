import React from 'react';

import heroPhone from '../../img/hero-phone.svg';
import heroTablet from '../../img/hero-tablet.svg';

const Hero = () => (
  <div className="bg-hero center">
    <div className="content section-top">
      <div>
        <h1 className="anim-name1 wide">Mikkel Bengtsen</h1>
        <h3 className="anim-name2">- a developer with a passion for creating.</h3>
      </div>

      <div className="hero anim-pc display-container">
        <img className="hero-phone anim-phone" src={heroPhone} alt="#"/>
        <img className="hero-tablet anim-tablet" src={heroTablet} alt="#"/>
      </div>
    </div>
  </div>
);

export default Hero;
