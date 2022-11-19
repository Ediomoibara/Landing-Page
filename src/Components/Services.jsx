import React from 'react';
import ServicesBox from './ServicesBox';

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
                        <ServicesBox num={1} text="BASIC PLAN" price="24.66"/>
                        <ServicesBox num={2} text="STARTER PLAN" price="30.66" />
                        <ServicesBox num={1} text="PREMIUM PLAN" price="44.66" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageBox1;