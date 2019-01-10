import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

const Work = () => (
  <div>
    <Header>
      <Link to="/" className="bar-item margin anim-colour hover-text-red">About</Link>
      <Link to="/work" className="bar-item margin text-red">Work</Link>
    </Header>
    <Footer>
      <Link to="/" className="bar-item margin anim-colour hover-text-red">About</Link>
      <Link to="/work" className="bar-item margin text-red">Work</Link>
    </Footer>
  </div>
);

export default Work;
