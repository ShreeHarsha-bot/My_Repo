import React, { useEffect, useState } from 'react'

const Pra1 = () => {
   const [a,setA] =useState(0);
   const [b,setB] =useState(0);
    function aChanging(){
      console.log("A alliro value change aytaaade...");
    }
    function bChanging(){
      console.log("B alliro value change aytaaade...");
    }

    useEffect(function(){
        aChanging()
    //  console.log("Only occurs when a value is changed");
    },[a])

    useEffect(function(){
        bChanging()
    //  console.log("Only occurs when b value is changed");
    },[b])


  return (
    <div>
        <h1>{a}</h1>
      <button
      onClick={()=>{
        setA(a+1)    
      }}
      >Click A</button>
      <h1>{b}</h1>
      <button
       onClick={()=>{
        setB(b-1)    
      }}
      >Click B</button>
    </div>
  )
}

export default Pra1
