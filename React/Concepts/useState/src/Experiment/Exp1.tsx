import React, { useState } from 'react'

const Exp1 = () => {
 
 let [num,setNum]=useState(0);
 
   function Increase(){
     setNum(num+1);
   }
   function Decrease(){
     setNum(num-1);
   }
 
   return (
     <div>
       <h1>{num}</h1>
       <button onClick={Increase}>Increase</button>
       <button onClick={Decrease}>Decrease</button>
     </div>
   )
}

export default Exp1
