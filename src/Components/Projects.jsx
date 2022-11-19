import React from 'react';
import Amazonpay from '../images/amazonpay.png';
import Reddit from '../images/reddit.png';
import Dropbox from '../images/dropbox.png';
import Blackberry from '../images/blackberry.png';

const Projects = () => {
    return (
        <div className="projects-container padd-60">
            <section className="section projects" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h4>Join over 40,000+ businesses worldwide</h4>
                            <h2>We're Working Best With Your Favorite Platforms</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="social-media">
                            <div className="amazonpay"><a href=""><img src={Amazonpay} alt="Amazonpay" /></a></div>
                            <div className="reddit"><a href=""><img src={Reddit} alt="Reddit" /></a></div>
                            <div className="dropbox"><a href=""><img src={Dropbox} alt="Dropbox" /></a></div>
                            <div className="blackberry"><a href=""><img src={Blackberry} alt="Blackberry" /></a></div>
                        </div>
                        <div className="projects-btn-container">
                            <a href="#"><button className="btn-projects">View All Brand</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;