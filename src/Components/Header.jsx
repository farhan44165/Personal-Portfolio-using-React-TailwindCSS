import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger & Close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='fixed top-0 w-full z-50 text-white bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700'>
      <div className='flex items-center justify-between px-6 py-4'>
        <p className='text-2xl font-semibold hover:scale-110 transition duration-500'>
          Farhan Fareed
        </p>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-x-8 text-white'>
          <a href="#home" className='hover:font-semibold hover:underline hover:scale-110 transition duration-500'>Home</a>
          <a href="#about" className='hover:font-semibold hover:underline hover:scale-110 transition duration-500'>About</a>
          <a href="#skills" className='hover:font-semibold hover:underline hover:scale-110 transition duration-500'>Skills</a>
          <a href="#projects" className='hover:font-semibold hover:underline hover:scale-110 transition duration-500'>Projects</a>
          <a href="#contact" className='hover:font-semibold hover:underline hover:scale-110 transition duration-500'>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='flex flex-col items-center bg-blue-800 md:hidden pb-4 space-y-2 text-white'>
          <a onClick={toggleMenu} href="#home" className='hover:font-semibold transition duration-300'>Home</a>
          <a onClick={toggleMenu} href="#about" className='hover:font-semibold transition duration-300'>About</a>
          <a onClick={toggleMenu} href="#skills" className='hover:font-semibold transition duration-300'>Skills</a>
          <a onClick={toggleMenu} href="#projects" className='hover:font-semibold transition duration-300'>Projects</a>
          <a onClick={toggleMenu} href="#contact" className='hover:font-semibold transition duration-300'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
