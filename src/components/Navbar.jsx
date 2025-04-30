import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa6'
import {
  MdTerminal,
  MdCastForEducation,
  MdChat,
  MdDarkMode,
  MdLightMode
} from 'react-icons/md'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className='bg-[#FEFEFE] dark:bg-[#111725] shadow-[2px] w-full px-6 py-4 flex items-center justify-between h-[60px]'>
      <div
        className='text-xl md:text-md font-semibold text-gray-900'
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontStyle: 'normal',
          fontWeight: 500,
          color: darkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgb(0,0,0,0.85)',
          fontSize: '16px',
          lineHeight: '48px'
        }}
      >
        Keshav Arora
      </div>

      <ul className='hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-600 flex-1 justify-center'>
        {[
          { icon: <FaRegUser />, name: 'About', to: 'about' },
          { icon: <MdTerminal />, name: 'Skills', to: 'skills' },
          {
            icon: <PiSuitcaseSimpleBold />,
            name: 'Experience',
            to: 'experience'
          },
          { icon: <MdCastForEducation />, name: 'Education', to: 'education' },
          { icon: <MdChat />, name: 'Contact', to: 'contact' }
        ].map((item, index) => (
          <li
            key={index}
            className='relative group cursor-pointer hover:text-blue-500 transition'
          >
            <Link
              to={item.to}
              duration={500}
              offset={-50}
              className='flex items-center gap-2'
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontStyle: 'normal',
                fontWeight: 400,
                color: darkMode ? 'rgb(255, 255, 255,0.85)' : 'rgb(0,0,0,0.85)',
                fontSize: '14px',
                lineHeight: '48px'
              }}
            >
              {item.icon}
              {item.name}
            </Link>
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full' />
          </li>
        ))}
      </ul>

      <button
        onClick={toggleDarkMode}
        className='ml-4 p-2 rounded-full bg-[#F0F2F5] dark:bg-[#131313] text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition'
      >
        {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
      </button>
    </nav>
  )
}

export default Navbar
