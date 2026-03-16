import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [movies,setMovies]=useState([])
  useState(()=>{
    axios.get('http://localhost:3000/api/movies')
    .then((response)=>{
      setMovies(response.data)
      console.log(response.data);
      
    })
    .catch((error)=>{
         console.log(error);
    })
  })

  return (
    <div>
      <h1>Deepa Studios</h1>
      <p>Movies:{movies.length}</p>

      {
        movies.map((movies,index)=>{
          <div key={movies.id}>
            <h3>{movies.movieName}</h3> 
            <p>{movies.content}</p>
          </div>
        })
      }
    </div>
  )
}

export default App
