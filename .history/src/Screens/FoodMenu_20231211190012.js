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
import MobileMenu from "../components/MobileMenu"
import MobileFooter from "../components/MobileFooter"


function FoodMenu() {

  const dataArrayText = [ 
      {id:34, text: PlatterTitle, image}

  ]

  return (
    <div className='menu_holder'>
<div className='food_header'>
    <BottomMenu/>
</div>
<div className='mobile-food-menu'>
<MobileMenu/>
</div>
<div className='food-header'>
        <img className='delights' src={OurDelights}/>
</div>
    <div style={{marginTop:"50px"}} className='menu_items'>
        <MenuItem meal={Platter} title={PlatterTitle}/>
        <MenuItem2 meal={Steak} title={SteakTitle}/>
        <MenuItem meal={Platter} title={PlatterTitle}/>
        <MenuItem2 meal={Steak} title={SteakTitle}/>
        <MenuItem meal={Platter} title={PlatterTitle}/>


    </div>
   
    <div className='footer-holder'>
    <FooterMenu/>
    </div>

    
    <div className='footer-holder-mobile'>
    <MobileFooter/>
    </div>
    </div>
  )
}

export default FoodMenu