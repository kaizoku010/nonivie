import React from 'react'
import "./MemberShip.css"
import Carousel from 're-carousel'
import Ind
// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
 



function MemberShip() {
  return (
    <div>
<Carousel loop auto widgets={[IndicatorDots, Buttons]}>
    <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
    <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
    <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
  </Carousel>
    </div>
  )
}

export default MemberShip