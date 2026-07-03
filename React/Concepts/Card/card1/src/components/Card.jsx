import React from 'react'
import {User,CircleCheck} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
        <div >
             <img src={props.img} alt="" />
             <h1>{props.name}</h1>
             <p>{props.role}</p>
        </div> 
        <div className='bottom'>
           <div className='but'>
              <span><User size={15}/>{props.profiles}</span>
           <span><CircleCheck size={15}/>{props.tasks}</span>
           </div>
            <button>Follow + </button>
        </div>
    </div>
  )
}

export default Card
