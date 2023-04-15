import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'

import { smoothScroll } from '../utils'

const Jumbotron = () => {
    return (
        <div id='jumbotron' className='jumbotron-section wrapper'>
            <h2 className='title'>New</h2>
            <img src={Iphone} alt="" className='logo' />
            <p className='text'>Big and bigger.</p>
            <span className='description'>
                From $41.62/mo. for 24mo. or $999 before trade-in
            </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a onClick={() => smoothScroll('sound-section')} className='link '>Learn more</a>
                </li>
            </ul>

            <img src={HoldingIphone} alt="" className='iphone-img' />


        </div>
    )
}

export default Jumbotron