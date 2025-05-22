import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='menu_item_holder'>
        <div className='menu_item_left'>
            <img src={props.meal}/>
        </div>
        <div className='menu_item_right'>
        <img src={props.title}/>
        </div>

    </div>
  )
}

export default MenuItem