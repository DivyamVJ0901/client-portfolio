import React from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FaCodeBranch } from 'react-icons/fa'
import { FaFlag, FaBuilding } from 'react-icons/fa'
import BharatPe from '../assets/bharatpe.png'
import Falcon from '../assets/Falcon.jpeg'
import Innovatiview from '../assets/Innovative.jpeg'
import Mobikwik from '../assets/mobikwik.png'

const experiences = [
  {
    year: 'Nov 2024 - Present',
    company: 'BharatPe',
    icon: (
      <img
        src={BharatPe}
        alt='BharatPe Logo'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    title: 'Software Developer Engineer - II',
    description: (
      <ul className='list-disc list-inside space-y-1'>
        <li>
          <span className='font-bold text-black-500'>
            Engineered a robust and scalable Geo-Validation Engine
          </span>{' '}
          for Swipe Onboarding, elevating merchant location precision by{' '}
          <span className='font-bold text-black-500'>35%</span> and{' '}
          <span className='font-bold text-black-500'>
            cutting down manual verification effort by 40%
          </span>
          , which significantly accelerated the onboarding lifecycle.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Orchestrated key advancements in the UKYC Portal
          </span>
          , seamlessly integrating delivery address intelligence and building a
          unified interface for PAID Swipe applications —{' '}
          <span className='font-bold text-black-500'>
            reducing verification delays by 50%
          </span>{' '}
          and enhancing approval consistency and accuracy.
        </li>
      </ul>
    )
  },
  {
    year: 'Sept 2023 - Nov 2024',
    company: 'Falcon Financial Services',
    icon: (
      <img
        src={Falcon}
        alt='Falcon Logo'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    title: 'Senior Software Engineer',
    description: (
      <ul className='list-disc list-inside space-y-1'>
        <li>
          <span className='font-bold text-black-500'>
            Architected a serverless microservices ecosystem
          </span>{' '}
          leveraging AWS (SNS, SQS, Lambda), resulting in a{' '}
          <span className='font-bold text-black-500'>40% increase</span> in data
          processing efficiency and effortlessly scaling to process over{' '}
          <span className='font-bold text-black-500'>
            1M+ daily Kafka events
          </span>
          .
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Implemented secure authentication & authorization flows
          </span>{' '}
          using Keycloak, safeguarding access for{' '}
          <span className='font-bold text-black-500'>100,000+ users</span>{' '}
          across the platform.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Designed and maintained critical credit card modules
          </span>{' '}
          including Account, Card, EMI, Transactions, and Notifications,
          ensuring{' '}
          <span className='font-bold text-black-500'>high availability</span>{' '}
          and smooth experiences for over{' '}
          <span className='font-bold text-black-500'>100K+ customers</span>.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Automated third-party reporting pipelines
          </span>{' '}
          using AWS Lambda triggers, achieving an{' '}
          <span className='font-bold text-black-500'>80% reduction</span> in
          manual workload and significantly enhancing data accuracy.
        </li>
      </ul>
    )
  },
  {
    year: 'Nov 2022 - Sept 2023',
    company: 'Innovatiview India Pvt. Ltd.',
    icon: (
      <img
        src={Innovatiview}
        alt='Innovatiview Logo'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    title: 'Founding Member & SDE',
    description: (
      <ul className='list-disc list-inside space-y-1'>
        <li>
          <span className='font-bold text-black-500'>
            Engineered “TrackView”
          </span>
          , an advanced Smart GPS Locking Solution using Java & Spring Boot,
          delivering a{' '}
          <span className='font-bold text-black-500'>90% boost</span> in
          location tracking accuracy across logistics operations.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Enhanced user engagement by 30%
          </span>{' '}
          by architecting an intelligent event-driven SMS service, improving
          communication efficiency and user retention.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Designed and deployed a robust trip reporting service
          </span>
          , enabling data-backed decision-making with a{' '}
          <span className='font-bold text-black-500'>15% improvement</span> in
          insights and a
          <span className='font-bold text-black-500'>10% gain</span> in asset
          monitoring precision.
        </li>
      </ul>
    )
  },
  {
    year: 'Jul 2021 - Nov 2022',
    company: 'Mobikwik',
    icon: (
      <img
        src={Mobikwik}
        alt='Mobikwik Logo'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    title: 'Software Developer Engineer - I',
    description: (
      <ul className='list-disc list-inside space-y-1'>
        <li>
          <span className='font-bold text-black-500'>
            Optimized backend architecture
          </span>{' '}
          across core Payment Modules
          <span className='font-bold text-black-500'>
            {' '}
            (Wallet, IMPS, History, and Help Sections)
          </span>
          , enhancing transaction reliability and support workflows.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Engineered an intelligent auto-switching mechanism
          </span>{' '}
          to mitigate bank delays, resulting in a{' '}
          <span className='font-bold text-black-500'>15% uplift</span> in user
          retention and a
          <span className='font-bold text-black-500'>25% drop</span> in user
          complaints.
        </li>
        <li>
          <span className='font-bold text-black-500'>
            Led the development of end-to-end automation test suites
          </span>
          , accelerating QA cycles, boosting team productivity by{' '}
          <span className='font-bold text-black-500'>70%</span>, and
          significantly reducing manual intervention errors.
        </li>
      </ul>
    )
  }
]

const Experience = ({ darkMode }) => {
  return (
    <section
      className='min-h-screen py-4 px-4 bg-[#F0F2F5] dark:bg-[#131313]'
      id='experience'
    >
      <div className='max-w-6xl mx-auto'>
        <h2
          className='text-center mb-12 uppercase '
          style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            color: darkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
            letterSpacing: '3px'
          }}
        >
          Experience
        </h2>
        <div className='bg-[#FEFEFE] dark:bg-[#111725] shadow-[0px_0px_20px_rgba(0,0,0,0.2)] rounded-2xl p-10 space-y-10'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative pl-10'>
              <div className='absolute left-0 top-1 text-blue-500 text-lg'>
                {exp.icon}
              </div>
              <div className='text-gray-700 font-semibold dark:text-[rgb(229,225,235)]'>{exp.year}</div>
              <div className='text-xl font-bold text-gray-800 mt-1 dark:text-[rgb(229,231,235)]'>
                {exp.company}
              </div>
              <div className='text-md font-semibold text-blue-600 mb-2'>
                {exp.title}
              </div>
              <p className='text-gray-600 dark:text-[rgb(156,173,175)]'>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
