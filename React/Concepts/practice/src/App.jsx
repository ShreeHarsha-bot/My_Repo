import React from 'react'

const App = () => {

 
  return (
    <div className=''>
      <h1 className='text-3xl text-center pt-3 text-white place-content-center'>Application form</h1>
    <div  onMouseMove={(elem)=>{
      console.log(elem.screenX);
      
    }}
    className='bg-amber-50 h-80 w-80'
    ></div>
    </div>
  )
}

export default App
