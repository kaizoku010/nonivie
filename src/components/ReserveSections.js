import React from 'react'
import './ReserveSection.css'
import Opulent from '../imgs/opulent.png'
import ReserveCalender from "../imgs/reserve_calender.png"
import ExpHeading from "../imgs/exp.png"

function ReserveSections() {
  return (
    <div className='reservationHome-kim'>
            <img className='kim-reserve-ic' src={ReserveCalender}/>
            <img className='kim-reserve' src={Opulent}/>
            <img className='ex-heading' src={ExpHeading}/>


    </div>
  )
}

export default ReserveSections