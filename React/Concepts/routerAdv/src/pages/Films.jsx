import React from 'react'
import MovieList from './MovieList'
import angelfalls from '../assets/Angelfalls.png'
import EOK from '../assets/EchoesOfKitta.png'
import Kanasu from '../assets/Kanasu2.png'
import MIM from '../assets/MIM1.jpeg'
import NK from '../assets/NaaKandanthe.png'
import Maaye from '../assets/Maaye-4.png'




const Films = () => {
  return (
    <div className='mb-20'>
      <h2 className='text-center m-8 text-2xl font-bold underline '>OUR FILMS</h2>
      <div className='flex flex-wrap justify-center gap-4 '>
      <MovieList img={angelfalls} title='Angel Falls' />
      <MovieList img={MIM} title='Midnight in Mysuru'/>
      <MovieList img={Maaye} title='Maaye'/>
      <MovieList img={NK} title='Naa Kandanthe'/>
      <MovieList img={Kanasu} title='Kanasu'/>
      <MovieList img={EOK} title='Echoes of Kitta'/>
      </div>
      
    </div>
  )
}

export default Films
