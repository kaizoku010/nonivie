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


// ... (your imports)

function FoodMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataArray = [
    { id: 1, text: PlatterTitle, image: Platter },
    { id: 2, text: SteakTitle, image: Steak },
    { id: 3, text: PlatterTitle, image: Platter },
    { id: 4, text: PlatterTitle, image: Platter },
    { id: 5, text: SteakTitle, image: Steak },

  ];

  const itemsPerRow = 4;

  const startIndex = (currentPage - 1) * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, dataArray.length);
  const currentItems = dataArray.slice(startIndex, endIndex);
  const totalPages = Math.ceil(dataArray.length / itemsPerRow);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log("data is reachable", currentItems);

  return (
    <div className='menu_holder'>
      <div className='food_header'>
        <BottomMenu />
      </div>
      <div className='mobile-food-menu'>
        <MobileMenu />
      </div>
      <div className='food-header'>
        <img className='delights' src={OurDelights} alt="Our Delights" />
      </div>
      <div style={{ marginTop: "50px" }} className='menu_items'>
        {currentItems.map((item) =>
          item.id % 2 === 0 ? (
            <MenuItem key={item.id} meal={item.image} title={item.text} />
          ) : (
            <MenuItem2 key={item.id} meal={item.image} title={item.text} />
          )
        )}
      </div>

      <div className='pagination'>
        <button className='nonivie-button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <p >Previous</p>
        </button>
        <div style={{margin:"40px"}}>
        <span className='page-number'><p>{currentPage}</p></span>
        </div>
        <button className='nonivie-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <p>Next</p>
        </button>
      </div>


      <div className='footer-holder'>
        <FooterMenu />
      </div>

      <div className='footer-holder-mobile'>
        <MobileFooter />
      </div>
    </div>
  );
}

export default FoodMenu