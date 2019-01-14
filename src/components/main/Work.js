import React from 'react';

import Header from '../other/Header';
import Projects from '../other/Projects';
import Contact from '../other/Contact';
import Footer from '../other/Footer';

const Work = () => (
  <div>
    <Header active={'Work'} />
    <Projects />
    <Contact />
    <Footer active={'Work'} />
  </div>
);

export default Work;
