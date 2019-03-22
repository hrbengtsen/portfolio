import React from 'react';
import { Link } from "react-router-dom";

import ProjectCover from './ProjectCover';

const Projects = ({match}) => (
  <div className="content">
    <div className="section-top row-padding">
      <div className="col s12 m12 l12">
        <Link to={`${match.url}/kvizBoks`}>
          <ProjectCover
            parentClasses={"project-small kvizBoks anim-seq-1"}
            hover={"hover-bg-small"}
            title={"kvizBoks"}
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
            hover={"hover-bg-large"}
            title={"grostedet9"}
            type={"website"}
            date={"2018"}
          />
        </Link>
      </div>

      <div className="col s12 m4 l4">
        <div className="row vert-rows-top">
          <Link to={`${match.url}/bengtsen-velvaere`}>
            <ProjectCover
              parentClasses={"project-small bengtsen-velvaere anim-seq-3"}
              hover={"hover-bg-small"}
              title={"bengtsen-velvaere"}
              type={"website"}
              date={"2018"}
            />
          </Link>
        </div>

        <div className="row vert-rows-bottom">
          <Link to={`${match.url}/portfolio`}>
            <ProjectCover
              parentClasses={"project-small portfolio anim-seq-3"}
              hover={"hover-bg-small"}
              title={"portfolio"}
              type={"webapp"}
              date={"2019"}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
