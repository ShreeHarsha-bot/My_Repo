import React from 'react'
import Foot1 from '../pages/Foot1'

const Footer = () => {
  return (
    <div className=' w-screen p-2 flex flex-col bottom-0  justify-center items-center bg-amber-500'>
      <Foot1/>
       <p className='flex justify-center items-center text-center pt-2 font-bold leading-10 tracking-wider'>Copyright © Deepa Studio. All Rights Reserved | <span className='text-red-800 ml-1'>Designed by Bot.</span></p>
    </div>
  )
}

export default Footer
