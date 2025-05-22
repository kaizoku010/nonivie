import React from 'react'
import "./PcMenu.css"

function FoodMenuHolder(props) {

const image = props.meal;
  return (
    <div className='pc-view'>
    {/* pc-menu-items holder One */}
    <div className='pc-menu-holder'>
             {/* image */}
        <div className='pc-menu-image'>
        {/* <img className='meal-image-pc' src={image}/> */}
        </div>
        {/* text */}
        <div className='pc-menu-text'>
{/*             
        <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p> */}
        </div>
    </div>
</div>
  )
}

export default FoodMenuHolder