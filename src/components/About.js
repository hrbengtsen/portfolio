import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Abilities from './Abilities';
import Contact from './Contact';
import Footer from './Footer';

const About = () => (
  <div>
    <Header>
      <Link to="/" className="bar-item margin text-red">About</Link>
      <Link to="/work" className="bar-item margin anim-colour hover-text-red">Work</Link>
    </Header>
    <Hero />
    <Intro />
    <Abilities />
    <Contact />
    <Footer>
      <Link to="/" className="bar-item margin text-red">About</Link>
      <Link to="/work" className="bar-item margin anim-colour hover-text-red">Work</Link>
    </Footer>
  </div>
);

export default About;
