import React from 'react'

const Project = () => {
  const projects = [
    {
      "img": 'netflix.png',
      "heading": 'Netflix',
      "desc": 'A netflix homepage designed in HTML, CSS only for showing the creativity.',
      "githubUrl": 'https://github.com/shikhar9350sharma/Netflix-Frontend-Clone'
    },
    {
      "img": 'LMS.png',
      "heading": 'Library Management System',
      "desc": 'A fully functional system designed in Python with SQL database connectivity as a college mini-project with teammates.',
      "githubUrl": 'https://github.com/shikhar9350sharma/Library-Management-System'
    },
    {
      "img": 'x.png',
      "heading": 'X(Twitter)',
      "desc": 'Twitter homepage designed in ReactJS, Tailwind CSS only to showcase creativity.',
      "githubUrl": 'https://github.com/shikhar9350sharma/X-Frontend'
    },
    {
      "img": 'spotify.png',
      "heading": 'Spotify',
      "desc": 'Spotify built using HTML and CSS just as a showcase only for large screens.',
      "githubUrl": 'https://github.com/shikhar9350sharma/Spotify-clone'
    },
    {
      "img": 'settingsPage.png',
      "heading": 'Windows 11 Settings',
      "desc": 'Clone of the windows 11 settings for enhancing the frontend skills, created in HTML, CSS only.',
      "githubUrl": 'https://github.com/shikhar9350sharma/Settings-Page'
    },
    {
      "img": 'protonmail.png',
      "heading": 'ProtonMail',
      "desc": 'A Email service provider web application clone with the responsive components (only frontend based)',
      "githubUrl": 'https://github.com/shikhar9350sharma/Proton-Mail-Frontend'
    }
  ]
  const liveProjects = [
  
    {
      "img": 'jpmusic.png',
      "heading": 'JPmusic',
      "desc": 'Fully responsive Music web application for listening songs built in ReactJS, TailwindCSS for frontend and ExpressJS as backend deployed on Appwrite.',
      "liveUrl": 'https://jpmusic.appwrite.network/'
    },
    {
      "img": 'protonmail.png',
      "heading": 'ProtonMail',
      "desc": 'A Email service provider web application clone with the responsive components (only frontend based)',
      "liveUrl": 'https://proton-mail-frontend.appwrite.network'
    }
  ]
  return (
    <div>
      <section id='project' className='h-full flex flex-col p-6 mx-4 md:mx-20'>
        <h1 className='mt-8 mb-4 text-4xl sm:text-5xl md:text-6xl text-center font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent capitalize'>Showcase of work</h1>
        <blockquote className='text-3xl px-6 mt-6 italic'>
          <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            &ldquo;
          </span>
          I have created some projects by my skills and knowledge most of those web pages based on toolkit and a software system built in python. Now, i'm learning python's frameworks and libraries Flask, Django for making more interactive applications.
          <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            &rdquo;
          </span>
        </blockquote>
        <div className='text-3xl px-6 py-5 mt-6 md:mt-24 italic  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((pro, index)=>(
            <div key={index} className='relative flex flex-col items-center justify-evenly max-w-xl h-96 rounded-lg shadow-lg shadow-pink-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group '>
              <div className='w-auto h-36 m-2 rounded-lg overflow-hidden'>
                {/* image  */}
                <img className='w-full h-full object-contain overflow-auto' loading='lazy' src={pro.img} alt={pro.heading} />
              </div>
              <h1 className='text-center font-bold'>{pro.heading}</h1>
              <p className='text-center text-sm md:text-lg font-semibold px-1'>{pro.desc}</p>
              <div className='bg-white/10 backdrop-blur-sm absolute top-0 rounded-lg w-full h-0 group-hover:h-96 transition-all duration-300 flex items-center justify-center'>
                <div className=' p-2 opacity-0 group-hover:opacity-80 transition-all duration-300'>
                  {/* github image  */}
                  <a href={pro.githubUrl} target="_blank" rel="noopener noreferrer">
                    <img className='w-20 h-20' loading='lazy' src="github.png" alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className='mt-8 md:mt-24 mb-4  text-5xl text-center font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent capitalize'>Live projects</h3>
         <div className='text-3xl px-6 py-5 mt-6 italic flex flex-col md:flex-row items-center justify-center gap-6'>
          {liveProjects.map((livePro, index)=>(
            <div key={index} className='relative flex flex-col items-center justify-evenly max-w-sm h-96 rounded-lg shadow-lg shadow-pink-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group '>
              <div className='w-auto h-36 m-2 rounded-lg overflow-hidden'>
                {/* image  */}
                <img className='w-full h-full object-contain overflow-auto' loading='lazy' src={livePro.img} alt={livePro.heading} />
              </div>
              <h1 className='text-center font-bold'>{livePro.heading}</h1>
              <p className='text-center text-sm md:text-lg font-semibold px-1'>{livePro.desc}</p>
              <div className='bg-white/10 backdrop-blur-sm absolute top-0 rounded-lg w-full h-0 group-hover:h-96 transition-all duration-300 flex items-center justify-center'>
                <div className=' p-2 opacity-0 group-hover:opacity-80 transition-all duration-300'>
                  {/* github image  */}
                  <a href={livePro.liveUrl} target="_blank" rel="noopener noreferrer">
                    <img className='w-20 h-20' loading='lazy' src="live.png" alt="LiveLink" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Project
