import React from 'react';
import { Link } from 'react-scroll';

const ArrowButton = () => (
  <div className="center anim-fromTop hide-small hide-medium">
    <Link to="anchor" spy={true} smooth={true} duration={800}>
      <button className="button anim-arrow-slide hover-text-red">
        <span className="xxxlarge material-icons">keyboard_arrow_down</span>
      </button>
    </Link>
  </div>

);

export default ArrowButton;
