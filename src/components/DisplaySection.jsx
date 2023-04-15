import React from 'react'

import { smoothScroll } from '../utils'

const DisplaySection = () => {
    return (
        <div id='display-section' className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>Brilliant.</p>
            <span className='description'>A display that's up to 2x brighter in the sun.</span>
            <button className='button'>Try me!</button>
            <button className='back-button' onClick={() => smoothScroll('jumbotron')}>TOP</button>
        </div>
    )
}

export default DisplaySection