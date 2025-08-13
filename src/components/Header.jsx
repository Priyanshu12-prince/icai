import React from 'react';
import { imageUrl } from '../imageUrl';
import "../css/header.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Knowledge Hub', path: '/knowledge-hub' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Calculator', path: '/calculate-interest' },

    { name: 'FAQs', path: '/faq' },
    { name: 'Vitya Gyan Mela', path: 'https://vitiyagyanmela.icai.org' },

  ]

  const [activeNav, setActiveNav] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleLanguage = (lang) => {
    if (lang === "HI") {
      setIsHindi(true);
    } else {
      setIsHindi(false);
    }
    setIsOpen(false);
  };


  return (
    <header className="w-full bg-white shadow-sm">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 h-16">
        {/* Logo */}
        <div className="h-10 w-32 sm:h-12 sm:w-36 lg:h-14 lg:w-42 flex-shrink-0">
          <img
            className="h-full w-full object-contain"
            alt="Vitiyagyan"
            src={imageUrl.newLogo}
          />
        </div>

        {/* Desktop Navigation and Language Selector */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Navigation Menu */}
          <nav className="flex items-center gap-4 xl:gap-6">
            {navList.map(({ name, path }) => {
              const isExternal = path.startsWith("http");
              const isAnchor = path.startsWith("#");

              const handleClick = (e) => {
                if (isAnchor) {
                  e.preventDefault();
                  const id = path.slice(1); // remove '#'
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                } else {
                  setActiveNav(name);
                }

                if (isMobileMenuOpen) {
                  setIsMobileMenuOpen(false);
                }
              };

              if (isExternal) {
                return (
                  <a
                    href={path}
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded text-sm xl:text-base navItem transition-colors duration-200 ${activeNav === name
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                      }`}
                  >
                    {name}
                  </a>
                );
              }

              return (
                <Link
                  to={isAnchor ? "" : path}
                  key={name}
                  onClick={handleClick}
                  className={`px-3 py-1 rounded text-sm xl:text-base navItem transition-colors duration-200 ${activeNav === name
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                    }`}
                >
                  {name}
                </Link>
              );
            })}


          </nav>

          {/* Language Selector */}
          <div className="relative inline-block text-left">
            {/* Dropdown Trigger */}
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-orange-600 rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-orange-700 transition-colors duration-200"
            >
              <span className="text-white text-sm font-bold">{isHindi ? "हिंदी" : "ENG"}</span>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}

            {isOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-white rounded shadow z-10">
                <div
                  onClick={() => toggleLanguage("EN")}
                  className="px-3 py-1 hover:bg-orange-100 text-sm cursor-pointer"
                >
                  ENG
                </div>
                <div
                  onClick={() => toggleLanguage("HI")}
                  className="px-3 py-1 hover:bg-orange-100 text-sm cursor-pointer"
                >
                  हिंदी
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button and Language Selector */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile Language Selector */}
          {/* Mobile Language Selector with Dropdown */}
          <div className="relative inline-block text-left">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-orange-600 rounded px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-orange-700 transition-colors duration-200"
            >
              <span className="text-white text-xs font-bold">{isHindi ? "हिंदी" : "ENG"}</span>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {isOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-white rounded shadow z-10">
                <div
                  onClick={() => toggleLanguage("EN")}
                  className="px-3 py-1 hover:bg-orange-100 text-sm cursor-pointer"
                >
                  ENG
                </div>
                <div
                  onClick={() => toggleLanguage("HI")}
                  className="px-3 py-1 hover:bg-orange-100 text-sm cursor-pointer"
                >
                  हिंदी
                </div>
              </div>
            )}
          </div>


          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
        ? 'max-h-96 opacity-100 border-t border-gray-200'
        : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <nav className="px-4 py-2 bg-gray-50">
          {navList.map(({ name, path }) => (
            <Link
              to={path}
              key={name}
              onClick={() => {
                setActiveNav(name);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-md text-sm transition-colors duration-200 block
      ${activeNav === name
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 hover:text-blue-900 hover:bg-white'
                }
    `}
            >
              {name}
            </Link>
          ))}

        </nav>
      </div>
    </header>
  );
};

export default Header;

