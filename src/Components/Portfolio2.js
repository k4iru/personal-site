import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Portfolio extends Component {
    render() {

        // Carousel add 
        if(this.props.data){
            var projects = this.props.data.projects.map(function(projects){
                var projectImage = 'images/portfolio/'+projects.image;
                return <div key={projects.title} className="columns portfolio-item">
                </div>
            })
        }

        return (
            <section id="portfolio">
                <Carousel showArrows={true}>
                    <div>
                        <img src='images/portfolio/mario.jpg' />
                        <p className='legend'>Legend 1</p>
                    </div>
                    <div>
                        <img src='images/portfolio/mario.jpg' />
                        <p className='legend'>Legend 1</p>
                    </div>
                    <div>
                        <img src='images/portfolio/mario.jpg' />
                        <p className='legend'>Legend 1</p>
                    </div>

                </Carousel>

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of My Projects.</h1>

                        <div id="portfolio-wrapper" 
                            className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
