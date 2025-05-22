import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='menu_item_holder'>
      {/* left item */}
        <div className='menu_item_left3'>
            <img className='meal-image3' src={props.meal}/>
        </div>
        {/* right item */}
        <div className='menu_item_right3'>
        <img className='food-title3' src={props.title}/>
        <p className='food-desc3'>{props.desc}</p> 
        </div>

    </div>
  )
}

export default MenuItem