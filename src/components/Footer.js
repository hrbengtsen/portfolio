import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../img/logo.svg';

const Footer = (props) => (
  <div className="dark-blue">
    <footer className="content bar">
      <Link to="/" className="right bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></Link>
      <div className="padding-6 bold margin">
        {props.children}
      </div>
    </footer>

    <footer className="container center text-gray">
      <p>© 2018, Designed and Developed by <a href="#" className="link-current">Mikkel Bengtsen</a>.</p>
    </footer>
  </div>
);

export default Footer;
