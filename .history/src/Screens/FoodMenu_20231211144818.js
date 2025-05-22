import React from 'react'
import "./FoodMenu.css"
import BottomMenu from "../components/BottomMenu"
import OurDelights from "../imgs/menu/delights.png"
import MenuItem from '../components/MenuItem'
import Platter from "../imgs/menu/meatplatter.jpg"
import PlatterTitle from "../imgs/menu/platter.png"
import Steak from  "../imgs/menu/rebeye.jpg"
import SteakTitle from "../imgs/menu/steak.png"
import MenuItem2 from '../components/MenuItem2'
import FooterMenu from "../components/Footer"


function FoodMenu() {
  return (
    <div className='menu_holder'>
<div className='food_header'>
    <BottomMenu/>
</div>
<div className='food-header'>
        <img src={OurDelights}/>
</div>
    <div className='menu_items'>
        <MenuItem meal={Platter} title={PlatterTitle}/>
        <MenuItem2 meal={Steak} title={SteakTitle}/>
    </div>
    
    <FooterMenu
    </div>
  )
}

export default FoodMenu