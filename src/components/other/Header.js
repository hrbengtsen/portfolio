import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../img/logo.svg';

class Header extends Component {
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

      default:
        aboutClassName += ' text-red';
        workClassName += ' anim-colour hover-text-red';
        break;
    }

    return (
      <div>
        <header className="content bar">
          <Link to="/" className="bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></Link>
          <div className="right padding-6 bold margin">
            <Link to="/" className={aboutClassName}>About</Link>
            <Link to="/work" className={workClassName}>Work</Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
