import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-7 py-5 bg-blue-100'>
      <h2 className='text-amber-950 '><Link href="/">Deepa Studios</Link></h2>
      <div className='flex items-center gap-7 '>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/films">Films</Link>
        <Link href="/service">Service</Link>
      </div>
    </div>
  )
}

export default Navbar
