import React from 'react'
import SkillCard from './SkillCard'

const skills = [
  { title: 'Node.js', icon: '/icons/nodejs.png' },
  { title: 'Express.js', icon: '/icons/express.png' },
  { title: 'JavaScript', icon: '/icons/javascript.png' },
  { title: 'TypeScript', icon: '/icons/typescript.png' },
  { title: 'Nest.js', icon: '/icons/nestjs.png' },
  { title: 'PHP', icon: '/icons/php.png' },
  { title: 'Laravel', icon: '/icons/laravel.png' },
  { title: 'MySQL', icon: '/icons/mysql.png' },
  { title: 'PostgreSQL', icon: '/icons/postgresql.png' },
  { title: 'Cassandra', icon: '/icons/cassandra.png' },
  { title: 'Git', icon: '/icons/git.png' },
  { title: 'Docker', icon: '/icons/docker.png' },
  { title: 'RabbitMQ', icon: '/icons/rabbitmq.png' },
  { title: 'React.js', icon: '/icons/reactjs.png' },
  { title: 'Tailwind', icon: '/icons/tailwind.png' }
]

const Skills = () => {
  return (
    <section className='py-16 bg-[#F0F2F5]' id='skills'>
      <div className='container mx-auto px-4 '>
        <h2
          className='text-center mb-12'
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
          SKILLS
        </h2>
        <div className='max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
