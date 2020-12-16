import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
    return (
        <div className='cards'>
            <h1>CHECK OUT MY WORK!</h1>
            <div className="cards__container">
                <div className="wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="../assets/images/CVLogo.png"
                        text="View my resume"
                        label='Resume'
                        path='/contact'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
