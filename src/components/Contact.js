import React from 'react';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl shadow-xl p-10 transform transition-transform duration-500 hover:scale-[1.01]"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Details <Mail className="inline-block ml-2 text-yellow-300" size={32} />
      </h2>
      <div className="max-w-2xl mx-auto text-center text-lg space-y-4">
        <p className="opacity-90">
          Feel free to  connect with me on social media.
        </p>
        
        
        <div className="flex justify-center space-x-6 mt-8 pt-4 border-t border-indigo-400">
          <a
            href="https://www.linkedin.com/in/sabyasachi-maity-ab439b223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin size={36} />
          </a>
          <a
            href="https://github.com/Sabyasachi-maity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-200"
            title="GitHub"
          >
            <Github size={36} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-200"
            title="Twitter"
          >
            <Twitter size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;