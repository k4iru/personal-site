import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if(this.props.data){
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p><strong>Relevant Courses: </strong>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            })
            var skills = this.props.data.skills.map(function(skills){
                var className = 'bar-expand '+skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
            })
        }

        return (
            <section id="resume">

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


                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <h3>Programming Languages</h3>
                        <p>
                            <strong> Proficient: </strong>Javascript, Python, C++
                            <br />
                            <strong> Familiar: </strong>Java, C, PHP, C#
                            <br />
                            <strong> Learning: </strong>C, Haskell
                        </p>
                        <h3>Tools & Frameworks</h3>
                        <p>HTML, CSS, Git, React.js, Node.js, Express.js, MongoDB, SQL</p>
                        <h3>Areas of Interests</h3>
                        <p>Penetration Testing, ML/AI, Social Media  </p>
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
