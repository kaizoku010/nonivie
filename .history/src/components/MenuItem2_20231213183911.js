import React from 'react'
import "./MenuItem.css"


function MenuItem2(props) {
  return (
    <div className='menu_item_holder'>
    <div className='menu_item_left'>
        <img className='meal-image' src={props.meal}/>
    </div>
    <div className='menu_item_right biggerMe'>

    <img className='food-title' src={props.title}/>
    <p className='food-desc'>{props.desc}</p>
    </div>
    

</div>
)
}

export default MenuItem2

// 207 x 262