import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from '../other/Header';
import Projects from '../other/Projects';

import KvizBoks from './projects/KvizBoks';
import Grostedet9 from './projects/Grostedet9';
import BengtsenVelvaere from './projects/BengtsenVelvaere';
import Portfolio from './projects/Portfolio';

import Contact from '../other/Contact';
import Footer from '../other/Footer';

const Work = ({match}) => (
  <div>
    <Header active={'Work'} />

    <Switch>
      <Route path={`${match.path}/kvizBoks`} component={KvizBoks} />
      <Route path={`${match.path}/grostedet9`} component={Grostedet9} />
      <Route path={`${match.path}/bengtsen-velvaere`} component={BengtsenVelvaere} />
      <Route path={`${match.path}/portfolio`} component={Portfolio} />

      <Route path={match.path} component={Projects} />
    </Switch>

    <Contact />
    <Footer active={'Work'} />
  </div>

);

export default Work;
