import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../img/logo.svg';

class Nav extends Component {
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
        aboutClassName += ' anim-colour hover-text-red';
        workClassName += ' anim-colour hover-text-red';
        break;
    }

    return (
      <div className={this.props.reverse ? "dark-blue" : ""}>
        <nav className="content bar">
          <Link to="/" className={this.props.reverse ? "right bar-item margin bold" : "bar-item margin bold"}><img className="logo" src={logo} alt="#" height="48"/></Link>
          <div className={this.props.reverse ? "padding-6 bold margin" : "right padding-6 bold margin"}>
            <Link to="/" className={aboutClassName}>About</Link>
            <Link to="/work" className={workClassName}>Work</Link>
          </div>
        </nav>

        {this.props.footer ?
          <footer className="container center text-gray">
            <p>© 2019, Designed and Developed by <Link to="/" className="link-current">Mikkel Bengtsen</Link>.</p>
          </footer> : ""}
      </div>
    );
  }
}

export default Nav;
