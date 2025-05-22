import React, { useState } from 'react'
import "./FoodMenu.css"
import BottomMenu from "../components/BottomMenu"
import OurDelights from "../imgs/menu/delights.png"
import MenuItem from '../components/MenuItem'
import Platter from "../imgs/menu/meatplatter.jpg"
import PlatterTitle from "../imgs/menu/platter.png"
import Steak from "../imgs/menu/rebeye.jpg"
import SteakTitle from "../imgs/menu/steak.png"
import MenuItem2 from '../components/MenuItem2'
import FooterMenu from "../components/Footer"
import MobileMenu from "../components/MobileMenu"
import MobileFooter from "../components/MobileFooter"


function FoodMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataArray = [
    { id: 34, text: PlatterTitle, image: Platter },
    { id: 31, text: Steak, image: SteakTitle },
    { id: 21, text: PlatterTitle, image: Platter }
  ]

  const itemsPerRow = 2;

  const startIndex = (currentPage - 1) * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, dataArray.length);
  const currentItems = dataArray.slice(startIndex, endIndex);  
  const totalPage = Math.ceil(dataArray.length / itemsPerRow);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  console.log("data is reachable", currentItems)

  return (
    <div className='menu_holder'>
      <div className='food_header'>
        <BottomMenu />
      </div>
      <div className='mobile-food-menu'>
        <MobileMenu />
      </div>
      <div className='food-header'>
        <img className='delights' src={OurDelights} />
      </div>
      <div style={{ marginTop: "50px" }} className='menu_items'>
        {currentItems.map((item) =>     
        item.id % 2 === 0 ? (              
            <MenuItem meal={item.image} title={item.text} />
            
        ) : (
          <MenuItem2 meal={item.image} title={item.text} />
        )}
        )


      </div>

      <div className='footer-holder'>
        <FooterMenu />
      </div>


      <div className='footer-holder-mobile'>
        <MobileFooter />
      </div>
    </div>
  )
}

export default FoodMenu