import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/notes', label: 'Notes' },
    { path: '/photos', label: 'Photos' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Update active index based on current path
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  // Update indicator position
  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    }
  }, [activeIndex]);

  const handleNavHover = (index: number) => {
    if (navRef.current) {
      const hoveredElement = navRef.current.children[index] as HTMLElement;
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    }
  };

  const handleNavLeave = () => {
    if (navRef.current) {
      const activeElement = navRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    }
  };

  return (
    <>
      {/* SVG Filter for Gooey Effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 group-hover:scale-125"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 dark:group-hover:from-blue-300 dark:group-hover:to-indigo-300 transition-all duration-300">
                Cyber Knight
              </span>
            </Link>

            {/* Desktop Navigation with Gooey Effect */}
            <nav className="hidden md:flex items-center relative">
              <div 
                ref={navRef}
                className="flex items-center space-x-1 relative p-2 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                style={{ filter: 'url(#gooey)' }}
                onMouseLeave={handleNavLeave}
              >
                {/* Gooey Background Indicator */}
                <div
                  className="absolute bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-xl transition-all duration-500 ease-out h-10 opacity-90"
                  style={{
                    ...indicatorStyle,
                    transform: 'translateY(0)',
                    filter: 'blur(1px)',
                  }}
                />
                
                {/* Secondary gooey layer for enhanced effect */}
                <div
                  className="absolute bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-300 dark:to-indigo-300 rounded-xl transition-all duration-700 ease-out h-10 opacity-60"
                  style={{
                    ...indicatorStyle,
                    transform: 'translateY(0) scale(1.1)',
                    filter: 'blur(2px)',
                  }}
                />

                {navItems.map(({ path, label }, index) => (
                  <Link
                    key={path}
                    to={path}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 z-10 ${
                      isActive(path)
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onMouseEnter={() => handleNavHover(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="relative z-10">{label}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 animate-spin" style={{ animationDuration: '8s' }} />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 py-4 border-t border-gray-200/50 dark:border-gray-700/50' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav className="flex flex-col space-y-1">
              {navItems.map(({ path, label }, index) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden group ${
                    isActive(path)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {/* Mobile gooey effect */}
                  {isActive(path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg animate-pulse"></div>
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Header;