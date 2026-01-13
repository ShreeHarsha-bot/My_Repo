import React, { useState } from 'react'

const Exp2 = () => {

let [num,setNum]=useState(0);
function btnClick(){
    setNum(prev=>(prev+1)); //num+1
    setNum(prev=>(prev+1));//num+1
    setNum(prev=>(prev+1)); //num+1 this will not work here
}
  return (
    <div>
        <h1>{num}</h1>
    <button onClick={btnClick}>Click</button>  
    </div>
  )
}

export default Exp2
