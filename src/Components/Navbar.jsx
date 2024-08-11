import React from 'react'
import brandlogo from '../assets/brand_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className="logo">
            <img src={brandlogo} alt="brand-logo" />
        </div>
        <ul>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/">Location</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
        <button>Login</button>
    </nav>
  )
}

export default Navbar