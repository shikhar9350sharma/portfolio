import React from 'react'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '../Context/context'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { themeChanger } = useTheme()
  const formRef = useRef()
  const [formData, setFormData] = useState({ username: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.username.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill out all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setIsLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.username,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      toast.success('Message sent successfully! I will get back to you soon.')
      setFormData({ username: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

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
      <section
        id="contact"
        className="mt-4 md:mt-10 mb-10 md:mb-0 h-full md:h-screen mx-4 md:mx-20 flex flex-col text-center md:text-start items-center md:flex-row md:items-center gap-6 md:gap-40"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mt-8 mb-4 capitalize">
            Let's connect
          </h1>
          <p className="text-gray-500 font-semibold text-xl mb-6 max-w-lg">
            I'm currently looking for a new opportunity—my inbox is always open.
            Whether you have a question or just want to say hi, I'll do my best
            to get back to you!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="rounded-full border p-[2px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200">
              <a
                href="https://github.com/shikhar9350sharma/"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-10 h-10" loading="lazy" src="github.png" alt="GitHub" />
              </a>
            </div>
            <div className="rounded-full border p-[2px] border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:scale-105 transition-all duration-200">
              <a
                href="https://www.linkedin.com/in/shikhar-sharma-110ba2370"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-10 h-10" loading="lazy" src="linkedin1.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md flex justify-center">
          {themeChanger === 'dark' ? (
            <div className="gap-4 flex flex-col text-left px-6 py-8 w-72 md:w-96 rounded-xl bg-white/10 shadow-md hover:shadow-xl hover:shadow-pink-500 transition-all duration-300">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="John"
                  autoComplete="name"
                  disabled={isLoading}
                  className="px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={isLoading}
                  className="px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  autoComplete="off"
                  rows={4}
                  placeholder="Hi!, I would like to say..."
                  disabled={isLoading}
                  className="px-2 py-1 rounded-lg bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          ) : (
            <div className="gap-4 flex flex-col text-left px-6 py-8 w-72 md:w-96 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:shadow-pink-500 transition-all duration-300">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="John"
                  disabled={isLoading}
                  className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="your@email.com"
                  disabled={isLoading}
                  className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  autoComplete="off"
                  rows={4}
                  placeholder="Hi! I would like to say..."
                  disabled={isLoading}
                  className="px-3 py-2 rounded-lg bg-gray-100 text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  )
}

export default Contact