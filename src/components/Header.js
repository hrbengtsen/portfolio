import React, { Component } from 'react';

import logo from '../img/logo.svg';

class Header extends Component {
  render() {
    return (
        <div className="content">
          <header className="bar">
            <a href="#" className="bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></a>
            <div className="right padding-6 bold margin">
              <a href="#" className="bar-item margin text-red">About</a>
              <a href="#" className="bar-item margin anim-colour hover-text-red">Work</a>
            </div>
          </header>
        </div>
    );
  }
}

export default Header;
