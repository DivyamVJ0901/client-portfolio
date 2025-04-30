import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaDev,
  FaMedium,
  FaInstagram
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineBriefcase } from 'react-icons/hi'
import HeroSectionRunningText from './utils/HeroSectionRunningText'
import profile_pic from '../assets/ProfilePhoto.jpeg'

const socialLinks = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/keshavarora015',
    label: 'GitHub'
  },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/keshavarora015/', label: 'LinkedIn' },
  {icon : <FaInstagram/> , url : 'https://www.instagram.com/keshav_arora_/?hl=en' , label : 'Instagram'},
  { icon: <MdEmail />, url: 'mailto:keshavarora015@gmail.com', label: 'Email' }
]

const Hero = ({ darkMode }) => {
  return (
    <section
      className='min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F0F2F5] dark:bg-[#131313] relative pt-10 '
      id='Hero'
    >
      <div className='bg-[#FEFEFE] dark:bg-[#111725] shadow-[0px_0px_20px_rgba(0,0,0,0.2)] rounded-2xl p-10 md:p-16 relative max-w-6xl w-full'>
        {/* Profile Image */}
        <div className='md:absolute md:-top-10 left-1/2 transform md:-translate-x-1/2 flex justify-center md:mb-0'>
          <img
            src={profile_pic}
            alt='Profile'
            className='w-40 h-40 lg:w-40 lg:h-40 rounded-full border-2 border-gray-500 bg-white'
          />
        </div>

        {/* Spacing below image */}
        <div className='md:mt-20 mt-8'>
          {/* Name */}
          <div
            className='mb-2'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontStyle: 'normal',
              fontWeight: 600,
              color: darkMode ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)',
              fontSize: '30px',
              lineHeight: '36px'
            }}
          >
            KESHAV ARORA
          </div>

          <div className='flex flex-col items-start text-left font-bold gap-2 text-black-600 mb-2'>
            <HeroSectionRunningText darkMode={darkMode} />
          </div>

          <div className='flex items-center text-left gap-2 text-gray-600 mb-6 dark:text-[rgb(156,173,175)]'>
            <HiOutlineLocationMarker darkMode={darkMode} />
            <span
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontStyle: 'normal',
                fontWeight: 400,
                color: darkMode ? 'rgb(156, 163, 175)' : 'rgb(75, 85, 99)',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Gurugram, Haryana
            </span>
          </div>

          {/* Description */}
          <p
            className='text-gray-600 mb-6 w-full text-left'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontStyle: 'normal',
              fontWeight: 400,
              color: darkMode ? 'rgb(156, 173, 175)' : 'rgb(75, 85, 99)',
              fontSize: '15px',
              lineHeight: '23px'
            }}
          >
            Dynamic and Innovative{' '}
            <span className='font-bold text-black-500'>
              Backend Java Developer
            </span>{' '}
            with over <span className='font-bold text-black-500'>4 years</span>{' '}
            of hands-on experience architecting and delivering scalable
            microservices and robust APIs for leading financial and payment
            platforms. Adept in{' '}
            <span className='font-bold text-black-500'>
              Java, Spring Boot, and AWS
            </span>
            , with a proven track record of engineering high-performance,
            secure, and resilient backend solutions. Renowned for optimizing
            system architectures, elevating application performance, and driving
            technical excellence. Eager to bring deep expertise, creative
            problem-solving, and a passion for innovation to a forward-thinking
            software development team.
          </p>

          <div className='flex items-center justify-center gap-3'>
          <div className='flex items-center justify-center'>
            <a
              href='#contact'
              className='bg-blue-500 text-white px-6 py-2 rounded-full mb-6 hover:bg-blue-600 transition flex items-start'
            >
              Get In Touch
            </a>
          </div>

          <div className='flex items-center justify-center'>
            <a
              href="/resume.pdf"
              download
              className='bg-blue-500 text-white px-6 py-2 rounded-full mb-6 hover:bg-blue-600 transition flex items-start'
            >
              Download CV
            </a>
          </div>
          </div>

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
