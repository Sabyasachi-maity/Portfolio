import React from 'react';
import { Briefcase, MessageSquare } from 'lucide-react';

const Home = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl shadow-xl p-10 mb-12"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Hi, I'm <span className="text-yellow-300">Sabyasachi Maity</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-100">
          A <span className="font-semibold">Problem Solver</span> focused in Web Development, and enthusiastic in Data Science & Cloud.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
          <a
            href="#projects"
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Briefcase className="mr-2 h-5 w-5" /> View My Work
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="mr-2 h-5 w-5" /> Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;