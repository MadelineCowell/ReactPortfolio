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
                            src="\images\Overview.PNG"
                            text="Taco Playlist Generator"
                            label='Group Project'
                            path='/https://github.com/MadelineCowell/API-Playlist-Generator/'
                        />
                        <CardItem
                        src='images/JS-QuizWhite.PNG'
                        text='View my interactive quiz'
                        label='Individual Project'
                        path='/https://github.com/MadelineCowell/JS-Code-Quiz/'
                        />
                        <CardItem
                        src='\images\PasswordGeneratorWhite.PNG'
                        text='View my random password generator'
                        label='Individual Project'
                        path='/https://github.com/MadelineCowell/JavaScript-Password-Generator/'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="\images\GitHubLogoOpaque.png"
                            text="GitHub"
                            label='Resource'
                            path='https://github.com/MadelineCowell/'
                        />
                        <CardItem
                        src='images/LinkedInLogoSQ.png'
                        text='LinkedIn'
                        label='Resource'
                        path='https://www.linkedin.com/in/madeline-cowell/'
                        />
                        <CardItem
                        src='\images\CVLogoOpaque.png'
                        text='Resume'
                        label='Resource'
                        path='/resume'
                        />
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Cards
