import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
      var email = this.props.data.email;
      var phone = this.props.data.phone;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Kyle Cheung Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>{name}</h2>

            <p>{bio}</p>
            <h3 className="about-contact address">Contact me at</h3>

            <span className="address">{email}</span>
            <span className="address">{phone}</span>

            <div className="row">
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
