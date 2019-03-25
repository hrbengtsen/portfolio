import React from 'react';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import Button from '../../other/Button';
import ProjectGallary from '../../other/ProjectGallary';

import portfolioLogo from '../../../img/portfolio-logo.png';
import portfolioCode from '../../../img/portfolio-code.png';

const Portfolio = () => (
  <div>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"portfolio"} date={"Mar. 2019"} />
      <ProjectTools tools={[
        "React"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>This is my personal portfolio website created in React, made with the purpose of showcasing my projects, as well as my skills in web design and front-end development.
          </p>
        </div>
      } />
      <ProjectGallary
        title={"Concept"}
        items={[portfolioLogo, portfolioCode]}
        itemCol={["l9 m9", "l8 m8"]}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>The website's concept was to design a bold, professional and minimalistic design, along with a distinct colour palette and overall look.
          </p>
        </div>
      } />
      <Button external name={"Explore the repository"} link={"https://github.com/hrbengtsen/portfolio"} />
    </div>
  </div>
);

export default Portfolio;
