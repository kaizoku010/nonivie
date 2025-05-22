import React from 'react'
import "./MenuItem.css"
import "./Me"


function MenuItem2(props) {
  return (
    <div className='menu_item_holder'>
    <div className='menu_item_left2'>
     <img className='food-title2' src={props.title}/>
    <p className='food-desc'>{props.desc}</p>
     
    </div>
    <div className='menu_item_right2 biggerMe'>
    <img className='meal-image' src={props.meal}/>

    </div>


</div>
)
}

export default MenuItem2

// 207 x 262