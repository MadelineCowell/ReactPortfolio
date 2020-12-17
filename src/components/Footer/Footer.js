import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-connect'>
                <p className='footer-heading'>
                    Connect with me!
                </p>
                <p className='footer-text'>
                    SEND AN EMAIL
                </p>
                <div className='contact-form'>
                    <form>
                    <input 
                        type='name'
                        name='name'
                        placeholder='Your Name'
                        className='footer-name-input'/>
                        <input 
                        type='email'
                        name='email'
                        placeholder='hello@email.com'
                        className='footer-email-input'/>
                        <Button buttonStyle='btn-outline'>CONTACT</Button>
                    </form>
                </div>
            </section>

            {/* TO DO: ADD IN FOOTER LINKS! */}
            {/* <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>ABOUT</h2>
                        <Link to='/contact'>Contact me!</Link>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </div> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CONNECT WITH ME ON SOCIAL
                        </Link>
                        {/* <small className='website-rights'>MADELINE COWELL © 2020</small> */}
                        <div className='social-icons'>
                            <Link className='social-icon-link facebook'
                            to='https://www.facebook.com/madeline.cowell.3'
                            target='_blank'
                            aria-label='Facebook'>
                                <i className='fab fa-facebook'></i>
                            </Link>
                            <Link className='social-icon-link instagram'
                            to='https://www.instagram.com/madeline523/'
                            target='_blank'
                            aria-label='Instagram'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link className='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/madeline-cowell/'
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'></i>
                            </Link>
                            <Link className='social-icon-link github'
                            to='https://github.com/MadelineCowell/'
                            target='_blank'
                            aria-label='GitHub'>
                                <i className='fab fa-github'></i>
                            </Link>
                        </div>
                        <small className='website-rights'>MADELINE COWELL © 2020</small>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
