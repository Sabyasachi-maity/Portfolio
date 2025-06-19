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
            Hello! I'm Sabyasachi Maity, a recent Computer Science and Engineering graduate from JIS College of Engineering. I've built a strong foundation in web development, with practical experience creating responsive and user-friendly websites. I'm also passionate about deep learning, machine learning, and cloud computing.
          </p>
          {/* <p className="mb-4">
            You can check out my GitHub profile, where I have 20 repositories, including 15 mini or major projects, and over 300 contributions, highlighted by a 50-day commit streak. Four of my standout projects, which I've included on my resume, are the Sanskritify Chat App (a web-based chat application with a built-in Sanskrit keyboard),Face Mask Detector a Python deep learning project using CNN for image processing, a full-stack Expense Tracker Web Application, and a Football Analysis System built with Python and machine learning.
          </p> */}
          <p>
            Outside of my studies, I enjoy competitive programming and actively contribute to open-source initiatives like Hacktoberfest, DevFest, and GirlScript Summer of Code. I've also participated in the Google Cloud Challenge, where I gained hands-on experience with various Google Cloud services, including BigData, IoT, VMs, and Cloud Buckets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;