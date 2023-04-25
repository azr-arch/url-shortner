import React from 'react'
import logo from '../assets/logo.svg'


const Header = ({expanded, handleClick}) => {
  return (
    <header>
        <div className="header--logo-wrapper">
            <img src={logo} alt="logo" />
        </div>

        <nav className='header--nav'>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
        </nav>

        <div className="header--login-signup-wrapper">
            <button className="header--login">
                Login
            </button>
            <button className="header--signup">
                Sign Up
            </button>
        </div>

        <nav 
            className='mobile-nav' 
            aria-expanded={expanded}
        >
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <button className="header--login">
                    Login
                </button>
                <button className="header--signup">
                    Sign Up
                </button>
            </ul>

        </nav>

        <div className='mobile-nav-toggle hamburger active'
            onClick={handleClick}
        >
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </header>
  )
}

export default Header