import React from "react";
import "./About.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import NonniVieHeading from "../components/NonnivieHeading";
import "./Contactus.css"
import EmailIcon from "../icons/emailIcon.png"
import "./MobileContact.css"
import MobileMenu from "../components/MobileMenu";
import MobileFooter from "../components/MobileFooter";
import ContactTitle from "../imgs/contactTitle.png"
import CallCenter from "../imgs/callCenter.jpg"


function Contactus() {
    return (
        <div className="contact-us">
            {/* mobile view */}
            <div className="mobile-dx">
                <div className="top-header-contact">
                <MobileMenu />
                </div>
                <div className="mobile-contact-content">
                   <img className="contact-title" src={ContactTitle}/>

                    <div className="fitMe">
                    <div className="top-right">
                        <h3 className="mg-top">Prepare For A Quick Response</h3>
                        <div className="contact-holder">
                        <div className="contact">
                            <h3>General Manager</h3>
                            <p>+256-756-433-333</p>
                            <p>gm@nonivie.com</p>
                        </div>
                        <div className="contact">
                            <h3>Human Resource</h3>
                            <p>+256-759-088-7</p>
                            <p>hr@nonivie.com</p>
                        </div><div className="contact">
                            <h3>Reservations</h3>
                            <p>+256-744-088-577</p>
                            <p>reservation@nonivie.com</p>
                        </div>
                        </div>
                    </div>
                    <div className="bottom-right">
                    </div>
                    </div>

                    <div className="contact-us-footer">
                    <MobileFooter/>
                    </div>
                </div>

            </div>
            {/* large */}
            <div className="largeView">
                <Header className="header-about-us" />
                <div className="content-about-us">
                    <div className="contact-holder">

                        <div className="contact-left">
                            <div className="flex-me">
                                <h2 className="contact-us-heading">Let's Talk, Tell Us About Your Plan.</h2>
                                <p>Write to us about what you have coming up, we shall be honored to be apart of it.</p>

                                <div className="email-ic-section">
                                    <img src={EmailIcon} className="email-ic" />
                                    <div className="email-extra-info">
                                        <p className="email-extra-text">Mail us at.</p>
                                        <p className="email-extra-text">info@nonivie.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="contact-right">
                            
                        </div>

                    </div>
                </div>
                <Footer className='header-footer' />
            </div>
        </div>

    )
}

export default Contactus