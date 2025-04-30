import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaDev,
  FaMedium,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa'


const Footer = ({ darkMode }) => {
  return (
    <footer className='bg-[#F0F2F5] dark:bg-[#131313] py-8'>
      <div className='flex flex-col items-center justify-center space-y-6'>
        <div className='flex space-x-6 text-gray-500 text-xl'>
          <a href='https://github.com/keshavarora015'>
            <FaGithub className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='https://www.linkedin.com/in/keshavarora015/'>
            <FaLinkedin className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='https://www.instagram.com/keshav_arora_/?hl=en'>
            <FaInstagram className='hover:text-blue-600 transition transform hover:scale-125' />
          </a>
          <a href='mailto:keshavarora015@gmail.com'>
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
