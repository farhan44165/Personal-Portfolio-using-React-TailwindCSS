import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import pic from '../assets/pic.jpg';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row py-28 px-6 md:px-16 gap-10 items-center bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white"
      >
        {/* Left Section - Intro */}
        <div className="md:w-[70%] w-full px-6 py-12 bg-white/10 rounded-3xl shadow-lg hover:scale-105 transition duration-500">
          <h1 className="text-4xl md:text-5xl font-bold">Hello, I'm Farhan Fareed</h1>
          <h2 className="text-xl md:text-2xl font-semibold pt-6">Full Stack Developer</h2>
          <p className="text-base md:text-lg text-white/80 pt-4">
            I create beautiful, responsive web applications using modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="rounded-full py-2 px-5 text-center bg-gradient-to-r from-purple-500 to-sky-700 font-semibold hover:scale-110 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 rounded-full py-2 px-6 text-center font-semibold hover:scale-110 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Section - Profile Picture (Perfectly Circular) */}
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img
            src={pic}
            alt="Profile Pic"
            className="w-40 aspect-square sm:w-52 md:w-[40vh] rounded-full border-2 object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </section>

      {/* Other sections in one page */}
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
