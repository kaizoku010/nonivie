import React from 'react'

function FoodMenuHolderTwo(props) {
    return (
        <div className='pc-view'>
            {/* pc-menu-items holder One */}
            <div className='pc-menu-holder'>
            <div className='pc-menu-text'>
            <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p>
                </div>
                <div className='pc-menu-image'>
                 <img className='meal-image-pc-view' src={props.meal}/>
                </div>             
            </div>
        </div>
    )
}

export default FoodMenuHolderTwo