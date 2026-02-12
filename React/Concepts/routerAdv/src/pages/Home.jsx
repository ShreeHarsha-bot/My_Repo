import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between '>
        <p className='font-bold text-4xl m-6 p-18  rounded-full leading-snug  tracking-wide hover:scale-103 hover:cursor-pointer' 
        >  &nbsp;
Realise the passion,<br /> come a full circle,<br /> be a child again, <br />look at creating an ideal world of cinema
          <p className='text-red-800 '>&nbsp;&nbsp;&nbsp;Be a cinema!</p>
        </p>
        <img 
        className='m-5 p-3 rounded-full object-cover pb-10 hover:skew-x-2 cursor-pointer '
        src="https://media.istockphoto.com/id/537281712/photo/director-chair-movie-clapper-and-megaphone-in-the-volumetric-li.jpg?s=612x612&w=0&k=20&c=cTD0TEx7ZzJ6tZMvWT2GQHUnLZ1fbwGcTDkVseVj_t8=" alt="" />
    </div>
  )
}

export default Home
