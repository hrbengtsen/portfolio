import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../img/logo.svg';

class Footer extends Component {
  render() {
    // Default classes for links
    let aboutClassName = 'bar-item margin';
    let workClassName = 'bar-item margin';

    // Added classes for displaying and animating active and non-active links
    switch (this.props.active) {
      case 'About':
        aboutClassName += ' text-red';
        workClassName += ' anim-colour hover-text-red';
        break;

      case 'Work':
        workClassName += ' text-red';
        aboutClassName += ' anim-colour hover-text-red';
        break;
    }

    return (
      <div className="dark-blue">
        <footer className="content bar">
          <Link to="/" className="right bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></Link>
          <div className="padding-6 bold margin">
            <Link to="/" className={aboutClassName}>About</Link>
            <Link to="/work" className={workClassName}>Work</Link>
          </div>
        </footer>

        <footer className="container center text-gray">
          <p>© 2019, Designed and Developed by <Link to="/" className="link-current">Mikkel Bengtsen</Link>.</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
