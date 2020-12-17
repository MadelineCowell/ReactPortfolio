import React from 'react'
import { Button } from '../button/Button'
import './Banner.css'
import '../../App.css'

function Banner() {
    return (
        <div className='banner-container'>
            <video src='videos/CancunSunset.mp4'autoPlay loop muted />
            <h1>MADELINE COWELL</h1>
            <p>View my portfolio!</p>
            <div className="banner-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>RESUME</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>CONNECT <i className='far-fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Banner
