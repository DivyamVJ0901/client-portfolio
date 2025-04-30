import React, { useState } from 'react'

const categories = [
  'All',
  'React.js',
  'JavaScript',
  'Node.js',
  'Express.js',
  'TypeScript',
  'PHP',
  'Laravel',
  'Package',
  'Extension'
]

const projects = [
  {
    title: 'GitProfile',
    tags: ['React.js', 'JavaScript'],
    description:
      '🚀 Create and publish a dynamic portfolio by just providing your GitHub username.',
    stars: 1878,
    forks: 1778
  },
  {
    title: 'Velvet',
    tags: ['Node.js', 'Express.js'],
    description:
      'The simplest way to create REST API with Node.js, Express.js, and TypeORM.',
    stars: 6,
    forks: 0
  },
  {
    title: 'Nixn',
    tags: ['React.js', 'TypeScript'],
    description:
      'Modern and responsive admin dashboard built with React, Tailwind, and Shadcn.',
    stars: 3,
    forks: 0
  },
  {
    title: 'Pandora',
    tags: ['PHP', 'Laravel'],
    description: 'REST API starter kit powered by Laravel, OpenAPI, Sanctum.',
    stars: 38,
    forks: 15
  },
  {
    title: 'Vail',
    tags: ['JavaScript', 'Package'],
    description:
      '⚓ Docker powered local development experience for JavaScript/TypeScript Apps.',
    stars: 11,
    forks: 1
  },
  {
    title: 'Reactive Button',
    tags: ['React.js', 'JavaScript', 'Package'],
    description: '3D animated react button component with progress bar.',
    stars: 136,
    forks: 21
  }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(activeCategory))

  return (
    <section className='min-h-screen px-6 py-10 bg-[#F0F2F5]' id='projects'>
      <div className='text-center mb-10 mx-auto max-w-6xl'>
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
          Projects
        </h2>
        <div className='flex flex-wrap justify-center gap-2 mt-6'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700'
              } hover:bg-black hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition'
          >
            <div className='flex flex-wrap gap-2 mb-3'>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx} 
                  className='text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full'
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-600 text-sm mb-4'>{project.description}</p>
            <div className='flex items-center gap-4 text-gray-500 text-sm'>
              <span>⭐ {project.stars}</span>
              <span>🍴 {project.forks}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
