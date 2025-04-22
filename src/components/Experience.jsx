import React from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FaCodeBranch } from 'react-icons/fa'
import { FaFlag, FaBuilding } from 'react-icons/fa'

const experiences = [
  {
    year: '2024 - Present',
    company: 'BharatPe',
    icon: <FaCodeBranch />,
    title: 'Software Engineer IV',
    description: `At RoBenDevs, I am working with cutting-edge martech solutions, focusing on critical data transformation projects and automated messaging systems. My role involves developing ETL processes using serverless applications, implementing LLM-based conversational systems with Twilio integration, and enhancing our in-house CRM capabilities. I contribute to building scalable solutions that improve operational efficiency and automate complex business processes.`
  },
  {
    year: '2023 - 2024',
    company: 'Miaki',
    icon: <FaFlag />,
    title: 'Senior Software Engineer',
    description: `I worked for Grameenphone as an augmented resource of Miaki. Within Grameenphone, I was a crucial part of the core Notification system and InApp team where I was actively involved in a significant sub-leadership capacity, contributing my skills to serve a customer base of millions. My role encompassed several crucial responsibilities, including system performance optimization, user experience enhancement, and close collaboration with a dynamic team to effectively address the ever-evolving communication requirements of the telecommunications industry. I also worked closely with the DevOps teams to facilitate seamless system deployment and management, ensuring the robustness and reliability of the Notification system.`
  },
  {
    year: '2021 - 2023',
    company: 'Monstarlab Bangladesh',
    icon: <FaBuilding />,
    title: 'Backend Engineer II',
    description: `I have worked on a variety of projects during my time here, each demanding a distinct strategy and approach. I held a versatile role within both the PHP and Node.js teams, making active contributions to the development of diverse server-side logic. While my primary role focused on backend processes, I occasionally extended my skills to front-end tasks to provide comprehensive and effective solutions.`
  },
  {
    year: '2021 - 2023',
    company: 'Monstarlab Bangladesh',
    icon: <FaBuilding />,
    title: 'Backend Engineer II',
    description: `I have worked on a variety of projects during my time here, each demanding a distinct strategy and approach. I held a versatile role within both the PHP and Node.js teams, making active contributions to the development of diverse server-side logic. While my primary role focused on backend processes, I occasionally extended my skills to front-end tasks to provide comprehensive and effective solutions.`
  }
]

const Experience = () => {
  return (
    <section className='min-h-screen py-20 px-4 bg-[#F0F2F5]' id='experience'>
      <div className='max-w-6xl mx-auto'>
      <h2
          className='text-center mb-12 uppercase '
          style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            color: 'rgb(107, 114, 128)',
            letterSpacing: '3px' 
          }}
        >
          Experience
        </h2>
        <div className='bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] rounded-2xl p-10 space-y-10'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative pl-10'>
              <div className='absolute left-0 top-1 text-blue-500 text-lg'>
                {exp.icon}
                
              </div>
              <div className='text-gray-700 font-semibold'>{exp.year}</div>
              <div className='text-xl font-bold text-gray-800 mt-1'>{exp.company}</div>
              <div className='text-md font-semibold text-blue-600 mb-2'>{exp.title}</div>
              <p className='text-gray-600'>{exp.description}</p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
