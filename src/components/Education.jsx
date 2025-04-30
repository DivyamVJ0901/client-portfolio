import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import clg_img from '../assets/J.C._Bose_University_of_Science_and_Technology,_YMCA_logo.png'
import model_school from '../assets/model_scl.jpeg'
import rosery_school from '../assets/SchoolLogo.jpg'

const educationData = [
  {
    icon: (
      <img
        src={clg_img}
        alt='College Image'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    year: '2017 - 2021',
    institute: 'J.C. Bose University of Science and Technology, YMCA ',
    degree: 'B.Tech in Computer Engineering',
    details: [
      'CGPA : 8.43 out of 10.00',
      'Department: Computer Science & Engineering'
    ]
  },
  {
    icon: (
      <img
        src={model_school}
        alt='Model Image'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    year: '2016 - 2017',
    institute: 'Model School, Rohtak, Haryana',
    qualification: 'Class 12th (Senior Secondary)',
    details: ['Percentage: 82%', 'Board: Central Board of Secondary Education']
  },
  {
    icon: (
      <img
        src={rosery_school}
        alt='Rosery Image'
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    ),
    year: '2014 - 2015',
    institute: 'Scholar Rosary, Rohtak, Haryana',
    qualification: 'Class 10th (Secondary)',
    details: [
      'CGPA: 8.80 out of 10.00',
      'Board: Central Board of Secondary Education'
    ]
  }
]

const Education = ({ darkMode }) => {
  return (
    <section
      className='py-12 px-4 bg-[#F0F2F5] dark:bg-[#131313]'
      id='education'
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
          Education
        </h2>
        <div className='bg-[#FEFEFE] dark:bg-[#111725] rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] p-8'>
          <div className='relative pl-6 border-l-2 border-gray-300 space-y-10'>
            {educationData.map((edu, idx) => (
              <div key={idx} className='flex items-start gap-6 relative'>
                <div className='absolute -left-[14px] bg-white'>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full shadow-md'>
                    {edu.icon}
                  </div>
                </div>

                <div className='ml-4'>
                  <p className='text-sm text-gray-500 dark:text-[rgb(229,231,235)]'>{edu.year}</p>
                  <h3
                    className='text-[18px] leading-[22px] font-semibold text-[rgba(0,0,0,0.85)] dark:text-[rgb(229,231,235)]'
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                    }}
                  >
                    {edu.institute}
                  </h3>
                  <p
                    className='text-[16px] leading-[28px] font-semibold text-[rgba(0,0,0,0.85)] dark:text-[rgb(229,220,200)]'
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                    }}
                  >
                    {edu.degree || edu.qualification}
                  </p>
                  <ul
                    className='list-disc ml-5 text-[14px] leading-[20px] font-semibold text-[rgb(107,114,128)] mt-1'
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                    }}
                  >
                    {edu.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
