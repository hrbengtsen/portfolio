import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Experience from './Experience';
import design from '../../img/design.svg';
import develop from '../../img/develop.svg';

const Abilities = () => (
  <div className="content section text-for-row">
    <h3 className="text-red center margin-bottom">What I can do.</h3>
    <div className="row-padding margin-bottom">
      <div className="col s12 m7 l7">
        <h4>Design what matters.</h4>
        <p>I like to design with simplicity as the primary focus.
        My goals are to create something that engages the target audience and effectively conveys the desired message.</p>
        <Experience exp={"Design"} />
      </div>
      <div className="col s12 m5 l5 hid">
        <img src={design} alt="#"/>
      </div>
    </div>

    <div className="row-padding">
      <div className="col s12 m5 l5 hid">
        <img src={develop} alt="#"/>
      </div>
      <div className="col s12 m7 l7">
        <h4>Develop what's needed.</h4>
        <p>I develop with compatibility, performance as well as multiple devices in mind to ensure quality in the products I create.</p>
        <Experience exp={"Programming"} />
      </div>
    </div>

    <div className="center section-top">
      <Link to="/work" className="button round anim-arrow-colour hover-text-red bold">Explore my work <span className="material-icons vert-align">keyboard_arrow_right</span></Link>
    </div>
  </div>
);

export default Abilities;
