// Contact.js (React Component)
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_glm6yn5',
        'template_9hn9sjj',
        form.current,
        'S5XoCr6MTRQJucR_J'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.current.reset()
        },
        error => {
          console.error('EmailJS Error:', error)
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-[#F0F2F5]' id='contact'>
      <div className='max-w-6xl w-full bg-white p-10 rounded-xl shadow-md'>
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
          Contact
        </h2>

        <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
          <div className='md:w-1/2 w-full mx-auto'>
            <h3
              className='text-center text-left mb-6 md:mt-12'
              style={{
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '36px',
                lineHeight: '40px',
                color: '#A7A7A7',
                letterSpacing: '4px'
              }}
            >
              GET IN TOUCH
            </h3>
            <p className='text-gray-600 mb-4 text-center'>
              Fill in the form to start a conversation.
            </p>
            <p className='text-gray-600 md:text-left text-center md:mx-[120px] md:mb-5 md:mt-5 mb-2'>
              <strong>📍</strong> Dhaka, Bangladesh
            </p>
            <p className='text-gray-600 md:text-left text-center md:mx-[120px] mt-2'>
              <strong>📧</strong> arifulalamszn@gmail.com
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className='md:w-1/2 space-y-4'>
            <input
              name='user_name'
              type='text'
              placeholder='Your Name'
              className='w-full bg-gray-300 text-gray-900  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              required
            />
            <input
              name='user_email'
              type='email'
              placeholder='Your Email'
              className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              required
            />
            <input
              name='subject'
              type='text'
              placeholder='Subject'
              className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            />
            <textarea
              name='message'
              placeholder='Message'
              className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              required
            />
            <button
              type='submit'
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
