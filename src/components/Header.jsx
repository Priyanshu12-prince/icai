import React from 'react';
import { imageUrl } from '../imageUrl';
import  "../css/header.css"
import { useState } from 'react';

const Header = () => {
  const navItems = [
    { name: 'Home', active: true },
    { name: 'Knowledge Hub', active: false },
    { name: 'Gallery', active: false },
    { name: 'Calculator', active: false },
    { name: 'FAQs', active: false },
    { name: 'Vitya Gyan Mela', active: false },
  ];
   const navList = [
    'Home',
    'Knowledge Hub',
    'Gallery',
    'Calculator',
    'FAQs',
    'Vitya Gyan Mela',
  ];
   const [activeNav, setActiveNav] = useState('Home');

  return (
    <header className="w-full h-16 flex items-center justify-between px-16 bg-white">
      {/* Logo */}
      <div className="h-14 w-42">
        <img 
          className="h-full w-full object-cover" 
          alt="Vitiyagyan" 
          src={imageUrl.logo}
        />
      </div>

      {/* Navigation and Language Selector */}
      <div className="flex items-center gap-6">
        {/* Navigation Menu */}
            <nav className="flex items-center gap-6">
           {navList.map((name) => (
          <button
            key={name}
            onClick={() => setActiveNav(name)}
            className={`px-4 py-1 rounded navItem 
              ${activeNav === name ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 navItem'}
            `}
          >
            {name}
          </button>
        ))}
      </nav>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
        
          <div className="bg-orange-600 rounded px-2 py-1 flex items-center gap-2">
            <span className="text-white text-sm font-bold">ENG</span>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;