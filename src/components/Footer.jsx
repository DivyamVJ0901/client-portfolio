import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaDev,
  FaMedium,
  FaEnvelope
} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-[#F0F2F5] py-8'>
      <div className='flex flex-col items-center justify-center space-y-6'>
        <div className='flex space-x-6 text-gray-500 text-xl'>
          <a href='#'>
            <FaGithub className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaTwitter className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaLinkedin className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaFacebook className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaDev className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaMedium className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='#'>
            <FaEnvelope className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
        </div>

        <p className='text-sm text-gray-400 tracking-wider'>
          &copy; 2025 Keshav Arora
        </p>
      </div>
    </footer>
  )
}

export default Footer
