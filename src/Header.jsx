import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <header className="App-header">
        <button className="Header-button"><a href="#About-me">Who am I?</a></button>
        <button className="Header-button"><a href="#Projects">Things I've Built</a></button>
        <button className="Header-button"><a href="#Experience">Places I've Been</a></button>
        </header>
      </div>
    );
  }
}
