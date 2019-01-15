import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Custom CSS & simpleUI
import './App.css';
import './simpleUI/sUI-anim.css';
import './simpleUI/sUI-colour.css';
import './simpleUI/sUI-core.css';
import './simpleUI/sUI-grid.css';

// Main Components
import About from './components/main/About';
import Work from './components/main/Work';
import ScrollToTop from './components/other/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="bg">
        <Route exact path="/" component={About} />
        <Route path="/work" component={Work} />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;

/*
  TOdo:
  - Look into replacing pure-react-carousel with flickity
  - Look into adding lazysizes for images
  - Look into swup for opacity fade full page transitions when routing
  - QA
    - Components, create more reusable ones for better structuring and potential expanding
    - Custom CSS & simpleUI through csslint and refactoring
  - Change Abilities component to be about what I have experience with and what I am learning
  - Expand Intro component
  - Create subwork pages for my displayed projects
*/
