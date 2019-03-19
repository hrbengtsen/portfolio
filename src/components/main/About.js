import React from 'react';

import Header from '../other/Header';
import Hero from '../other/Hero';
import Intro from '../other/Intro';
import Abilities from '../other/Abilities';
import Contact from '../other/Contact';
import Footer from '../other/Footer';

const About = ({match}) => (
  <div>
    <Header active={'About'} />
    <Hero />
    <Intro />
    <Abilities />
    <Contact />
    <Footer active={'About'} />
  </div>
);

export default About;
