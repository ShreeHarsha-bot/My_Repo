import React from 'react'

const Rent1 = (props) => {
  return (
    <div className='m-18'>
      <div className='bg-gray-300 h-80 w-80 hover:scale-120 rounded-2xl '>
        <img src={props.img}
        className='h-40 p-5 w-50 object-cover rounded-full ml-15 hover:scale-105' />
        <h3 className='font-bold flex justify-center m-5 text-fuchsia-950'>{props.rentTitle}</h3>
        <h4 className='font-semibold flex justify-center items-center ml-5'>{props.desc1}</h4>
        <h4 className='font-semibold flex justify-center '>{props.cont1}</h4>
      </div>
    </div>
  )
}

export default Rent1
