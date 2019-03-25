import React from 'react';

import GallaryItem from './GallaryItem';

const ProjectGallary = (props) => (
  <div className="section">
    <h3 className="margin padding-small text-red">{props.title}</h3>

    {props.items.map((item, i) => {
      if (item == "") {
        return <div>
          <div className="section hide-small"></div>
          <div className="margin-top-n hide-medium hide-large"></div>
        </div>;
      }

      if (i & 1) {
        if (item.endsWith(".mp4")) {
          return <GallaryItem
            col={props.itemCol[i]}
            parentClasses={"right margin-top-n"}
            video={item}
            thumbnail={props.thumbnailForVideo}
          />;
        }
        return <GallaryItem col={props.itemCol[i]} parentClasses={"right margin-top-n"} image={item} />;
      }
      else {
        if (i > 0) {
          if (item.endsWith(".mp4")) {
            return <GallaryItem
              col={props.itemCol[i]}
              parentClasses={"margin-top-n"}
              video={item}
              thumbnail={props.thumbnailForVideo}
            />;
          }
          return <GallaryItem col={props.itemCol[i]} parentClasses={"margin-top-n"} image={item} />;
        }
        else {
          if (item.endsWith(".mp4")) {
            return <GallaryItem
              col={props.itemCol[i]}
              video={item}
              thumbnail={props.thumbnailForVideo}
            />;
          }
          return <GallaryItem col={props.itemCol[i]} image={item} />;
        }
      }
    })
    }
  </div>
);

export default ProjectGallary;
