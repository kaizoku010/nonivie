import React, { useState } from 'react'
import "./FoodMenu.css"
import BottomMenu from "../components/BottomMenu"
import OurDelights from "../imgs/menu/delights.png"
import MenuItem from '../components/MenuItem'
import MenuItem2 from '../components/MenuItem2'
import FooterMenu from "../components/Footer"
import MobileMenu from "../components/MobileMenu"
import MobileFooter from "../components/MobileFooter"
import FoodData from '../dataPoint/FoodData'
import FoodMenuHolder from '../components/FoodMenuHolder'
import FoodMenuHolderTwo from '../components/FoodMenuHolderTwo'

function FoodMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataArray = FoodData.foodData;
  // console.log("food array", foodArray)

  const itemsPerRow = 3; // Display all items in a single row

  const startIndex = (currentPage - 1) * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, dataArray.length);
  const currentItems = dataArray.slice(startIndex, endIndex);
  const totalPages = Math.ceil(dataArray.length / itemsPerRow);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  // console.log("data is reachable", currentItems);

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
      {/* mobile view */}
      <div className='mobile-view'>
        <div style={{ marginTop: "50px" }} className='menu_items'>
          {currentItems.map((item, index) =>
            index % 2 === 0 ? (
              <MenuItem key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
            ) : (
              <MenuItem2 key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
            )
          )}
                  <p className='pagination-text'>Click Next To View More</p>
        </div>
        <div className='pagination'>
          <button className='nonivie-button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <p>Previous</p>
          </button>
          <div style={{ margin: "40px" }}>
            <span className='page-number'><p>{currentPage}</p></span>
          </div>
          <button className='nonivie-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <p>Next</p>
          </button>
        </div>
      </div>
      {/* pc version */}
      <div style={{ marginTop: "50px" }} className='menu_items'>
          {currentItems.map((item, index) =>
            index % 2 === 0 ? (
              <FoodMenuHolder key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
            ) : (
              <FoodMenuHolderTwo key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
            )
          )}
        </div>
        <p className='pagination-text'>Click Net To View More</p>
        <div className='pc-view'>
 <div className='pagination'>
          <button className='nonivie-button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <p>Previous</p>
          </button>
          <div style={{ margin: "40px" }}>
            <span className='page-number'><p>{currentPage}</p></span>
          </div>
          <button className='nonivie-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <p>Next</p>
          </button>
        </div>
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