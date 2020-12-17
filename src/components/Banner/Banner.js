import React from 'react'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom';
import './Banner.css'
import '../../App.css'

function Banner() {
    return (
        <div className='banner-container'>
            <video src='videos/CancunSunset.mp4' autoPlay loop muted />
            <h1>MADELINE COWELL</h1>
            {/* <p>View my portfolio!</p> */}
            <div className="banner-btns">
                {/* <Link to='/about'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        ABOUT
                </Button>
                </Link> */}
                <Link to="/resume">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        RESUME
                </Button>
                </Link>

            </div>
        </div>
    )
}

export default Banner
