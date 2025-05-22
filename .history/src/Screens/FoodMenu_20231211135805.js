import React from 'react'
import "./FoodMenu.css"
import BottomMenu from "../components/BottomMenu"
import OurDelights from "../imgs/menu/delights.png"


function FoodMenu() {
  return (
    <div className='menu_holder'>
<div className='food_header'>
    <BottomMenu/>
</div>
<div className='food-header'>
        <img src={OurDelights}/>
</div>
    

        </div>
  )
}

export default FoodMenu