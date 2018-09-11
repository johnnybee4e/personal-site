import React, { Component } from 'react';
import linkedInLogo from './linkedIn-logo.png';
import gmailLogo from './gmail-logo.png';
import githubLogo from './Octocat.png';

export default class Footer extends Component {
  render() {
    return (
      <div id="Contact-container">
        <div>
          <h2 id="Contact" className="Body-title">
            Contact
          </h2>
        </div>
        <div className="Contact-info-container">
          <div className="Contact-information Github-logo">
            <p className="Contact-text">Github</p>
            <a
              href="https://www.github.com/johnnybee4e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="Contact-logo"
                src={githubLogo}
                alt="Github Logo"
              />
            </a>
          </div>
          <div className="Contact-information">
            <p className="Contact-text">LinkedIn</p>
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
            <p className="Contact-text">Gmail</p>
            <a href="mailto:jon.rosado42@gmail.com">
              <img className="Contact-logo" src={gmailLogo} alt="Gmail Logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
