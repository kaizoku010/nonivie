import React from 'react'
import './ReserveSection.css'
import Opulent from '../imgs/opulent.png'
import ReserveCalender from "../imgs/reserve_calender.png"

function ReserveSections() {
  return (
    <div className='reservationHome-kim'>
            <img className='kim-reserve-ic' src={ReserveCalender}/>
            <img className='kim-reserve' src={Opulent}/>


    </div>
  )
}

export default ReserveSections