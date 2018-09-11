import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Header extends Component {
  render() {
    const offset =
      window.innerWidth < 786
        ? document.documentElement.clientHeight * 0.1085
        : document.documentElement.clientHeight * 0.09;

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
            currentClassName={'In-view'}
            offset={-offset}
            items={['About-me', 'Projects', 'Experience', "Contact"]}
          >
            <button className="Header-button">
              <AnchorLink href="#About-me" offset={offset}>
                Who
              </AnchorLink>
            </button>
            <p>|</p>
            <button className="Header-button">
              <AnchorLink href="#Projects" offset={offset}>
                What
              </AnchorLink>
            </button>
            <p>|</p>
            <button className="Header-button">
              <AnchorLink href="#Experience" offset={offset}>
                Where
              </AnchorLink>
            </button>
            <p>|</p>
            <button className="Header-button">
              <AnchorLink href="#Contact" offset={offset}>
                Contact
              </AnchorLink>
            </button>
          </Scrollspy>
        </div>
      </header>
    );
  }
}
