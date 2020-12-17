import React from 'react'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom';
import './Banner.css'
import '../../App.css'

function Banner() {
    return (
        <div className='banner-container'>
            <video src='videos/CancunSunset.mp4'autoPlay loop muted />
            <h1>MADELINE COWELL</h1>
            <p>View my portfolio!</p>
            <div className="banner-btns">
                {/* <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                href='/resume'>RESUME
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                href='https://github.com/MadelineCowell/'>GITHUB
                </Button> */}

                <Link to="/resume">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    RESUME
                </Button>
              </Link>
              <Link to='https://github.com/MadelineCowell/'>
              <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GITHUB
                </Button>
              </Link>
            </div>
        </div>
    )
}

export default Banner
