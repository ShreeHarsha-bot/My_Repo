import React, { useState } from 'react'

const Exp3 = () => {
   const [title,subTitle]=useState('');
  const submitBtn=(e)=>{
    e.preventDefault(); 
    console.log('Form submitted by ',title);
    subTitle('') //Matte input box kaali agi iro tara help madatte
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitBtn(e);
      }}>
        <input type="text"
      placeholder='Enter your name' 
      value={title}
      onChange={(e)=>{
        subTitle(e.target.value)
      }}
      />
      <button >Submit</button>
      </form>
    </div>
  )
}

export default Exp3
