import React from 'react';

import Header from '../other/Header';
import Contact from '../other/Contact';
import Footer from '../other/Footer';

const NoMatch = ({location}) => (
  <div>
    <Header />
    <h3 className="content center section-top">
      <span className="text-red">(404)</span> No match for <b>{location.pathname}</b>
    </h3>
    <Contact />
    <Footer />
  </div>
);

export default NoMatch;
