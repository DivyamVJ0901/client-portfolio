import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { HiOutlineBriefcase } from 'react-icons/hi'

const HeroSectionRunningText = ({darkMode}) => {
  return (
    <div
      className='flex items-center gap-2 mb-1 mt-4'
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        fontWeight: 400,
        fontStyle: 'normal',
        color: darkMode ? 'rgb(156, 163, 175)' : 'rgb(75, 85, 99)',
        fontSize: '17px',
        lineHeight: '36px'
      }}
    >
      <HiOutlineBriefcase className='text-[17px] flex items-center' />
      <span>
        <Typewriter
          words={["Software Development Engineer - II" , "FinTech" , "Backend Java Developer"]}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={75}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  )
}

export default HeroSectionRunningText
