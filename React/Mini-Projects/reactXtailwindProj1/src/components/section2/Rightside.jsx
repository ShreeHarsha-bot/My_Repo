import React from 'react'
import Card from './Card '

const Rightside = ({data}) => {
  return (
    <div className=' h-90 w-fit m-25 flex gap-2'>
      {data.map(function(elem)
    {
      return <Card img={elem.img} desc={elem.desc}/>
    }  
    )}
    </div>
  )
}

export default Rightside
