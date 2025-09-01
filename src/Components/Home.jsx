import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div>
      <section id='home' className='h-full md:h-screen flex flex-col md:flex-row items-center gap-14 mx-4 md:mx-20'>
        <div className='my-4 md:my-0 flex flex-col items-center justify-center p-2 text-center md:text-start md:flex-none md:items-start md:justify-start'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-1'>Hello I'm</h1>
          {/* <h1 className='text-5xl font-bold mb-3'>Shikhar</h1> */}
          <div className="text-[2em] md:text-[3em] font-bold">
            <TypeAnimation
              sequence={[
                'Shikhar Sharma',
                1500,
                'Web Developer',
                1200,
                'Full Stack Developer',
                1000,
                'Software Engineer',
                1300
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className='text-gray-500 font-semibold text-xl mb-6'>I’m a passionate full-stack developer who blends technical precision with creative design.<br /> I love building responsive web apps that feel intuitive and engaging.</p>
          <div className='flex items-center justify-start gap-2 mb-6'>
            <div className='rounded-full border p-[4px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200'>
              <a href='https://www.linkedin.com/in/shikhar-sharma-110ba2370' aria-label='LinkedIn Profile' target="_blank" rel="noopener noreferrer">
                <img className='w-14 h-14' loading='lazy' src="linkedin1.png" alt="LinkedIn" />
              </a>
            </div>
            <div className='rounded-full border p-[4px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200'>
              <a href='https://github.com/shikhar9350sharma/' aria-label='GitHub Profile' target="_blank" rel="noopener noreferrer">
                <img className='w-14 h-14' loading='lazy' src="github.png" alt="GitHub" />
              </a>
            </div>
            
          </div>
          <div className='flex items-center gap-6'>
            <a href="mailto:shikharsharma593@gmail.com" aria-label="Mail to me" target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full px-1.5 py-2.5 hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-400'>
                <span className='capitalize text-lg font-bold px-3 py-2'>hire me</span>
              </button>
            </a>
            <a href="/My_Resume.pdf" download="Shikhar_Sharma_Resume.pdf" aria-label="Download CV" >
              <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full px-1.5 py-2.5 hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-400'>
                <span className='rounded-full px-3 py-2 capitalize text-lg font-bold'>download resume</span>
              </button>
            </a>
          </div>
        </div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-60 h-60 p-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50'>
          <div className='rounded-full border border-gray-400 w-56 h-56 bg-gray-300 overflow-hidden'>
            {/* <img   src="myImage1.png" alt="myImg" /> */}
            <img loading='lazy' src="myImage.png" alt="Portrait of Shikhar Sharma" />

          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
