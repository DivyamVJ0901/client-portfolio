import React from 'react'

const SkillCard = ({ icon, title, darkMode }) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-[#FEFEFE] dark:bg-[#111725] rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.5)] transition duration-300'>
      <img src={icon} alt={title} className='w-28 h-28' />
      <h3
        className='text-lg text-center font-semibold text-gray-600'
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontStyle: 'normal',
          fontWeight: 500,
          color: darkMode ? 'rgb(156, 173, 175)' : 'rgb(75, 85, 99)',
          fontSize: '17px',
          lineHeight: '22px'
        }}
      >
        {title}
      </h3>
    </div>
  )
}

export default SkillCard
