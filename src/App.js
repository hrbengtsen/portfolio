import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './simpleUI/sUI-anim.css';
import './simpleUI/sUI-colour.css';
import './simpleUI/sUI-core.css';
import './simpleUI/sUI-grid.css';

import About from './components/main/About';
import Work from './components/main/Work';
import NoMatch from './components/main/NoMatch';
import ScrollToTop from './components/other/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="bg text-white">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/work" component={Work} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
