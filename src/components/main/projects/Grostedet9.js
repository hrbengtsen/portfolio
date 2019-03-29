import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import Button from '../../other/Button';
import ProjectGallary from '../../other/ProjectGallary';

import grostedet93dRender from '../../../img/grostedet9-3drender.jpg';
import grostedet9MobileRender from '../../../img/grostedet9-mobilerender.png';
import grostedet9TabletRender from '../../../img/grostedet9-tabletrender.jpg';

const Grostedet9 = () => (
  <div>
    <Helmet>
      <title>Grostedet9 - Mikkel Bengtsen</title>
    </Helmet>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"grostedet9"} date={"Nov. 2018"} />
      <ProjectTools tools={[
        "HTML",
        "CSS",
        "JavaScript"
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
        items={[grostedet93dRender, grostedet9MobileRender, grostedet9TabletRender]}
        itemCol={["l9 m9", "l7 m7", "l8 m8"]}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>The website's design was made to be simple and intuitive to navigate and was inspired by Airbnb.
          I chose a yellow and a warm orange for the website's colour palette to compliment the greens of the different pictures, presented on the site.
          </p>
        </div>
      } />
      <Button external name={"Go to website"} link={"https://www.grostedet9.dk/"} />
    </div>
  </div>
);

export default Grostedet9;
