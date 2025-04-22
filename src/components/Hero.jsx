import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaDev,
  FaMedium
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineBriefcase } from 'react-icons/hi'
import HeroSectionRunningText from './utils/HeroSectionRunningText'

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
  { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaFacebook />, url: 'https://facebook.com/', label: 'Facebook' },
  { icon: <FaDev />, url: 'https://dev.to/', label: 'Dev' },
  { icon: <FaMedium />, url: 'https://medium.com/', label: 'Medium' },
  { icon: <MdEmail />, url: 'mailto:someone@example.com', label: 'Email' }
]

const Hero = () => {
  return (
    <section
      className='min-h-screen h-[300px] flex flex-col items-center justify-center text-center px-4 bg-[#F0F2F5]  relative pt-20 md:pt-10'
      id='Hero'
    >
      <div className='bg-[#FEFEFE] dark:bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] rounded-2xl p-10 md:p-16 pt-24 relative max-w-6xl w-full'>
        {/* Profile Image */}
        <div className='absolute -top-10 left-1/2 transform -translate-x-1/2'>
          <img
            src='/profile.jpg'
            alt='Profile'
            className='w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-blue-500 object-cover bg-white'
          />
        </div>

        {/* Spacing below image */}
        <div className='mt-20'>
          {/* Name */}
          <div
            className='mb-2'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontStyle: 'normal',
              fontWeight: 400,
              color: 'rgb(75, 85, 99)',
              fontSize: '30px',
              lineHeight: '36px'
            }}
          >
            KESHAV ARORA
          </div>

          <div className='flex flex-col items-start text-left gap-2 text-gray-600 mb-2'>
            <HeroSectionRunningText />
          </div>

          <div className='flex items-center text-left gap-2 text-gray-600 mb-6'>
            <HiOutlineLocationMarker />
            <span>Gurugram, Haryana</span>
          </div>

          {/* Description */}
          <p className='text-gray-600 mb-6 w-full text-left'>
            Senior Software Engineer with over 6 years of experience
            architecting and implementing scalable distributed systems.
            Specialized in building resilient microservices using Node.js while
            maintaining robust performance at scale. Active open-source
            contributor, ranked among top 100 GitHub contributors from
            Bangladesh.
          </p>

          {/* Get in Touch Button */}
          <button className='bg-blue-500 text-white px-6 py-2 rounded-full mb-6 hover:bg-blue-600 transition flex items-start'>
            Get In Touch
          </button>

          {/* Social Icons */}
          <div className='flex justify-center gap-6 text-blue-500 text-2xl'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-600 transition transform hover:scale-125'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
