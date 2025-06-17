import React from 'react';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';

const Projects = () => {
  const projectData = [
    {
      image: p1,
      title: "My Portfolio",
      description: "This is my Portfolio which is made by React & TailwindCSS.",
      tech: ["React", "TailwindCSS"],
      github: "https://github.com/farhan44165/Personal-Portfolio-using-React-TailwindCSS.git",
      demo: "https://personal-portfolio-responsive.netlify.app/"
    },
    {
      image: p2,
      title: "WebDev Portfolio",
      description: "This is only the frontend of portfolio made with TailwindCSS.",
      tech: ["HTML", "TailwindCSS", "React"],
      github: "https://github.com/farhan44165/Frontend-Portfolio-WebDev.git",
      demo: "https://portfolio-sample-frontend.netlify.app/"
    },
    {
      image: p3,
      title: "Personal Blog",
      description: "This is my personal blog which I have made with HTML & CSS.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/farhan44165/HTML-CSS-Personal-Blog.git",
      demo: "https://my-circulam-vita-personal.netlify.app/"
    },
    {
      image: p4,
      title: "React+Tailwind Project",
      description: "This is the project where I have learned many concepts of Web Development.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/farhan44165/React-TailwindCSS-Project-1.git",
      demo: "https://my-project-1-react-tailwindcss.netlify.app/"
    },
    {
      image: p5,
      title: "Tic Tac Toe Game",
      description: "This is a Tic Tac Toe game created using simple HTML, CSS & JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/farhan44165/Tic-Tac-Toe.git",
      demo: "https://playtic-tac-toe-multi.netlify.app/"
    },
    {
      image: p6,
      title: "Full Stack Expense Tracker",
      description: "This is a full-stack project including Frontend & Backend.",
      tech: ["React", "Node.js", "Atlas Mongodb"],
      github: "https://github.com/farhan44165/FullStack-Expense-Tracker.git",
      demo: "https://playtic-tac-toe-multi.netlify.app/"
    },
    {
      image: p6,
      title: "Simple Expense Tracker",
      description: "This is only Frontend based project, same as my Full-Stack project but it works without Backend.",
      tech: ["React", "TailwindCSS"],
      github: "https://github.com/farhan44165/Simple-Expense-Tracker.git",
      demo: "https://expense-tracker-frontend-only.netlify.app/"

    }, {
      image: p8,
      title: "Rock Paper Scissor Game",
      description: "This is a Rock Paper Scissor game created using simple HTML, CSS & JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/farhan44165/Rock-Paper-Scissor.git",
      demo: "https://play-rock-paper.netlify.app/"
    }, {
      image: p9,
      title: "React+Tailwind Project",
      description: "This is the project where I have learned many concepts of Web Development.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/farhan44165/React-TailwindCSS-Project-2.git",
      demo: "https://my-project-2-react-tailwindcss.netlify.app/"
    },
  ];

  return (
    <div className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white py-16 px-4 sm:px-6 lg:px-10'>
      <div className='text-center space-y-3'>
        <h1 className='text-4xl md:text-5xl font-semibold'>My Projects</h1>
        <p className='text-base md:text-lg leading-relaxed'>Here are some of my recent projects that showcase my skills and passion for development</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12'>
        {projectData.map((proj, index) => (
          <div
            key={index}
            className='bg-black/85 border border-white rounded-3xl overflow-hidden hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ease-in-out flex flex-col'
          >
            <img src={proj.image} alt={proj.title} className='w-full h-60 object-cover rounded-t-3xl' />
            <div className='flex flex-col px-6 py-4'>
              <h2 className='text-lg font-semibold text-center pt-2'>{proj.title}</h2>
              <p className='text-white/80 text-sm py-2'>{proj.description}</p>
              <div className='flex flex-wrap gap-2 pt-2 text-sm justify-center'>
                {proj.tech.map((tech, i) => (
                  <span key={i} className='border py-0.5 px-3 rounded-lg'>{tech}</span>
                ))}
              </div>
              <div className='flex justify-center gap-5 py-6 font-semibold'>
                <a href={proj.github} target='_blank' rel='noopener noreferrer'>
                  <button className='bg-blue-600 px-4 py-1 rounded-md hover:scale-110 transition duration-300'>GitHub</button>
                </a>
                <a href={proj.demo} target='_blank' rel='noopener noreferrer'>
                  <button className='bg-red-600 px-4 py-1 rounded-md hover:scale-110 transition duration-300'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
