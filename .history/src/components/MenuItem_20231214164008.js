import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='menu_item_holder3'>
      {/* left item */}
        <div className='menu_item_left3'>
            <img className='meal-image3' src={props.meal}/>
        </div>
        {/* right item */}
        <div className='menu_item_right'>
        <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p> 
        </div>

    </div>
  )
}

export default MenuItem