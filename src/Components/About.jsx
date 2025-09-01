import React from 'react'

const About = () => {
  return (
    <div>
      <section id='about' className='h-full md:h-screen flex flex-col p-2 mx-4 md:mx-20 '>
        <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mt-8 mb-4'>About Me</h1>
        <blockquote className='text-3xl px-6 mt-6 italic'>
          <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            &ldquo;
          </span>
          I’m a full-stack web developer who thrives at the intersection of logic and creativity. I believe in clean code, bold design, and the power of iteration.
          <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            &rdquo;
          </span>
          <h2 className=''>My toolkit <strong className=''>:-</strong></h2>
        </blockquote>
        <div className='text-xl px-6 py-5 mt-6 italic  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          <div className='font-bold  bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 rounded-full shadow-lg shadow-pink-400  text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="react.png" alt="ReactJS logo" /> ReactJS
          </div>


          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 shadow-lg shadow-pink-400  text-center p-2 uppercase flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="html.png" alt="HTML logo" /> HTML
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500  shadow-lg shadow-pink-400  text-center p-2 uppercase flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="css.png" alt="CSS logo" /> CSS
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500  shadow-lg shadow-pink-400  text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="node.png" alt="NodeJS logo" /> NodeJS
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500  shadow-lg shadow-pink-400  text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="express.png" alt="ExpressJS logo" /> ExpressJS
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500  shadow-lg shadow-pink-400  text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="tailwind.png" alt="Tailwind CSS logo" /> Tailwind CSS
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500  shadow-lg shadow-pink-400  text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="mongodb.png" alt="Mongodb logo" /> MongoDB
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 shadow-lg shadow-pink-400  text-center p-2 uppercase flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="sql.png" alt="SQL logo" /> SQL
          </div>

          <div className='font-bold rounded-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 shadow-lg shadow-pink-400 text-center p-2 capitalize flex items-center justify-center gap-1'>
            <img className='w-10 h-10' loading='lazy' src="python.png" alt="Python logo" /> Python
          </div>

        </div>

      </section>
    </div>
  )
}

export default About
