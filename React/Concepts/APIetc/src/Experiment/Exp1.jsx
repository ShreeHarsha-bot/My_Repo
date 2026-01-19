//using fetch 


import React from 'react'

const Exp1 = () => {
    const getData=async()=>{    //async and await helps to wait until api fetch the data
        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(response);
       // console.log(response.json());//it will also returns in promise so we should use await her too
      const data =await response.json()
        console.log(data);
    
    }
  return (
    <div>
        <h1>Using fetch</h1>
      <button onClick={getData}>Click Me</button>
    </div>
  )
}

export default Exp1
