import React, { Component } from 'react';

// Custom CSS & simpleUI
import './App.css';
import './simpleUI/sUI-anim.css';
import './simpleUI/sUI-colour.css';
import './simpleUI/sUI-core.css';
import './simpleUI/sUI-grid.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="bg">
        <Header />
        <Hero />
        <Intro />
        <Abilities />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
