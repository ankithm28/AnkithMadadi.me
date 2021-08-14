import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div href={work.link} key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        return <em>{skills.name}<br /></em>
      })
    }

    return (
      <section id="resume">
       <div className="row">
        <div className="eight columns">
          <div className="row work">

            <div className="three columns header-col">
              <h1><span>Jobs</span></h1>
            </div>

            <div className="nine columns main-col">
              {work}
            </div>
          </div>
          <br />
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="row skill">

            <div className=" header-col">
              <h1><span>Skills</span></h1>
            </div>
          <br />
            <div className="nine columns main-col">

              <p>{skillmessage}
              </p>

              <div className="bars">
                <ul className="skills">
                  {skills}
                </ul>
              </div>
            </div>
          </div>
        </aside>
        </div>
      </section>
    );
  }
}

export default Resume;
