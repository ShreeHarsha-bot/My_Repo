import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Loader } from 'lucide-react';


const App = () => {
  const [userData,setUserData]=useState([])
  const [index,setIndex]=useState(1)

  const getdata = async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index+1}`)
    setUserData(response.data)
    console.log(response.data);  
  }
  

  useEffect(function(){
    getdata()
  },[index])

  let printUserData=<h3 className='text-gray-500 font-bold text-9xl absolute top-1/2 left-1/2 translate-x-1/2 '><Loader className="animate-spin [animation-duration:2s]" /></h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
       <a href={elem.url} target="_blank">
         <div className='h-40 w-44  bg-amber-50 rounded-xl overflow-hidden'>
        <img src={elem.download_url} className='h-full w-full object-cover ' />
      </div>
      <h2 className='font-bold '>{elem.author}</h2>
       </a>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen p-5 overflow-auto text-white '>
  
      <button 
      onClick={getdata}
      className='bg-green-600 p-2 rounded font-bold active:scale-90 m-3 '>
        Get Data
        
      </button>

      <div className='flex flex-wrap gap-4 '>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-6 gap-4 font-semibold'>
        <button className='bg-amber-300 text-black rounded px-4 py-2 m-1 cursor-pointer active:scale-90'
        onClick={()=>{
          if (index>1) {
            setUserData([])
             setIndex(index-1)
          }
        }}
        >Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-amber-300 text-black rounded px-4 py-2 m-1 cursor-pointer active:scale-90'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
