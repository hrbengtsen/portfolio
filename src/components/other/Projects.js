import React from 'react';

const Projects = () => (
  <div>
    <div className="content section-top row-padding">
      <div className="col s12 m12 l12">
        <a href="https://github.com/hrbengtsen/KvizBoks">
          <div className="project-small kvizboks anim-row1 display-container">
            <div className="hover-bg-small"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>kvizBoks</h4>
              <span className="margin-right">console</span>
              <span>2018</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="content section-bottom row-padding">
      <div className="col s12 m8 l8">
        <a href="https://www.grostedet9.dk/">
          <div className="project-large grostedet9 anim-row2 display-container">
            <div className="hover-bg-large"></div>
            <div className="display-bottomleft padding-equal display-hover anim-project-info">
              <h4>grostedet9</h4>
              <span className="margin-right">website</span>
              <span>2018</span>
            </div>
          </div>
        </a>
      </div>

      <div className="col s12 m4 l4">
        <div className="row vert-rows-top">
          <a href="https://bengtsen-velvaere.dk/">
            <div className="project-small bengtsen-velvaere anim-row3 display-container">
              <div className="hover-bg-small"></div>
              <div className="display-bottomleft padding-equal display-hover anim-project-info">
                <h4>bengtsen-velvaere</h4>
                <span className="margin-right">website</span>
                <span>2018</span>
              </div>
            </div>
          </a>
        </div>

        <div className="row vert-rows-bottom">
          <a href="https://github.com/hrbengtsen/simpleUI">
            <div className="project-small simpleUI anim-row3 display-container">
              <div className="hover-bg-small"></div>
              <div className="display-bottomleft padding-equal display-hover anim-project-info">
                <h4>simpleUI</h4>
                <span className="margin-right">css framework</span>
                <span>2018</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
