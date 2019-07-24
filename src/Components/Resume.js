import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if(this.props.data){
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p><strong>Relevant Courses: </strong>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h3>{work.company}</h3>
                    <a href={work.url}>{work.url}</a>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
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
                            <strong> Proficient: </strong>Javascript, Python, Java
                            <br />
                            <strong> Familiar: </strong>C, PHP, C++
                        </p>
                        <h3>Tools & Frameworks</h3>
                        <p>HTML, CSS, Git, React, Node, Express, MongoDB, SQL</p>
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div><h3>C.D. Howe Institute</h3>
                            <a href=''></a>
                            <p className="info">Contract Web Developer <span>&bull;</span> <em className="date">October 2018 - February 2019</em></p>
                            <ul className="disc">
                                <li>Developed <strong>JSX</strong> Components for a web app running <strong>React</strong> that enabled users to find and visualize generational tax data</li>
                                <li>Configured <strong>DNS</strong> records for custom domain names and <strong>SSL</strong></li>
                                <li>Collaborated closely with team to ensure all requirements and deadlines were met</li>
                            </ul>
                        </div>
                        <div><h3>Edmonton Public School Board</h3>
                            <a href=''></a>
                            <p className="info">I.T. Technician <span>&bull;</span> <em className="date">June 2017 - August 2017</em></p>
                            <ul className="disc">
                                <li>Methodically troubleshoot and debug technical issues</li>
                                <li>Responsible for tengaging and explaining various solutions to customers without technical experience</li>
                                <li>Utilise SCCM to administer computer networks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
