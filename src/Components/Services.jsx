import React from 'react';
import ServicesBox from './ServicesBox';
import ServicesBox2 from './ServicesBox2';
import profilepic1 from '../images/profilepic1.png';
import profilepic2 from '../images/profilepic2.png';
import profilepic3 from '../images/profilepic3.png';

const PageBox1 = () => {
    return (
        <div className="service-container">
            <section className="section services" id="services">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h4>OUR PACKAGES</h4>
                            <h2>Take a look of our Pricing and select Your Choice</h2>
                        </div>
                    </div>
                    <div className="row services-content">
                        <ServicesBox num={1} text="BASIC PLAN" price="24.66" />
                        <ServicesBox num={2} text="STARTER PLAN" price="30.66" />
                        <ServicesBox num={1} text="PREMIUM PLAN" price="44.66" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section-title-2">
                            <h4>REVIEW</h4>
                            <h2>10,000+ Happy Customers says</h2>
                        </div>
                    </div>
                    <div className="row services-content-2 padd-60">
                        <ServicesBox2 profileImg={profilepic1} alt="Alina Alfin" name="Alina Alfin" p="“First time using carent i have exprience to found easyly.i will definitly useing carent in my future carrent”" />
                        <ServicesBox2 profileImg={profilepic2} alt="Joe Holland" name="Joe Holland" p="“First time using carent i have exprience to found easyly.i will definitly useing carent in my future carrent”" />
                        <ServicesBox2 profileImg={profilepic3} alt="Naira Afiz" name="Naira Afiz" p="“First time using carent i have exprience to found easyly.i will definitly useing carent in my future carrent”" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageBox1;