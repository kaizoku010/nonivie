import React from 'react'
import "./MenuItem.css"


function MenuItem2(props) {
  return (
    <div className='menu_item_holder2'>
   
   <div className='menu_item_right'>
    <img className='food-title' src={props.title}/>
    <p className='food-desc'>{props.desc}</p>
    </div>

    <div className='menu_item_left'>
        <img className='meal_right properHolder' src={props.meal}/>
    </div>
</div>  )
}

export default MenuItem2