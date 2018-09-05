import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div id="Personal-info">
      <div className="Info-card">
      <h1 className="Body-title">Hello, my name is<br/>Jon Rosado</h1>
      <img
      id="Headshot"
      src="fullstack-headshot-3.png"
      alt=""
      />
      <h2 className="Body-title">Who am I?</h2>
      <p className="Body-text">
      I am a full stack software engineer. I have experience building responsive front-end interfaces using React, React Native, Redux, HTML, and CSS, as well as RESTful APIs and with Node, Express, PostgresQL, and Sequelize.

      I have a working knowledge of many other technologies as well, including Docker, Amazon Web Services (Amazon S3), Unity, Expo, Socket.io, jQuery, and Ruby. I'm always experimenting with new frameworks and languages!
      </p>
      </div>
      </div>
    );
  }
}