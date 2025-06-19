import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-gray-600 text-sm py-8 mt-12 border-t border-gray-200">
      <p>© {new Date().getFullYear()} Sabyasachi Maity. All rights reserved.</p>
      <p className="mt-1">Built with ❤️</p>
    </footer>
  );
};

export default Footer;