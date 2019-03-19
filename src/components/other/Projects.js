import React from 'react';
import { Link } from "react-router-dom";

const Projects = ({match}) => (
  <div>
    <div className="content section-top row-padding">
      <div className="col s12 m12 l12">
        <Link to={`${match.url}/kvizBoks`}>
          <div className="project-small kvizboks anim-row1 display-container">
            <div className="hover-bg-small"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>kvizBoks</h4>
              <span className="margin-right">console</span>
              <span>2018</span>
            </div>
          </div>
        </Link>
      </div>
    </div>

    <div className="content section-bottom row-padding">
      <div className="col s12 m8 l8">
        <Link to={`${match.url}/grostedet9`}>
          <div className="project-large grostedet9 anim-row2 display-container">
            <div className="hover-bg-large"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>grostedet9</h4>
              <span className="margin-right">website</span>
              <span>2018</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="col s12 m4 l4">
        <div className="row vert-rows-top">
          <Link to={`${match.url}/bengtsen-velvaere`}>
            <div className="project-small bengtsen-velvaere anim-row3 display-container">
              <div className="hover-bg-small"></div>
              <div className="display-bottomleft padding-equal display-hover anim-project-info">
                <h4>bengtsen-velvaere</h4>
                <span className="margin-right">website</span>
                <span>2018</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="row vert-rows-bottom">
          <Link to={`${match.url}/simpleUI`}>
            <div className="project-small simpleUI anim-row3 display-container">
              <div className="hover-bg-small"></div>
              <div className="display-bottomleft padding-equal display-hover anim-project-info">
                <h4>simpleUI</h4>
                <span className="margin-right">css framework</span>
                <span>2018</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
