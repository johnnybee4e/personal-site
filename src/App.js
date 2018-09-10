import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
