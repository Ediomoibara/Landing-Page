import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import IMask from 'imask';
// import { BsEnvelope } from 'react-icons/bs';
import email from '../images/email.png';
import placeMarker from '../images/location.png';
import phone from '../images/phone.png';
import semi1 from '../images/semi1.png';
import semi2 from '../images/semi2.png';
import picdown from '../images/picdown.png';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yi8imeg', 'template_zd8dzbb', form.current, 'YQr4Jz4O9Jw2ixZGk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    
    // IMask(document.getElementsByName('user_tel'), {
    //     mask: '000 0000 000'
    // });
      
    return (
        <div className="contactus-container padd-60">
            <section className="section contactus" id="services">
                <div className="container col-1">
                    <div className="row">
                        <div className="section-title">
                            <h4>CONTACT US</h4>
                            <h2>Then book your trip from our exclusive offers</h2>
                        </div>
                    </div>
                    <div className="row contactus-content">
                        <form ref={form} onSubmit={sendEmail} className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="text" name="user_name" className="form-control" placeholder="Name" autoComplete="off" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="email" name="user_email" className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" name="user_tel" maxLength="14" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group txt-area">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <textarea name="message" id="" className="form-control" placeholder="Please describe what you need"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <button type="submit" className="btn">SEND NOW</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container col-2">
                    <div className="row address">
                        <div className="semi1">
                            <img src={semi1} alt="" />
                        </div>
                        <div className="email address-content">
                            <div className="address-icons">
                                <img src={email} alt="" />
                            </div>
                            <div className="contact-address">
                                <h4>Email</h4>
                                <h5>ibaraafaediomo@gmail.com</h5>
                            </div>
                        </div>
                        <div className="location address-content">
                            <div className="address-icons">
                                <img src={placeMarker} alt="" />
                            </div>
                            <div className="contact-address">
                                <h4>Location</h4>
                                <h5>Uyo, Akwa Ibom.</h5>
                            </div>
                        </div>
                        <div className="phone address-content">
                            <div className="address-icons">
                                <img src={phone} alt="" />
                            </div>
                            <div className="contact-address">
                                <h4>Phone</h4>
                                <h5>+2349120849108</h5>
                            </div>
                        </div>
                        <div className="semi2">
                            <img src={semi2} alt="" />
                        </div>
                    </div>
                    <div className="picdown">
                        <img src={picdown} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;