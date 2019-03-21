import React from 'react';

const Text = (props) => (
  <div className={`content text ${props.parentClasses}`}>
    {props.title ? <h3 className="center text-red">{props.title}</h3> : ""}
    {props.text}
  </div>
);

export default Text;
