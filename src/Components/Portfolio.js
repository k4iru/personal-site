import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="port-item">
            <h3 className="port-title">{projects.title}</h3>
            <div className="port-img-container">
              <a href={projects.url} title={projects.title}>
                <img
                  className="port-img"
                  alt={projects.title}
                  src={projectImage}
                />
              </a>
              <div className="port-desc">
                <h4 className="port-sum">Summary</h4>
                <p>{projects.description}</p>
                <div className="port-link">
                  <a href={projects.github}>
                    <i className="fa fa-2x fa-github" />
                    Github Repository
                  </a>
                </div>
                <div className="port-link">
                  <a href={projects.url}>
                    <i className="fa fa-2x fa-external-link-square" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <h1>Check Out Some of My Projects. (This component is under construction)</h1>

          <div id="port-wrapper">{projects}</div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
