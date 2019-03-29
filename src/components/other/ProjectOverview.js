import React from 'react';

const ProjectOverview = (props) => (
  <div className={`project-large anim-fadeInUp display-container section-top ${props.project}`}>
    <div className="display-bottomleft padding-equal">
      <h1 className="margin padding-small text-red hide-small">{props.project}</h1>
      <h2 className="margin padding-small text-red hide-large hide-medium">{props.project}</h2>

      <p className="margin padding-small text-gray large">
        <span>{props.date}</span>
        <a href={`https://github.com/hrbengtsen/${props.project}`} className="margin padding-small anim-colour text-gray hover-text-white fa fa-github xlarge"></a>
      </p>
    </div>
  </div>
);

export default ProjectOverview;
