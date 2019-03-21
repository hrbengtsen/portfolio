import React from 'react';

const ProjectTools = (props) => (
  <div className="center margin-top anim-fadeInLeft">
    <p className="margin padding-small text-gray large">
      made with
      {props.tools.map((tool) =>
        <span className="tag">{tool}</span>
      )}
    </p>
  </div>
);

export default ProjectTools;
