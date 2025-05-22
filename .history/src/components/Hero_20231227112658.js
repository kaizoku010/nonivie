import React from 'react'
import "./Hero.css"
import HeroTiltle from "../imgs/hello.png"
import { Link } from 'react-router-dom'
import BottomMenu from "./BottomMenu"
import DxButton from './DxButton'
import Explore from "../imgs/stack/hero_content/explore_more.png"
import JoinUs from "../imgs/stack/hero_content/hero_text_exp.png"
import OpulentTitle from "../imgs/stack/hero_content/opu_lux.png"
import Trees from "../imgs/noniviechristmas.png"


function Hero() {
  return (
    <div className='hero-element'>
      {/* element one */}
      <div className='top-hero-content'>
             <img className='opu-title' src={OpulentTitle}/>
            <DxButton/>
            </div>
{/* <div className='christmas-content'>
<div style={{marginLeft:"30px"}} className='tree'>
</div>
<div className='offer-elements'>
  <img className='special-element' src={Trees}/>
  <div className='dx-button'>
  <Link to="/menu">
  <button className='nonivie-button'>View Offers</button>
  </Link>
  
<p className='offer-text'>
  Our chefs have crafted a special christmas menu that blends traditional delights with a touch of contemporary flair.
</p>

  </div>
  </div>
<div style={{marginRight:"30px"}} className='tree'>
</div>
          </div> */}



 <div className='bottom-div'>
            <img className='jo-title'  src={JoinUs}/>
            <Link to="/gallery">
            <img className='exp-title' src={Explore}/> 
            </Link>
        </div> 

        {/* home me */}
        <div className="box">
        <BottomMenu/>
        </div>
    </div>
  )
}

export default Hero