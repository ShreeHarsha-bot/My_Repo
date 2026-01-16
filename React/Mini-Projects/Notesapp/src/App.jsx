import React, { useState } from 'react'

const App = () => {
  const [heading,setHeading]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Submitted");
    
  }

  return (
    <div className='h-full bg-black text-white flex-col'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}  
      className='flex-col flex gap-4 pt-30 pl-50 pr-50 ' >
      <input type="text" 
      className='border-4 rounded-b-xl rounded-t-xl outline-none px-15 py-5 h-10 font-bold'  
      placeholder='Enter Heading'/>
      
     <textarea type="text" 
     className='border-4 rounded-t-xl rounded-b-4xl outline-none px-5 py-5 h-50 font-medium' 
     placeholder='Enter Details'
     />
     <button
     className='bg-white text-black p-1 outline-none font-bold rounded-md h-fit'
     >Add Notes</button>
     </form>
     <div className=' p-10 pl-50 m-5 border-t-2'>
      <h1 className='text-xl font-bold ml-4 '>Your Notes</h1>
      <div className='flex flex-wrapm gap-8 mt-3 h-full overflow-auto'> 
           <div className="h-40 w-40 rounded-xl  bg-white"></div>
           <div className="h-40 w-40 rounded-xl  bg-white"></div>
           <div className="h-40 w-40 rounded-xl  bg-white"></div>
           <div className="h-40 w-40 rounded-xl  bg-white"></div>
          
      </div>
     </div>
     </div>
  )
}

export default App
