import React, { useEffect } from 'react'
import "./Sections.css"
import SectionBg from "../imgs/sections.jpg"
import SectionTitle from "../imgs/sectionTitle.svg"
import BottomMenu from './BottomMenu'
import Footer from './Footer'
import Outdoor from "../imgs/indoor.svg"
import Indoor from "../imgs/outdoor.svg"
import ChampClub from "../imgs/SVG/cc.svg"
import Ballerz from "../imgs/SVG/ball.svg"
import Midnight from "../imgs/SVG/midnight.svg"
import ClickMe from "../imgs/click.svg"
import MobileFooter from "./MobileFooter"
import MobileMenu from "./MobileMenu"
import Valvet from "../imgs/SVG/val.svg"
import Pantheon from "../imgs/SVG/panth.svg"
import { Link } from 'react-router-dom'
import MetaPixel from '../utils/metaPixel/metaPixel'
import CallUsText from "../imgs/callUsText.svg"
import CallUsIC from '../imgs/call_us.png'
import Book from '../imgs/SVG/book.svg'


function Sections() {

    const handleCallClick = () => {
        window.location.href = 'tel:+256-744-088-577';
    }

    return (
        <div>
            {/* // pc version */}
         

            {/* mobile version */}

            <div className='hide-on-pc'>
                <div className='sectionPage-pc'>

                    <div className='top-level'>
                       
                        <div className='lower-level'>
                            <img className='section-title' src={SectionTitle} />


                            <div style={{ marginBottom: "20px" }} className='indoor-Section'>
                                <img className='sec-titles' src={CallUsText} />
                                <div className='inner-sec'>

                                    <>
                                        <img style={{ marginBottom: "20px;", width: "100px" }} className='' src={CallUsIC} />
                                    </>
                                    <img style={{ margin: "10px 0px" }} className='small-ic' src={Book} />
                                    <p style={{ width: "220px", marginTop: "10px", marginBottom: "25px" }}> Click the button below to have our reservation team place a reservation for you.</p>
                                    <button onClick={handleCallClick} className='mobile-call-us-btn'>Call +256-744-088-577</button>


                                </div>

                            </div>
{/* 
                            <div className='indoor-Section'>
                                <img className='sec-titles-click' src={ClickMe} />
                                <img className='sec-titles' src={Indoor} />
                                <div className='mobile-inner-sec'>
                                    <Link to="/bookings" state={"champange Club"}><img style={{ marginBottom: "20px" }} className='section' src={ChampClub} /></Link>
                                    <Link state={"Ballers End"}><img className='section' src={Ballerz} /></Link>

                                </div>

                            </div>
                            <div className='indoor-Section'>
                                <img style={{ marginBottom: "-3px;", paddingTop: "0px !important" }} className='sec-titles' src={Outdoor} />
                                <div className='inner-sec'>
                                    <Link to="/bookings" state={"Midnight Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Midnight} /></Link>
                                    <Link to="/bookings" state={"Valvet Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Valvet} /></Link>
                                    <Link to="/bookings" state={"Pantheon Terrace"}><img className='section spaceMe' src={Pantheon} /></Link>

                                </div>

                            </div> */}

                        </div>
                    </div>
                    <div className='sections-footer'>
                        <Footer className="sections-footer" /></div>
                    <div className="sections-mobile-footer">

                        <MobileFooter className="sections-mobile-footer" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sections