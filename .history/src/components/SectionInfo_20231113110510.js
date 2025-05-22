import React from 'react'
import "./SectionInfo.css"
import NonivieRadio from './NonivieRadio'
import MainImage  from"../imgs/main_img.jpg"


function SectionInfo({data}) {

console.log("check if its de: ", data)

  return (
    <div className='sect-info'>
      {/* left content */}
      <div className='sect-info-left'>
      <h1>Available Table Bookings</h1>
      <p>500,000ugx Per Booth</p>
      <p>250,000ugx Per Cocktail Table</p>
      <NonivieRadio props={data}/>
      <NonivieRadio props/>
      </div>
      {/* right image */}
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo