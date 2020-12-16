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
                            src="\images\TacoPlaylist.PNG"
                            text="Taco Playlist Generator"
                            label='Project'
                            path='/project'
                        />
                        <CardItem
                        src='images/JS-Quiz.PNG'
                        text='View my interactive quiz, utilizing Javascript'
                        label='Project'
                        path='/project'
                        />
                        <CardItem
                        src='\images\PasswordGenerator.PNG'
                        text='View my interactive quiz, utilizing Javascript'
                        label='Project'
                        path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="\images\GitHub.png"
                            text="GitHub"
                            label='Resource'
                            path='/connect'
                        />
                        <CardItem
                        src='images/LinkedIn.png'
                        text='LinkedIn'
                        label='Resource'
                        path='/connect'
                        />
                        <CardItem
                        src='\images\Resume.png'
                        text='Resume'
                        label='Resource'
                        path='/connect'
                        />
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Cards
