import React from "react";
import Navbar from "./Navbar";
import homeimage from "../images/Group 7.png";

function Home() {
    return (
        <div className="home-container container padd-60">
            <Navbar />
            <section className="section home">
                <div className="container">
                    <div className="row">
                        <div className="home-info">
                            <div className="section-title-home">
                                <h3 className="free-trial">
                                    Get Your Free 2 Weeks Trial Right Now
                                </h3>
                                <p>
                                    Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable.
                                </p>
                                <div className="watch-video-container">
                                    <a href="#">
                                        <h3 className="watch-video">Watch Video</h3><span><i className="fa-regular fa-circle-play"></i></span>
                                    </a>
                                </div>
                            </div>
                            <div className="home-image">
                                <img src={homeimage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1665443396">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default Home;