import React from 'react';

const GallaryItem = (props) => (
  <div className="row">
    <div className={`col l9 m9 s12 ${props.parentClasses}`}>
      {props.video ?
        <video className="image" src={props.video} type="video/mp4" controls poster={props.thumbnail}>
          Your browser does not support mp4 video.
        </video>
        :
        <img className="image" src={props.image} alt="#"/>
      }
    </div>
  </div>
);

export default GallaryItem;
