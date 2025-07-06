import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/notes', label: 'Notes' },
    { path: '/photos', label: 'Photos' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleNavHover = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleNavLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const getIndicatorStyle = () => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    return {
      '--indicator-index': targetIndex,
      '--total-items': navItems.length,
    } as React.CSSProperties;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/ckm/Untitled_design__1_-removebg-preview.png" 
                alt="Cyber Knight Logo" 
                className="h-24 w-24 transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Cyber Knight
            </span>
          </Link>

          <nav className="hidden md:flex items-center">
            <div
              ref={navRef}
              className="flex items-center relative p-1 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              onMouseLeave={handleNavLeave}
              style={getIndicatorStyle()}
            >
              <div className="nav-indicator absolute bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-xl h-10 transition-all duration-300 ease-out opacity-90" />
              {navItems.map(({ path, label }, index) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 z-10 min-w-[80px] text-center ${
                    isActive(path)
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onMouseEnter={() => handleNavHover(index)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100 py-4 border-t border-gray-200/50 dark:border-gray-700/50' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        .nav-indicator {
          width: calc(100% / var(--total-items));
          left: calc((100% / var(--total-items)) * var(--indicator-index));
          will-change: left, width;
          transform: translateZ(0);
        }
      `}</style>
    </header>
  );
};

export default Header;