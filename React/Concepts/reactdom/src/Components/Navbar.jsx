import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4 text-xl font-semibold bg-cyan-800 h-15'>
      <h1>Deepa studios
      </h1>
      <div className='flex gap-6'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
