import React from 'react'

const CameraRent = ({data}) => {
  return (
    <div>
       <div className=' h-60 w-80 hover:scale-85 rounded-2xl '>
        <img src={data.img2}
        className='h-40 p-5 w-50 object-cover rounded-full ml-15 hover:scale-105' />
        <h3 className='font-bold flex justify-center m-5 text-fuchsia-950'>{data.desc2}</h3>
      </div>
    </div>
  )
}

export default CameraRent
