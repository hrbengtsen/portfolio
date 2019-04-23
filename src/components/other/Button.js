import React from 'react';
import { Link } from "react-router-dom";

const Button = (props) => (
  <div className="center section-top">
    {props.external ?
    <a href={props.link} className="button round anim-arrow-colour hover-text-red bold">{props.name} <span className="material-icons vert-align">keyboard_arrow_right</span></a>
    :
    <Link to={props.link} className="button round anim-arrow-colour hover-text-red bold">{props.name} <span className="material-icons vert-align">keyboard_arrow_right</span></Link>
    }
  </div>
);

export default Button;
