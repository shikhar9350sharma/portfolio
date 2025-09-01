import React from 'react'
import { useState } from 'react'
import { useTheme } from '../Context/context'
const Navbar = () => {
  const [activeState, setactiveState] = useState('home')
  const {themeChanger, toggleButton} = useTheme()



  return (
    <div>
      <nav className='h-12 sticky z-50  p-2 flex items-center justify-between px-3 md:px-6'>
        <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>Portfolio</h1>
        <ul className='flex items-center justify-end gap-1 md:gap-4 '>
          <li className='p-1.5  text-sm md:text-lg lg:text-xl'>
            <a href="#home"
            onClick={()=> setactiveState('home')} 
            className={`font-semibold transition-colors duration-100 ${activeState === 'home' ? 'text-pink-500': 'hover:text-red-500'}`}
            >Home</a>
          </li>
          <li className='p-1.5  text-sm md:text-lg lg:text-xl'>
            <a href="#about"
            onClick={()=> setactiveState('about')}
             className={`font-semibold transition-colors duration-100 ${activeState === 'about' ? 'text-pink-500': 'hover:text-red-500'}`}
             >About</a>
          </li>
          <li className='p-1.5  text-sm md:text-lg lg:text-xl'>
            <a href="#contact"
            onClick={()=> setactiveState('contact')} 
            className={`font-semibold transition-colors duration-100 ${activeState === 'contact' ? 'text-pink-500': 'hover:text-red-500'}`}
            >Contact</a>
          </li>
          {/* this is the dark mode toggler button  */}
          <li>
            <div className={`w-10 h-7 md:w-14  md:h-7 rounded-full relative ${themeChanger === 'dark' ? 'bg-gray-800' : 'bg-pink-500'}`}>
              <div onClick={toggleButton} className={`absolute border border-white bg-white h-5 w-5 rounded-full left-1 bottom-1 transition-transform ease-out duration-200 ${themeChanger === 'dark' ?'bg-black translate-x-3 md:translate-x-7 ':'bg-white translate-x-0'}`}>
                {themeChanger === 'dark' ? <img src="moon.png" alt="lightimg" /> : <img src="sun.png" alt="darkimg" /> }
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
