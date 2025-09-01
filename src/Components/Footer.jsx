import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" aria-label="Site footer" className="mt-40 px-6 py-4 border-t border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <div className="font-semibold text-center">~shikhar sharma ♥️</div>
        <div className="font-semibold text-center">&copy; {new Date().getFullYear()} All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
