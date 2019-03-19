import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from '../other/Header';
import Projects from '../other/Projects';
import Project from '../other/Project';
import NoMatch from './NoMatch';
import Contact from '../other/Contact';
import Footer from '../other/Footer';

const Work = ({match}) => (
  <div>
    <Header active={'Work'} />
    <Switch>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <Route path={match.path} component={Projects} />
      <Route component={NoMatch} />
    </Switch>
    <Contact />
    <Footer active={'Work'} />
  </div>

);

export default Work;
