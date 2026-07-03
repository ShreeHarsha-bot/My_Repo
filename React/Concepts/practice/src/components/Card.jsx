import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="" />
        <h1 className='h1'>{props.name}</h1>
      <p> Officia similique ab officiis, saepe vero exercitationem itaque? Placeat ducimus expedita cumque officia excepturi, quas minus, eligendi consectetur itaque laborum eos veniam.</p>
      <button>View</button>
    </div>
  )
}

export default Card
