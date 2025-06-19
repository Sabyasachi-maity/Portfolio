import React from 'react';
import { Lightbulb } from 'lucide-react';
import { skills } from '../data/data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-3xl shadow-lg p-10 mb-12 transform transition-transform duration-500 hover:scale-[1.01]"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        My Skills <Lightbulb className="inline-block ml-2 text-yellow-500" size={32} />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200"
          >
            <span className="text-5xl mb-3">{skill.icon}</span>
            <p className="text-xl font-semibold text-indigo-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;