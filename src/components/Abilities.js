import React, { Component } from 'react';

const Abilities = () => (
  <div className="content section text-for-row">
    <h3 className="text-red center margin-bottom">What I can do.</h3>
    <div className="row-padding margin-bottom">
      <div className="col s12 m7 l7">
        <h4>Design what matters.</h4>
        <p>I like to design with simplicity as the focus.
        My goals are to create something that engages <span className="text-red bold">YOUR</span> audience and effectively conveys <span className="text-red bold">YOUR</span> message.</p>
      </div>
      <div className="col s12 m5 l5">
        Illustration
      </div>
    </div>

    <div className="row-padding">
      <div className="col s12 m5 l5">
        Illustration
      </div>
      <div className="col s12 m7 l7">
        <h4>Develop what's needed.</h4>
        <p>I develop the features <span className="text-red bold">YOU</span> need and ensure quality across multiple devices,
        without any clutter - all using the latest technologies available.</p>
      </div>
    </div>
  </div>
);

export default Abilities;
