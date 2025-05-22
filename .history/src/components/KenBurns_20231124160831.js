import React from 'react'
import DxWall from "../imgs/dxWall.jpg"

function KenBurns() {
    return (
        <div>
            <div class="ken-row">
                <div class="kenburns-wrap">
                    <img src={DxWall} class="kenburns" />
                </div>
                <div class='content'>
                    <h1 className='ken-title'>KenBurns Test</h1>
                </div>
            </div>
        </div>
    )
}

export default KenBurns