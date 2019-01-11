import React from 'react';

import Header from '../other/Header';
import Projects from '../other/Projects';
import Footer from '../other/Footer';

const Work = () => (
  <div>
    <Header active={'Work'} />
    <Projects />
    <Footer active={'Work'} />
  </div>
);

export default Work;
