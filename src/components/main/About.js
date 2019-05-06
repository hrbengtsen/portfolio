import React from 'react';
import { Helmet } from 'react-helmet';

import Nav from '../other/Nav';
import Hero from '../other/Hero';
import ArrowButton from '../other/ArrowButton';
import Text from '../other/Text';
import Abilities from '../other/Abilities';
import Contact from '../other/Contact';

const About = () => (
  <div>
    <Helmet>
      <title>Mikkel Bengtsen</title>
    </Helmet>
    <Nav active={"About"} />
    <Hero />
    <ArrowButton />
    <Text title={"Who am I?"} parentClasses={"section container"} text={
      <div>
        <p>My name is Mikkel Bengtsen and I'm a 19 years old aspiring developer based in Aarhus, Denmark.
        I have a passion for creating and designing anything digital
        and I'm not afraid to try something new, as I want to keep learning and get outside of my comfort zone!
        </p>
      </div>
    } />
    <Abilities />
    <Contact />
    <Nav active={"About"} reverse footer />
  </div>
);

export default About;
