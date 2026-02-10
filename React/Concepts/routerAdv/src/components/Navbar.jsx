import React from 'react'
// import { Link } from 'react-router'
import logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <a href="/">
      <img src={logo} className='h-15 w-40 object-contain absolute m-2 '/>
      </a>
        <div className='flex bg-amber-500 justify-between pl-10 p-5 pr-10'>
      <NavLink to="/" className="font-bold text-2xl text-amber-950"></NavLink>
      <div className='flex justify-center gap-10 text-xl font-semibold'>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/about'>About</Link> */}
        <NavLink to="/" end className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink>
        <NavLink to="/films" className={({ isActive }) => isActive ? "underline" : ""}>Films</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? "underline" : ""}>Service</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}>Contact</NavLink>
        {/* <Link to='/films'>Films</Link> */}
        {/* <Link to='/service'>Service</Link> */}
        {/* <Link to='/contact'>Contact</Link> */}
      </div>
    </div>
    </div>
  )
}

export default Navbar
