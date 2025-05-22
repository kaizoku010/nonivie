import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='menu_item_holder'>
      {/* left item */}
        <div className='menu_item_left'>
            <img className='meal-image' src={props.meal}/>
        </div>
        {/* right item */}
        <div className='menu_item_right'>
        {/* <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p> */}
        </div>

    </div>
  )
}

export default MenuItem