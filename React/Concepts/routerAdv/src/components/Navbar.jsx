import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex bg-amber-500 justify-between pl-10 p-5 pr-10'>
      <a href="/" className='font-bold text-2xl text-amber-950'>Deepa studios</a>
      <div className='flex justify-center gap-10 text-xl font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/films'>Films</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
