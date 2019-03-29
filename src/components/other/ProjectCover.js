import React from 'react';

const ProjectCover = (props) => (
  <div className={`anim-fadeInUp display-container ${props.parentClasses}`}>
    <div className={props.hover}></div>
    <div className="display-bottomleft padding-equal display-hover anim-project-info hide-small">
      <h4>{props.title}</h4>
      <span className="margin-right">{props.type}</span>
      <span>{props.date}</span>
    </div>

    <div className="display-bottomleft padding-equal hide-large hide-medium">
      <h4>{props.title}</h4>
      <span className="margin-right">{props.type}</span>
      <span>{props.date}</span>
    </div>
  </div>
);

export default ProjectCover;
