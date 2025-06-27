import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' height="35" />
        <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
        </div>
        <button className='btn'>Hire me</button>
    </nav>
  )
}

export default Navbar