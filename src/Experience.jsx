import React, { Component } from 'react';
import faLogo from './fa-logo.png';
import mixyLogo from './mixyLogo.png';

export default class Experience extends Component {
  render() {
    return (
      <div id="Exp">
        <div className="Info-card">
          <h2 id="Experience" className="Body-Title">
            Where I've Been
          </h2>
          <img
            id="faLogo"
            src={faLogo}
            alt="Logo for Fullstack Academy of Code"
          />
          <h3 className="Company-name">Teaching Fellow</h3>
          <p>July 2018 - October 2018</p>
          <ul className="Exp-desc-list">
            <li className="Exp-desc-item">
              Assisted in teaching a cohort of 28 students. Covered concepts
              such as: debugging, algorithms, understanding technical concepts,
              and application architecture.
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
          <img
            id="mixyLogo"
            src={mixyLogo}
            alt="Logo for MixyPaws Dog Walking Company"
          />
          <h3 className="Company-name">Training Manager</h3>
          <ul className="Exp-desc-list">
            <li className="Exp-desc-item">
            Trained and onboarded a rotating team of roughly 20 walkers around Manhattan
            </li>
            <li className="Exp-desc-item">
            Curated and organized complex schedules, ensuring sustainability for walkers while meeting client expectations
            </li>
            <li className="Exp-desc-item">
            Regularly pitched MixyPaws to prospective clients, helping to grow company to 100+ regular clients 
            </li>
            <li className="Exp-desc-item">
            Incorporated Agile-style workflow to task manage and strategize optimizing and expanding business
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
