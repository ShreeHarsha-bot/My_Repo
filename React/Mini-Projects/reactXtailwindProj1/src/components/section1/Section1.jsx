import React from 'react'
import SignIn from './SignIn'

const Section1 = () => {
  return (
    <div className='h-20 w-full bg-blue-950 flex gap-5'>
                <img className='h-15 rounded-full ml-5  mt-2.5'src="https://tse2.mm.bing.net/th/id/OIP.8aNdtVicdGlWSSICyG3WowHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" />
      <nav className='flex items-center px-6 py-4 text-white font-semibold'>
     <ul className="flex gap-30 ml-20 ">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>       
 </nav>
      <ul className="flex gap-6 ml-70">
        <h1 className='  mt-7 text-white font-bold  hover:text-sky-500 '>Login</h1>
      <SignIn/>
      </ul>
    </div>
  )
}

export default Section1
