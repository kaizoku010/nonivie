import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='menu_item_holder'>
        <div className='menu_item_left'>
            <img className='meal' src={props.meal}/>
        </div>
        <div className='menu_item_right'>
        <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p>
        </div>

    </div>
  )
}

export default MenuItem