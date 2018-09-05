import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <button className="Header-button">Who am I?</button>
        <button className="Header-button">Things I've Built</button>
        <button className="Header-button">Places I've Been</button>
        </header>
      </div>
    );
  }
}
