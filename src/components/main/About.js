import React from 'react';

import Header from '../other/Header';
import Hero from '../other/Hero';
import Text from '../other/Text';
import Abilities from '../other/Abilities';
import Contact from '../other/Contact';
import Footer from '../other/Footer';

const About = ({match}) => (
  <div>
    <Header active={'About'} />
    <Hero />
    <Text title={"Who am I?"} parentClasses={"section container"} text={
      <div>
        <p>I'm a 19 years old aspiring developer based near Aarhus, Denmark.
        I have a passion for creating and designing anything digital
        and I'm not afraid to try something new, as I want to keep learning and get outside my comfort zone!
        </p>
      </div>
    } />
    <Abilities />
    <Contact />
    <Footer active={'About'} />
  </div>
);

export default About;
