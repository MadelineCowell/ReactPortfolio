import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    // reversing state, hamburger vs close option
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar=container">
                    <Link to="/" className="navbar-logo">
                        MADELINE <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        {/* far fa-snowflake or fas fa-bars */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
