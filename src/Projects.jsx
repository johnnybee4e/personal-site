import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className="Body-container">
        <h2 id="Projects" className="Body-title">
          Things I've Built
        </h2>
        <h3 className="Project-name">Replicode</h3>
        <div className="Project-container">
          <div className="Project-video-container">
            <iframe
              className="Project-video"
              title="replicode"
              src="https://www.youtube.com/embed/VGtqkf5Ta9I?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className="Body-text">
            Replicode is a content creation tool that allows developers to
            easily create interactive coding lessons. Built with React, Redux,
            Docker, Amazon S3, Express, Sequelize, and deployed on Heroku.
          </p>
          <div className="Project-links-container">
            <a
              className="Project-links"
              href="https://www.github.com/Replicode/Replicode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="Project-links"
              href="https://replicode.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Link
            </a>
          </div>
        </div>
        <h3 className="Project-name">WalkerPal</h3>
        <div className="Project-container">
          <div className="Project-video-container">
            <iframe
              className="Project-video"
              title="walkerpal"
              src="https://www.youtube.com/embed/wBXRSfUi9cg?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className="Body-text">
            WalkerPal is a mobile application punch card system for dog walking
            business owners to keep track of their employees. Built using React
            Native, Expo, and Google Maps API.
          </p>
          <div className="Project-links-container">
            <a
              className="Project-links"
              href="https://github.com/johnnybee4e/walker-pal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}
