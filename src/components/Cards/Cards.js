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
                            // text="Taco Playlist Generator"
                            label='Group Project'
                            // href='/https://github.com/MadelineCowell/API-Playlist-Generator/'
                        />
                        <a className="external-link"
                            href='https://github.com/MadelineCowell/API-Playlist-Generator/'
                             target='_blank'
                             rel="noopener noreferrer"
                            >
                                 Taco Playlist Generator
                            </a>
                        <CardItem
                        src='images/JS-QuizWhite.PNG'
                        // text='View my interactive quiz'
                        label='Individual Project'
                        // path='/https://github.com/MadelineCowell/JS-Code-Quiz/'
                            
                        />
                         <a className="external-link"
                            href='https://github.com/MadelineCowell/JS-Code-Quiz/'
                             target='_blank'
                             rel="noopener noreferrer">
                                 Interactive Quiz
                            </a>

                        <CardItem
                        src='\images\PasswordGeneratorWhite.PNG'
                        text='View my random password generator'
                        label='Individual Project'
                        // path='/https://github.com/MadelineCowell/JavaScript-Password-Generator/'
                        />
                        <a className="external-link"
                            href='https://github.com/MadelineCowell/JavaScript-Password-Generator/'
                             target='_blank'
                             rel="noopener noreferrer"
                            >
                                 Random Password Generator
                            </a>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="\images\GitHubLogoOpaque.png"
                            // text="GitHub"
                            label='Resource'
                            // path='https://github.com/MadelineCowell/'
                        />
                        <a className="external-link"
                            href='https://github.com/MadelineCowell/'
                             target='_blank'
                             rel="noopener noreferrer"
                            >
                                 GitGub Portfolio
                            </a>
                        <CardItem
                        src='images/LinkedInLogoSQ.png'
                        // text='LinkedIn'
                        label='Resource'
                        // path='https://www.linkedin.com/in/madeline-cowell/'
                        />
                        <a className="external-link"
                            href='https://www.linkedin.com/in/madeline-cowell/'
                             target='_blank'
                             rel="noopener noreferrer"
                            >
                                 LinkedIn Portfolio
                            </a>

                        <CardItem
                        src='\images\CVLogoOpaque.png'
                        // text='Resume'
                        label='Resource'
                        // path='/resume'
                        />
                         <a className="external-link"
                            href='https://cowell-portfolio.herokuapp.com/resume'
                             target='_blank'
                             rel="noopener noreferrer"
                            >
                                 Resume
                            </a>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Cards
