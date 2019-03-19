import React from 'react';

const Project = ({match}) => (
  <div className="content">
    <div className="project-large kvizboks center section-top">
      <h1>{match.params.projectId}</h1>

      <p className="margin padding-small text-gray large">
        Apr. 2018
        <a href="#" className="margin padding-small anim-colour text-gray hover-text-white fa fa-github xlarge"></a>
      </p>

    </div>

    // Short about section
    // Pictures like DesignIT
    // Concept & process sections (explain what I've used and learned)
    // Other work?

  </div>
);

export default Project;
