import React from 'react';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import ProjectGallary from '../../other/ProjectGallary';

import grostedet9Landing from '../../../img/grostedet9-landing.png';

const Grostedet9 = () => (
  <div>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"grostedet9"} date={"Nov. 2018"} />
      <ProjectTools tools={[
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Github"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>grostedet9 is a website created for the bed & breakfast of the same name.
          The website was developed from the ground up in pure HTML, CSS & JavaScript.
          It's a traditional static website, with a few key features such as being able to search prices, for the different rooms, by entering amount of days and persons.
          </p>
        </div>
      } />
      <ProjectGallary
        title={"Concept"}
        items={[grostedet9Landing]}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>The website's design was made to be simple and intuitive to navigate and was inspired by Airbnb.
          I chose a yellow and a warm orange for the website's colour palette to compliment the greens of the different pictures, presented on the site.
          </p>
        </div>
      } />
    </div>
  </div>
);

export default Grostedet9;
