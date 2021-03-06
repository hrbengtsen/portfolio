import React from 'react';
import { Link } from "react-router-dom";

import ProjectCover from '../../other/ProjectCover';

const Projects = ({match}) => (
  <div className="content">
    <div className="section-top-resp row-padding">
      <div className="col s12 m6 l6">
        <Link to={`${match.url}/pomodoify`}>
          <ProjectCover
            parentClasses={"project-small Pomodoify anim-seq-1"}
            hover={"hover-bg-small light-blue"}
            title={"Pomodoify"}
            type={"webapp"}
            date={"2020"}
          />
        </Link>
      </div>

      <div className="col s12 m6 l6">
        <Link to={`${match.url}/kvizboks`}>
          <ProjectCover
            parentClasses={"project-small KvizBoks anim-seq-1"}
            hover={"hover-bg-small yellow"}
            title={"KvizBoks"}
            type={"console"}
            date={"2018"}
          />
        </Link>
      </div>
    </div>

    <div className="section-bottom row-padding">
      <div className="col s12 m8 l8">
        <Link to={`${match.url}/grostedet9`}>
          <ProjectCover
            parentClasses={"project-large grostedet9 anim-seq-2"}
            hover={"hover-bg-large red"}
            title={"grostedet9"}
            type={"website"}
            date={"2018"}
          />
        </Link>
      </div>

      <div className="col s12 m4 l4">
        <div className="row vert-rows-top">
          <Link to={`${match.url}/portfolio`}>
            <ProjectCover
              parentClasses={"project-small portfolio anim-seq-3"}
              hover={"hover-bg-small light-blue"}
              title={"portfolio"}
              type={"webapp"}
              date={"2019"}
            />
          </Link>
        </div>

        <div className="row vert-rows-bottom">
          <Link to={`${match.url}/bengtsen-velvaere`}>
            <ProjectCover
              parentClasses={"project-small bengtsen-velvaere anim-seq-3"}
              hover={"hover-bg-small red"}
              title={"bengtsen-velvaere"}
              type={"website"}
              date={"2018"}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
