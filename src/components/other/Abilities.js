import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Abilities = () => (
  <div className="content section text-for-row">
    <h3 className="text-red center margin-bottom">What I can do.</h3>
    <div className="row center">
      <div className="col s4 m4 l4">
        <ul className="ul">
          <h5>Webdev</h5>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
      </div>

      <div className="col s4 m4 l4">
        <ul className="ul">
          <h5>Softwaredev</h5>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
      </div>

      <div className="col s4 m4 l4">
        <ul className="ul">
          <h5>Other</h5>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
      </div>
    </div>

    <div className="center section-top">
      <Link to="/work" className="button round anim-arrow-colour hover-text-red bold">Explore my work <span className="material-icons vert-align">keyboard_arrow_right</span></Link>
    </div>
  </div>
);

export default Abilities;
