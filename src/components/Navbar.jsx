import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='bg-[#FEFEFE] shadow-[2px] w-full px-6 py-4 flex items-center justify-between h-[50px]'>
      <div className='text-xl md:text-2xl font-semibold text-gray-900'>
        Keshav Arora
      </div>

      <ul className='hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-600'>
        {[
          { name: 'About', to: 'about' },
          { name: 'Skills', to: 'skills' },
          { name: 'Experience', to: 'experience' },
          { name: 'Education', to: 'education' },
          { name: 'Projects', to: 'projects' },
          { name: 'Contact', to: 'contact' }
        ].map((item, index) => (
          <li
            key={index}
            className='relative group cursor-pointer hover:text-blue-500 transition'
          >
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50} // to adjust scroll position
            >
              {item.name}
            </Link>
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full' />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
