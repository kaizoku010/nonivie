import React from 'react'
import "./MemberPage.css"
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import NonniVieHeading from "../components/NonnivieHeading";
import ImageTest from "../imgs/rework/cigars.jpg"
import Swek from "../imgs/rework/Pattern.png"
import NvBtn from "../components/NoniVieButton"


function MemberPage() {
  return (
    <div className="about-us">
            {/* <div className="yellow-line"></div> */}
            <Header className="header-about-us" />
            <BreadCrumb title={"Membership"} />

            <div className="content-about-us">
                <div className="about-content-holder">
                   <div className="about-top-content about-content-holder">
                    <div className="first-child">
                        <img className="about-ic" src={Swek} />

                    </div>
                    <div className="middle-child">
                        <p className="about-text">
                            At Noni-Vie we make you look like someone with impeccable
                            taste and a knack for discovering the finest.
                        </p>
                        <p className="about-text">
                            We believe that true luxury isn't just
                            about extravagance; it's about creating remarkable
                            moments that elevate your senses and leave
                            a mark on your soul.
                        </p>

                        <p className="about-text">
                            Noni-Vie makes you feel like you're part of an elite world, where luxury,
                            sophistication, and class come together to create lasting memories.<br />
                            <br />
                            * Exquisite Cuisine: Our culinary experts curate dishes that are
                            a feast for the senses, using the finest ingredients and innovative techniques.
                            <br />
                            <br />
                            * Dynamic Nocturnal Ambiance: Our nightlife experience is second
                            to none, with a vibrant atmosphere that sets the stage for unforgettable evenings.
                            <br />
                            <br />
                            * Unmatched Opulence: Every detail of Noni-Vie exudes luxury,
                            from the decor to the service, ensuring a truly indulgent experience.
                        </p>
                    </div>
                    <div className="first-child">
                        <img className="about-ic" src={Swek} />
                    </div>
                    </div>
                </div>
{/* lower content */}
            </div>
          
          
            <div className="style-me">
            <h3 className="ciger-heading">Ciger Dummy Heading</h3>
            <p className="ciger-text">At Noni-Vie we make you look like someone with
            impeccable taste and a knack for discovering the finest.</p>
            <p className="ciger-text">We believe that true luxury isn't just about extravagance; it's about creating remarkable\
            moments that elevate your senses and leave a mark on your soul.</p>
           <NvBtn/>
            </div>
         
            <Footer className='header-footer' />
        </div>
  )
}

export default MemberPage