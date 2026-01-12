import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

const card=[
  {
    img:'https://w0.peakpx.com/wallpaper/380/408/HD-wallpaper-batman-black-vertical-drawing-portrait-display-red.jpg',
    desc:'You either die a hero, or live long enough to see yourself become the villain.',
  },
  {
      img:'https://wallpapercave.com/wp/wp13397473.jpg',
    desc:'Fear is my ally.',
  },
  {
    img:'https://wallpapercave.com/wp/wp11590779.jpg',
    desc:'I am whatever Gotham needs me to be.'
  },
  {
    img:'https://images.hdqwalls.com/download/legendary-the-batman-4k-aj-1125x2436.jpg',
    desc:'And You Never Have To.'
  }
];

const Section2 = () => {
  return (
    
    <div className='h-screen w-full flex bg-cyan-100'>
    
      <Leftside/>
      <Rightside data={card} />
    </div>
  )
}

export default Section2
