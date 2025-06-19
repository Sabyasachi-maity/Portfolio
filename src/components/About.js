import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white rounded-3xl shadow-lg p-10 mb-12 transform transition-transform duration-500 hover:scale-[1.01]"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        About Me <User className="inline-block ml-2 text-indigo-500" size={32} />
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/assets/IMG_20250123_203012.jpg"
            alt="Sabyasachi Maity"
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl border-4 border-indigo-200"
          />
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed text-gray-700">
          <p className="mb-4">
            Hello! I'm Sabyasachi Maity, a passionate student seeking a career in the IT industry and related fields. I am a problem solver with a focus on Web Development and an enthusiasm for Data Science & Cloud technologies.
          </p>
          <p className="mb-4">
            I am currently pursuing B.Tech in Computer Science at JIS College of Engineering, with a cumulative CGPA of 8.00/10.0. My academic background also includes Higher Secondary Education from Panskura Bradley Birt High School.
          </p>
          <p>
            I am keen on continuous learning and applying my skills to build innovative solutions. My technical skills include various programming languages, tools, databases, and operating systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;