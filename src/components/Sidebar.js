import React from 'react';
import { Home, User, Lightbulb, Code, Mail } from 'lucide-react';

const Sidebar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { name: 'Home', icon: <Home />, id: 'home' },
    { name: 'About', icon: <User />, id: 'about' },
    { name: 'Skills', icon: <Lightbulb />, id: 'skills' },
    { name: 'Projects', icon: <Code />, id: 'projects' },
    { name: 'Contact', icon: <Mail />, id: 'contact' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-lg w-20 flex flex-col items-center py-6 z-50">
      <div className="flex-shrink-0 mb-8">
        <img
          src="/assets/IMG_20250123_203012.jpg"
          alt="Sabyasachi Maity Profile"
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center text-sm p-2 rounded-lg transition-colors duration-200
              ${activeSection === item.id ? 'text-indigo-600 bg-indigo-50 shadow' : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'}
            `}
            title={item.name}
          >
            <div className="mb-1">{item.icon}</div>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;