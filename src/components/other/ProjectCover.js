import React from 'react';
import { Link } from "react-router-dom";

const ProjectCover = (props) => (
  <div className={`anim-fadeInUp display-container ${props.parentClasses}`}>
    <div className={props.hover}></div>
    <div className="display-bottomleft padding-equal display-hover anim-project-info">
      <h4>{props.title}</h4>
      <span className="margin-right">{props.type}</span>
      <span>{props.date}</span>
    </div>
  </div>
);

export default ProjectCover;
