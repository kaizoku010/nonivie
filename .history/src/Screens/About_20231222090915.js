import React from "react";
import "./About.css"
import Footer from "../components/Footer";
import AboutMobile from "./AboutMobile";
import ABoutText from "../imgs/abtText.svg"
import AboutHorse from "../imgs/abtHorse.png"
import BottomMenu from "../components/BottomMenu";


function About() {
    return (
        <div className="about-page">
        <div className="about-us">
          
            <BottomMenu className="header-about-us" />
              <div className="content-about-us">
                <div className="about-content-holder">
                   <div className="kim-layout">
                    <div className="kim-left">
                        <img src={ABoutText}/>
                    </div>

                               <div className="divider"></div>
                    <div className="kim-right">
                        <img style={{width:}} src={AboutHorse}/>
                    </div>
                    </div>
                </div>
            </div>   
    
            <Footer className='header-footer' />
        </div>
        <AboutMobile className="mobile-about"/>
        </div>
    )

}

export default About