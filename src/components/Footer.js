import React, { Component } from 'react';

import logo from '../img/logo.png';

const Footer = () => (
  <div className="dark-blue">
    <footer className="content bar">
      <a href="#" className="right bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></a>
      <div className="padding-6 bold margin">
        <a href="#" className="bar-item margin anim-colour hover-text-red">About</a>
        <a href="#" className="bar-item margin anim-colour hover-text-red">Work</a>
      </div>
    </footer>

    <footer className="container center text-gray">
      <p>© 2018, Designed and Developed by <a href="#" className="link-current">Mikkel Bengtsen</a>.</p>
    </footer>
  </div>
);

export default Footer;
