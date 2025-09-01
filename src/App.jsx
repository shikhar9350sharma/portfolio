import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='scroll-smooth'>
      <div className='sticky top-0 z-50  bg-white/10 backdrop-blur-md'><Navbar/></div>
      <Home />
      <About />
      <Project/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
