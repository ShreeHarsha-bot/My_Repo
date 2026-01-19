import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  
  const [task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask =[...task]
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1) 
    setTask(copyTask)
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
      placeholder='Enter Heading here!'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      />
      

     <textarea type="text" 
     className='border-4 rounded-t-xl rounded-b-4xl outline-none px-5 py-5 h-50 font-medium' 
     placeholder='Enter Details here!'
     value={details}
     onChange={(e)=>{
      setDetails(e.target.value)
     }}
     />
     <button
     className='bg-white active:bg-gray-400 active:scale-95 text-black p-1 outline-none font-bold rounded-md h-fit '
     >Add Notes</button>
     </form>
     <div className=' p-10 m-5 border-t-2'>
      <h1 className='text-xl font-bold ml-4 '>Your Notes</h1>
      <div className='flex flex-wrap gap-3 mt-3 h-full overflow-auto'> 
           {task.map(function(elem,idx){
            return <div key={idx} className="relative w-50 bg-cover h-60 rounded-xl text-black bg-white bg-[url('data:image/jpeg;base64,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')]">
              {/* <h2 className='absolute right-0.5 m-2 bg-red-500 rounded-full'><X size={20} strokeWidth={2.75} /></h2> */}
              <button className='absolute right-0.5 m-2 bg-amber-300  active:scale-125 cursor-pointer rounded-full' 
              onClick={()=>{
               deleteNote(idx)
              }}
              ><X size={20} strokeWidth={2.75} /></button>
              <h3 className='pt-3 pr-3 pl-3 pb-1 font-bold'>{elem.title}</h3>
              <p className='pl-3 pr-3 pb-2 font-medium text-gray-500'>{elem.details}</p>
            </div>
           })}
      </div>
     </div>
     </div>
  )
}

export default App
