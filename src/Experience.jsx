import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div id="Exp">
        <div className="Info-card">
          <h2 id="Experience" className="Body-Title">
            Experience
          </h2>
          <h3 className="Company-name">
            Fullstack Academy
            <br /> Teaching Fellow
          </h3>
          <p>July 2018 - October 2018</p>
          <ul className="Exp-desc-list">
            <li className="Exp-desc-item">
              Assisted in teaching a cohort of 28 students. Covered concepts
              from debugging, writing clean code, and alogrithms to
              understanding technical concepts, and application architecture.
            </li>
            <li className="Exp-desc-item">
              Led multiple lectures on algorithm problems across topics such as
              big O, optimization, data structures, and functional programming.
            </li>
            <li className="Exp-desc-item">
              Acted as project manager for two project sprints, leading daily
              standups and holding code reviews
            </li>
          </ul>
          <h3 className="Company-name">
            MixyPaws
            <br />
            Training Manager
          </h3>
          <ul className="Exp-desc-list" />
        </div>
      </div>
    );
  }
}
