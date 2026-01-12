import React from 'react'
import Card from './Card '

const Rightside = ({data}) => {
  return (
    <div id='right' className=' h-90 w-[90vw] m-20 flex gap-2 overflow-x-auto'>
      {data.map(function(elem)
    {
      return <Card img={elem.img} desc={elem.desc}/>
    }  
    )}
    </div>
  )
}

export default Rightside
