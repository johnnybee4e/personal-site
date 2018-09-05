import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Experience from './Experience';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Experience />
      </div>
    );
  }
}

export default App;
