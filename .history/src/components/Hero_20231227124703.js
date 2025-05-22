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
        <img className='opu-title' src={OpulentTitle} />
      
        <DxButton />
      </div>
      <div className='bottom-div'>
      <div className='left-pane'>
        <h2 className='ex-'>Experience pure elegance</h2>
        <h2>Join us for an Opulent</h2>
        </div>
        {/* right */}
        <div className='right-pane'>
        <Link to="/gallery">
          <p>Explore More</p>
        </Link>

        </div>
              </div>

      {/* home menu */}
      <div className="box">
        <BottomMenu />
      </div>
    </div>
  )
}

export default Hero