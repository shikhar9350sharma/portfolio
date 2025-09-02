import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useTheme } from '../Context/context'

const Contact = () => {
  const {themeChanger} = useTheme()
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    toast.success("Message Sent!");
    // Optionally clear form
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={themeChanger}
      />
      <section id='contact' className='mt-4 md:mt-10 mb-10 md:mb-0 h-full md:h-screen mx-4 md:mx-20 flex flex-col text-center md:text-start items-center md:flex-row md:items-center gap-6 md:gap-40 '>
        <div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mt-8 mb-4 capitalize'>Let's connect</h1>
          <p className='text-gray-500 font-semibold text-xl mb-6 max-w-lg'>I'm currently looking for a new opportunity—my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!</p>
          <div className='flex items-center justify-center md:justify-start  gap-2'>
            <div className='rounded-full border p-[2px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200'>
              <a href='https://github.com/shikhar9350sharma/' aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
                <img className='w-10 h-10' loading='lazy' src="github.png" alt="GitHub" />
              </a>
            </div>
            <div className='rounded-full border p-[2px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200'>
              <a href='https://www.linkedin.com/in/shikhar-sharma-110ba2370' aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                <img className='w-10 h-10' loading='lazy' src="linkedin1.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        {/* for black theme  */}
        {themeChanger === 'dark' 
        ?
        <div className=' gap-4 flex flex-col text-left px-4 py-6 w-72 h-96 md:w-96 md:h-96 rounded-xl bg-white/10 hover:shadow-lg hover:shadow-pink-500 transition-all duration-300 '>
          <div>
            <label className="block text-sm font-medium mb-2" >Name</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange}
              placeholder='John'
              className='px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" >Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder='your@email.com'
              className='px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" >Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              id="message"
              rows={4}
              placeholder='Hi!, I would like to say...'
              className='px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white'
            ></textarea>
          </div>
          <button
            onClick={handleSubmit }
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300"
          >
            Send Message
          </button>
        </div> 
        :
        <div className="gap-4 flex flex-col  text-left px-6 py-8 w-72 md:w-96 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:shadow-pink-500 transition-all duration-300">

          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
            <input
              type="text"
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="John"
              className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
            <input
              type="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="your@email.com"
              className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
            <textarea
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              id="message"
              rows={4}
              placeholder="Hi! I would like to say..."
              className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition duration-300"
          >
            Send Message
          </button>
        </div>
        }
      </section>
    </div>
  )
}

export default Contact
