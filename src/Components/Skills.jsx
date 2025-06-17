import React from 'react';

const Skills = () => {
  const frontend = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 }
  ];

  const backend = [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 87 }
  ];

  const tools = [
    { name: 'Visual Studio Code', level: 95 },
    { name: 'Github', level: 90 },
    { name: 'Postman', level: 85 }
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between text-sm md:text-base text-white font-medium mb-1">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full h-2 bg-white/50 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-sky-700 rounded-full"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <div className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white py-16 px-4 sm:px-6 md:px-10'>
      <div className='text-center space-y-3'>
        <h1 className='font-semibold text-4xl sm:text-5xl'>My Skills</h1>
        <p className='text-base sm:text-lg leading-relaxed py-2 px-2 sm:px-16'>
          I offer a range of services to help you bring your ideas to life with modern tech and intuitive design.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
        {/* Frontend */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-in-out">
          <h3 className="text-2xl font-bold text-center mb-6">Frontend</h3>
          {renderSkills(frontend)}
        </div>

        {/* Backend */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-in-out">
          <h3 className="text-2xl font-bold text-center mb-6">Backend</h3>
          {renderSkills(backend)}
        </div>

        {/* Tools */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-in-out">
          <h3 className="text-2xl font-bold text-center mb-6">Tools & Others</h3>
          {renderSkills(tools)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
