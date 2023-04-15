import React from 'react'

import { smoothScroll } from '../utils'

const SoundSection = () => {
    return (
        <div id="sound-section" className='sound-section wrapper'>
            <div className='body'>
                <div className='sound-section-content content'>
                    <h2 className='title'>New Sound System</h2>
                    <p className='text'>Feel the base.</p>
                    <span className='description'>From $41.62/mo. for 24mo. or $999 before trade-in
                    </span>
                    <ul className='links'>
                        <li><button className='button'>Buy</button></li>
                        <li><a className='link' onClick={() => smoothScroll('display-section')}>Learn more</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SoundSection