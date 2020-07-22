import React from 'react';
import { Helmet } from 'react-helmet';

import Nav from '../other/Nav';
import Button from '../other/Button';
import Contact from '../other/Contact';

const NoMatch = () => (
  <div>
    <Helmet>
      <title>404 - Mikkel Bengtsen</title>
    </Helmet>
    <Nav />
    <h2 className="content center section-top">
      <span className="text-red">(404)</span> Page not found.
    </h2>
    <Button name={"Go to homepage"} link={"/"} />
    <Contact />
    <Nav reverse footer />
  </div>
);

export default NoMatch;
