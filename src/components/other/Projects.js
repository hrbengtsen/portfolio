import React from 'react';

const Projects = () => (
  <div>
    <div className="content section-top row-padding">
      <div className="col s12 m12 l12">
        <div className="project-small kvizboks anim-row1 display-container">
          <div className="hover-bg-small"></div>
          <div className="display-bottomleft padding-equal display-hover anim-project-info">
            <h4>kvizBoks</h4>
            <span className="margin-right">interactive</span>
            <span>console</span>
          </div>
        </div>
      </div>
    </div>

    <div className="content section-bottom row-padding">
      <div className="col s8 m8 l8">
        <div className="project-large grostedet9 anim-row2 display-container">
          <div className="hover-bg-large"></div>
          <div className="display-bottomleft padding-equal display-hover anim-project-info">
            <h4>grostedet9</h4>
            <span className="margin-right">custom</span>
            <span>website</span>
          </div>
        </div>
      </div>

      <div className="col s4 m4 l4">
        <div className="row vert-rows-top">
          <div className="project-small bengtsen-velvaere anim-row3 display-container">
            <div className="hover-bg-small"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>bengtsen-velvaere</h4>
              <span className="margin-right">custom</span>
              <span>website</span>
            </div>
          </div>
        </div>

        <div className="row vert-rows-bottom">
          <div className="project-small simpleUI anim-row3 display-container">
            <div className="hover-bg-small"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>simpleUI</h4>
              <span className="margin-right">css</span>
              <span>framework</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
