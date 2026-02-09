import React from 'react'

const MovieList = (props) => {
  return (
    
      <div className='h-fit w-70 m-10  rounded-xl hover:scale-120  '>
        <div className='relative'> 
          <a>
            <img src={props.img} 
            className=' object-contain p-3 rounded-3xl rounded-t-4xl'
            />
             <h3 className='absolute text-center m-1 p-1 font-extralight  bg-amber-300 w-full rounded-4xl border-b-4 font-mono '>{props.title}</h3>
          </a>
      </div>
      </div>
    
  )
}

export default MovieList
