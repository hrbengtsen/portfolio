import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../img/logo.svg';

const Header = (props) => (
  <div className="content">
    <header className="bar">
      <Link to="/" className="bar-item margin bold"><img className="logo" src={logo} alt="#" height="48"/></Link>
      <div className="right padding-6 bold margin">
        {props.children}
      </div>
    </header>
  </div>
);

export default Header;
