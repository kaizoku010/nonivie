import React from 'react'
import "./SectionInfo.css"
import "."
import MainImage  from"../imgs/main_img.jpg"

function SectionInfo(props) {
  return (
    <div className='sect-info'>
      
      {/* left content */}
      <div className='sect-info-left'>
      <h1>Available Table Bookings</h1>
      </div>
      {/* right image */}
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo