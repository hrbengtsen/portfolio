import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Custom CSS & simpleUI
import './App.css';
import './simpleUI/sUI-anim.css';
import './simpleUI/sUI-colour.css';
import './simpleUI/sUI-core.css';
import './simpleUI/sUI-grid.css';

// Main Components
import About from './components/main/About';
import Work from './components/main/Work';
import NoMatch from './components/main/NoMatch';
import ScrollToTop from './components/other/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="bg">
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

/*
  To-do:
  - Combine Header & Footer component to Nav component
  - QA
    - Components, create more reusable ones for better structuring and potential expanding
    - Custom CSS & simpleUI through csslint and refactoring
    - Look into adding lazysizes for images


  What I still need to learn about React:
    - HOC (higher-order components)
    - Enums generally and used in React
*/
