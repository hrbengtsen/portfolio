import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import Button from '../../other/Button';
import ProjectGallary from '../../other/ProjectGallary';

import bengtsenLanding from '../../../img/bengtsen-landing.jpg';
import bengtsenMobileRender from '../../../img/bengtsen-mobilerender.png';

const BengtsenVelvaere = () => (
  <div>
    <Helmet>
      <title>Bengtsen Velvaere - Mikkel Bengtsen</title>
    </Helmet>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"bengtsen-velvaere"} date={"Jan. 2018"} />
      <ProjectTools tools={[
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>bengtsen-velvaere is a website created for the alternative treatment company of the same name.
          The website was developed from the ground up in pure HTML, CSS, JavaScript and a tiny bit of JQuery.
          </p>
          <p>It's a traditional static website, originally created in association with a schoolproject, where the assignment was to develop or redesign a website for a company, which was accessible to work with.
          For this I chose to work with my mother's company bengtsen-velvaere.
          </p>
        </div>
      } />
      <ProjectGallary
        title={"Concept"}
        items={[bengtsenLanding, bengtsenMobileRender]}
        itemCol={["l8 m8", "l11 m11"]}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>The concept for the website was to design a clean, simple and user-friendly website, which fits the target audience of the company.
          This idea along with a flat green colour palette was the foundation of the site's design.
          </p>
        </div>
      } />
      <Button external name={"Go to website"} link={"https://bengtsen-velvaere.dk/"} />
    </div>
  </div>
);

export default BengtsenVelvaere;
