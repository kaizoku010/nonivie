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
import FoodData from '../dataPoint/FoodData'
import Mbuzi from "../imgs/menu/mbuzi.jpg";
import Gambas from "../imgs/menu/gambas.jpg"
import MeatPlatter from "../imgs/menu/meat-platter.jpg"
import CheeseCake from "../imgs/menu/noni-cheese-cake.jpg"
import Wings from "../imgs/menu/buffulo-wings.jpg"
import Salad from "../imgs/menu/ceaser-salad.jpg"
import Tarte from "../imgs/menu/chocolatetart.jpg"
import Rebye from "../imgs/menu/rebeye.jpg"
// titles
import WingsTitle from "../imgs/menu/titles/buffalowings.png"
import CheeseTitle from "../imgs/menu/titles/cheese.png"
import ChickenTitle from "../imgs/menu/titles/chicken.png"
import GambasTitle from "../imgs/menu/titles/gambas.png"
// import PlatterTitle from "../imgs/menu/titles/platter.png"
import PoshoTitle from "../imgs/menu/titles/posho.png"
import SaladTitle from "../imgs/menu/titles/salad.png"
// import SteakTitle from "../imgs/menu/titles/steak.png"
import TarteTitle from "../imgs/menu/titles/tart.png";


// ... (your imports)

function FoodMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  // const dataArray = [
  //   { id: 1, text: PlatterTitle, image: Platter },
  //   { id: 2, text: SteakTitle, image: Steak },
  //   { id: 3, text: PlatterTitle, image: Platter },
  //   { id: 4, text: PlatterTitle, image: Platter },
  //   { id: 5, text: SteakTitle, image: Steak },

  // ];

  const dataArray = [

    {
        id:1,
        foodImage: Mbuzi,
        titleImage: PoshoTitle,
        desc: "stir fried and spicy goats meat with mixed bell peppers, pnions, coriander, local veggies with tatmato concasse and ugali"
    },

    {
        id: 2,
        foodImage: Gambas,
        titleImage: GambasTitle,
        desc:"Spanish insipired prawns cloaked in galric-infused olive oil with smoky hints of paprika a touch of sweetness from mixed bell peppers and garnised with coriander"
    },

    {
        id: 3,
        foodImage: MeatPlatter,
        titleImage: PlatterTitle,
        desc:" A variety of meats paired with your favorite salad, veggies, sausages, rump steak, english battered tilapia fillet, chicken strips, bbq ,  chicken wings or drum sticks, garlic bread, chips, salad, otato wedeges, onion rings and selectoin of chef's sauces"
    },

{
    id:4,
    foodImage: CheeseCake,
    titleImage: CheeseTitle,
    desc:"Exotic fruits, strawberry coculis and chocolate soil"
},

{
    id:5,
    foodImage: Wings,
    titleImage: WingsTitle,
    desc:"Smokey BBQ sauce mixed leaf salad"
},

{
    id:6,
    foodImage: Salad,
    titleImage: SaladTitle,
    desc:"Ginger, Onions, garlic, rockets & coriander tossed in with soya, sesame, dressing & lime"
},

{
    id:7,
    foodImage:Tarte,
    titleImage: TarteTitle,
    desc:"Vanilla ice-cream and pistachio crumble"
},

{
    id:8,
    foodImage: Rebye,
    titleImage: SteakTitle,
    desc:"Garlic butter, peppercorn sauce, hollandise OR blue cheese sauce"
}
]


  // const dataArray = FoodData.foodData;
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

     <div style={{ marginTop: "50px" }} className='menu_items'>
        {currentItems.map((item, index) =>
          index % 2 === 0 ? (
            <MenuItem key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
          ) : (
            <MenuItem2 key={item.id} desc={item.desc} meal={item.foodImage} title={item.titleImage} />
          )
        )}
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