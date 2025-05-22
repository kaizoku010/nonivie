import React from 'react'
import "./ParkComp.css"
import Arrow from "../icons/arrow.svg"
import patternIc from "../imgs/Pattern.png"

function ParkComp() {
    return (
        <div className='park-holder'>

            <div className='upper-park-element'>
                <h3 className='park-heading'>
                    Our goal is create a luxurious and transcendent experience that redefines premium hospitality by seamlessly blending opulence, culinary mastery, and vibrant nightlife.<br /><br />Noni-Vie provides an unforgettable and exclusive experience, making you feel like a discerning connoisseur and allowing you to revel in the ultimate luxury and culinary mastery.</h3>
                <img className='park-ic' src={patternIc} />
            </div>

            <div className='lower-park-element'>
                <p className='browse-title' style={{ marginBottom: "20px" }}>Browse our sections</p>
          
                <div className='park-sections'
                
                >

                    <div style={{ marginTop: "0px" }} className='park-section'>
                        <h2>01</h2>
                        <div>
                            <h3>VVIP</h3>
                        </div>
                        <img className='park-arrow' src={Arrow} />
                    </div>

                    <div className='park-section'>
                        <h2>02</h2> <h3>Baller'z End</h3> <img className='park-arrow' src={Arrow} />
                    </div>


                    <div style={{ marginTop: "0px" }} className='park-section'>
                        <h2>03</h2> <h3>Valvet Terrace</h3> <img className='park-arrow' src={Arrow} />
                    </div>

                    <div style={{ marginTop: "0px" }} className='park-section'>
                        <h2>04</h2> <h3>Pantheon Sun Deck</h3> <img className='park-arrow' src={Arrow} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ParkComp