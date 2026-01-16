import React, { useState } from 'react'

const Exp3 = () => {
   const [title,setTitle]=useState('');
  const submitBtn=(e)=>{
    e.preventDefault(); 
    console.log('Form submitted by ',title);
    setTitle('') //Matte input box kaali agi iro tara help madatte
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
        setTitle(e.target.value)
      }}
      />
      <button >Submit</button>
      </form>
    </div>
  )
}

export default Exp3
