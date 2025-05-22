import React from 'react'
import './ReserveSection.css'
import Opulent from '../imgs/opulent.png'
import ReserveCalender from "../imgs/reserve_calender.png"

function ReserveSections() {
  return (
    <div className='reservationHome'>
            <img src={ReserveCalender}/>
            <img src={Opulent}/>


    </div>
  )
}

export default ReserveSections