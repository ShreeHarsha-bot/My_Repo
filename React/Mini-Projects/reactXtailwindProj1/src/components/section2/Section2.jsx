import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

const card=[
  {
    img:'https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:'essitatibus ipsa incidunt minus vel dolores deleniti distinctio? ',
  },
  {
      img:'',
    desc:'',
  },
  {
    img:'',
    desc:''
  }
];

const Section2 = () => {
  return (
    <div className='h-screen w-full flex'>
      <Leftside/>
      <Rightside />
    </div>
  )
}

export default Section2
