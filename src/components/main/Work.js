import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Nav from '../other/Nav';
import Contact from '../other/Contact';

import Projects from './projects/Projects';
import KvizBoks from './projects/KvizBoks';
import Grostedet9 from './projects/Grostedet9';
import BengtsenVelvaere from './projects/BengtsenVelvaere';
import Portfolio from './projects/Portfolio';
import Pomodoify from './projects/Pomodoify';

const Work = ({match}) => (
  <div>
    <Helmet>
      <title>My Work - Mikkel Bengtsen</title>
    </Helmet>
    <Nav active={'Work'} />
    <Switch>
      <Route path={`${match.path}/kvizboks`} component={KvizBoks} />
      <Route path={`${match.path}/grostedet9`} component={Grostedet9} />
      <Route path={`${match.path}/bengtsen-velvaere`} component={BengtsenVelvaere} />
      <Route path={`${match.path}/portfolio`} component={Portfolio} />
      <Route path={`${match.path}/pomodoify`} component={Pomodoify} />

      <Route path={match.path} component={Projects} />
    </Switch>
    <Contact />
    <Nav active={'Work'} reverse footer />
  </div>

);

export default Work;
