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

function Sections() {
    return (
        <div>
            {/* // pc version */}
            <div className='sectionPage'>
                {/* <MetaPixel /> */}
                <div className='header-holder'>
                    <BottomMenu style={{ width: "100%" }} /> 
                </div>

                <div className='middle-men'>
                    <div className='top-level'>
                        <img className='section-title' src={SectionTitle} />
                        <div className='lower-level'>
                            <div className='indoor-Section'>
                                <img className='sec-titles' src={Indoor} />
                                <div className='inner-sec'>

                                    <Link to="/bookings" state={"Champagne Club"}><img style={{ marginBottom: "20px" }} className='section' src={ChampClub} /></Link>
                                    <Link state={"Ballas End"}><img className='section' src={Ballerz} /></Link>

                                </div>

                            </div>

                            <div className='indoor-Section'>
                                <img className='sec-titles' src={Indoor} />
                                <div className='inner-sec'>

                                    <Link to="/bookings" state={"Champagne Club"}><img style={{ marginBottom: "20px" }} className='section' src={ChampClub} /></Link>
                                    <Link state={"Ballas End"}><img className='section' src={Ballerz} /></Link>

                                </div>

                            </div>
                            <div className='indoor-Section'>
                                <img style={{ marginBottom: "-3px;" }} className='sec-titles' src={Outdoor} />
                                <div className='inner-sec'>
                                    <Link to="/bookings" state={"Midnight Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Midnight} /></Link>
                                    <Link to="/bookings" state={"Valvet Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Valvet} /></Link>
                                    <Link to="/bookings" state={"Pantheon Terrace"}><img className='section' src={Pantheon} /></Link>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>


                <div className='down-below'>


                    <Footer />
                </div>


            </div>
            {/* mobile version */}

            <div className='hide-on-pc'>
                <div className='sectionPage-pc'>
                    <div className='header-holder'>
                        <div className="sections-mobile-menu">
                            <MobileMenu />
                        </div>
                        <div className='sections-footer'>
                            <BottomMenu style={{ width: "100%" }} />
                        </div>
                    </div>

                    <div className='top-level'>
                        <div className="sections-mobile-menu">
                            <MobileMenu />
                        </div>
                        <div className='lower-level'>
                            <img className='section-title' src={SectionTitle} />

                            <div className='indoor-Section'>
                                <img className='sec-titles-click' src={ClickMe} />
                                <img className='sec-titles' src={Indoor} />
                                <div className='inner-sec'>                                                
                                    <Link to="/bookings" state={"champange Club"}><img style={{ marginBottom: "20px" }} className='section' src={ChampClub} /></Link>
                                    <Link state={"Ballers End"}><img className='section' src={Ballerz} /></Link>

                                </div>

                            </div>
                            <div className='indoor-Section'>
                                <img style={{ marginBottom: "-3px;" }} className='sec-titles' src={Outdoor} />
                                <div className='inner-sec'>
                                    <Link to="/bookings" state={"Midnight Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Midnight} /></Link>
                                    <Link to="/bookings" state={"Valvet Terrace"}><img style={{ marginBottom: "20px" }} className='section' src={Valvet} /></Link>
                                    <Link to="/bookings" state={"Pantheon Terrace"}><img className='section spaceMe' src={Pantheon} /></Link>

                                </div>

                            </div>

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