import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <header className="App-header">
        <button className="Header-button">Who am I?</button>
        <button className="Header-button"> <a href="#projects">Things I've Built</a></button>
        <button className="Header-button">Places I've Been</button>
        </header>
      </div>
    );
  }
}
