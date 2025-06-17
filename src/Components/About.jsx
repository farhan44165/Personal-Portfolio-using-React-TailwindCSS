import React from 'react';
import pic2 from '../assets/pic2.jpeg';
import { Code, Palette, Rocket, Cloud } from 'lucide-react';

const About = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white py-20 px-6 md:px-16'>
      <div className='bg-white/10 rounded-3xl px-6 md:px-10 py-6 space-y-8 shadow-lg'>
        <h1 className='text-4xl md:text-5xl font-semibold text-center'>About Me</h1>
        <h3 className='text-base md:text-lg font-semibold text-center'>
          I'm a full-stack developer & I have expertise in modern web technologies.
        </h3>

        {/* Bio + Image section */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <ul className='text-white/80 space-y-4 text-justify flex-1'>
            <li>
              Within a year of experience in web development, I specialize in creating scalable, user-friendly applications using React, Node.js, and modern frameworks like TailwindCSS. I'm passionate about writing clean, efficient code and staying up-to-date with the latest technologies.
            </li>
            <li>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and always strive to improve my skills.
            </li>
          </ul>

          <div className='flex justify-center md:justify-end w-full md:w-auto'>
            <img
              src={pic2}
              alt="About Me"
              className='w-4/5 sm:w-3/5 md:w-60 lg:w-72 max-h-72 md:max-h-60 object-cover rounded-2xl border-2 shadow-md'
            />
          </div>
        </div>

        {/* Skills Icons */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10'>
          {/* Clean Code */}
          <div className='flex flex-col items-center text-center'>
            <div className="bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 rounded-full w-16 h-16 flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <h2 className='font-semibold text-lg mt-2'>Clean Code</h2>
            <p className='text-sm text-white/80'>Writing maintainable and scalable code.</p>
          </div>

          {/* UI/UX Design */}
          <div className='flex flex-col items-center text-center'>
            <div className="bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 rounded-full w-16 h-16 flex items-center justify-center">
              <Palette className="text-white" size={24} />
            </div>
            <h2 className='font-semibold text-lg mt-2'>UI/UX Design</h2>
            <p className='text-sm text-white/80'>Creating beautiful user experiences.</p>
          </div>

          {/* API Integration */}
          <div className='flex flex-col items-center text-center'>
            <div className="bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 rounded-full w-16 h-16 flex items-center justify-center">
              <Cloud className="text-white" size={24} />
            </div>
            <h2 className='font-semibold text-lg mt-2'>API Integration</h2>
            <p className='text-sm text-white/80'>Connect, Manage & Secure external services.</p>
          </div>

          {/* Performance */}
          <div className='flex flex-col items-center text-center'>
            <div className="bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 rounded-full w-16 h-16 flex items-center justify-center">
              <Rocket className="text-white" size={24} />
            </div>
            <h2 className='font-semibold text-lg mt-2'>Performance</h2>
            <p className='text-sm text-white/80'>Optimizing for speed and efficiency.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
