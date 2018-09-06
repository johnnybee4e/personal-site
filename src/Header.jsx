import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Header extends Component {
  render() {
    const offset = document.documentElement.clientHeight * 0.1;

    window.addEventListener('scroll', function(evt) {
      if (this.window.scrollY > offset) {
        let appHeader = document.getElementById('nav-links');
        appHeader.classList.add('newfixed');
      } else if (this.window.scrollY < offset) {
        let appHeader = document.getElementById('nav-links');
        appHeader.classList.remove('newfixed');
      }
    });
    return (
      <header className="navbar">
        <div id="nav-links">
          <Scrollspy
            className="App-header"
            componentTag={'nav'}
            currentClassName={'inView'}
            offset={-offset}
            items={['About-me', 'Projects', 'Experience']}
          >
            <button className="Header-button">
              <AnchorLink href="#About-me" offset={offset}>
                Who am I?
              </AnchorLink>
            </button>
            <button className="Header-button">
              <AnchorLink href="#Projects" offset={offset}>
                Things I've Built
              </AnchorLink>
            </button>
            <button className="Header-button">
              <AnchorLink href="#Experience" offset={offset}>
                Places I've Been
              </AnchorLink>
            </button>
          </Scrollspy>
        </div>
      </header>
    );
  }
}
