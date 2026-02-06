import React from 'react'

const LensRent = ({data}) => {
  return (
    <div>
      <div className=' h-55 w-full  mt-10 '>
        <img src={data.img3}
        className='h-40  w-50 object-cover p-2  hover:scale-105' />
        <h3 className='font-bold flex justify-center text-zinc-950 pt-1'>{data.desc3}</h3>
      </div>
    </div>
  )
}

export default LensRent
