import React from 'react'
import "./SectionInfo.css"
import NonivieRadio from './NonivieRadio'
import MainImage  from"../imgs/main_img.jpg"


function SectionInfo(props) {

const data = props.data;  
console("check if its de: ", data)

  return (
    <div className='sect-info'>
      
      {/* left content */}
      <div className='sect-info-left'>
      <h1>Available Table Bookings</h1>
      <p>A booth g</p>
      </div>
      {/* right image */}
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo