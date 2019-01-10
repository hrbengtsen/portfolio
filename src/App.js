import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Custom CSS & simpleUI
import './App.css';
import './simpleUI/sUI-anim.css';
import './simpleUI/sUI-colour.css';
import './simpleUI/sUI-core.css';
import './simpleUI/sUI-grid.css';

// Components
import About from './components/About';
import Work from './components/Work';

const App = () => (
  <Router>
    <div className="bg">
      <Route exact path="/" component={About} />
      <Route path="/work" component={Work} />
    </div>
  </Router>
);

export default App;
                        // Routing: https://reacttraining.com/react-router/web/guides/quick-start
