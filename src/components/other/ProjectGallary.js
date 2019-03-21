import React from 'react';

import kvizboksGame from '../../img/kvizboks-game.JPG';
import kvizboksVideo from '../../img/kvizboks-video.mp4';
import kvizboksThumbnail from '../../img/kvizboks-video-thumbnail.jpg';
import kvizboksController from '../../img/kvizboks-controller.JPG';
import kvizboksConsole from '../../img/kvizboks-console.JPG';             // FINISH THIS COMPONENT

const ProjectGallary = (props) => (
  <div className="section">
    <h3 className="margin padding-small text-red">Concept</h3>

    <div className="row">
      <div className="col l8 m8 s12">
        <img className="image" src={kvizboksConsole} alt="#"/>
      </div>
    </div>

    <div className="row">
      <div className="col l8 m8 s12 right margin-top-n">
        <img className="image" src={kvizboksController} alt="#"/>
      </div>
    </div>

    <div className="section hide-small"></div>
    <div className="margin-top-n hide-medium hide-large"></div>

    <div className="row">
      <div className="col l8 m8 s12">
        <img className="image" src={kvizboksGame} alt="#"/>
      </div>
    </div>

    <div className="row">
      <div className="col l8 m8 s12 right margin-top-n">
        <video className="image" src={kvizboksVideo} type="video/mp4" controls poster={kvizboksThumbnail}>
          Your browser does not support mp4 video.
        </video>
      </div>
    </div>
  </div>
);

export default ProjectGallary;
