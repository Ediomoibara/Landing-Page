import React from 'react';
import PageBox1 from './PageBox1';
import PageBox2 from './PageBox2';
import Rowtwoimage from '../images/row2img.png';
import Document from '../images/document.png';
import Userinterface from '../images/user-interface.png';
import boximage1 from '../images/one.png';
import boximage2 from '../images/two.png';
import boximage3 from '../images/three.png';
import boximage4 from '../images/four.png';
import boximage5 from '../images/five.png';
import boximage6 from '../images/six.png';

const Page = () => {
    return (
        <div>
            <div className="page-container padd-60">
                <section className="section page" id="page">
                    <div className="container">
                        <div className="row">
                            <div className="section-title-row-1">
                                <h4>SERVICES WE PROVIDE</h4>
                                <h2>We turn information into actionable insights</h2>
                            </div>
                        </div>
                        <div className="row page-content-top">
                            <PageBox1 image={boximage1} heading="Project Creation" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                            <PageBox1 image={boximage2} heading="Software Development" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                            <PageBox1 image={boximage3} heading="Project Management" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="row-2-img">
                                <img src={Rowtwoimage} alt="" />
                            </div>
                            <div className="row-2-right">
                                <div className="section-title-row-2">
                                    <h4>SERVICES WE PROVIDE</h4>
                                    <h2>Designed for startups with experienced expert developer</h2>
                                </div>
                                <div className="page-content-middle">
                                    <p>
                                        Chances are good that there’s a cloud software as a service solution on the market today that will serve your core back-office needs. Many of those products offer the potential not just to move your data and processes to cloud.
                                    </p>
                                    <span><img src={Document} alt="" /><h3>Clear Documentation</h3></span>
                                    <span><img src={Userinterface} alt="" /><h3>Flexible user interface</h3></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="section-title-row-3">
                                <h4>HOW WE WORK</h4>
                                <h2>Future is brighter when you're strategically more prepared</h2>
                            </div>
                        </div>
                        <div className="row page-content-last">
                            <PageBox2 image={boximage4} heading="Case Analysis" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                            <PageBox2 image={boximage5} heading="Strategic Advice" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                            <PageBox2 image={boximage6} heading="Insight Implementation" p="Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an." />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Page;