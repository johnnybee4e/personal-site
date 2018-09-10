import React, { Component } from 'react';
import linkedInLogo from './linkedIn-logo.png';
import gmailLogo from './gmail-logo.png';
// import githubLogo from './github-logo.png';
import githubWhiteLogo from './github-logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <div id="Contact" className="Contact-info-container">
        <div className="Contact-information Github-logo">
          <a
            href="https://www.github.com/johnnybee4e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Contact-logo" src={githubWhiteLogo} alt="Github Logo" />
          </a>
        </div>
        <div className="Contact-information">
          <a
            href="https://www.linkedin.com/in/jonathan-rosado-a88184ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Contact-logo"
              src={linkedInLogo}
              alt="Linkedin Logo"
            />
          </a>
        </div>
        <div className="Contact-information">
          <a href="mailto:jon.rosado42@gmail.com">
            <img className="Contact-logo" src={gmailLogo} alt="Gmail Logo" />
          </a>
        </div>
      </div>
    );
  }
}
