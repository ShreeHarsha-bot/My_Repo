import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from'./pages/About'
import Films from'./pages/Films'
import Service from'./pages/Service'
import Contact from'./pages/Contact'
import './index.css'
import { Route, Routes } from 'react-router'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='bg-amber-100 min-h-screen flex flex-col w-screen  ' >
      <Navbar/> 
        <div className='flex grow'>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/films' element={<Films />}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route></Route>
        </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App
