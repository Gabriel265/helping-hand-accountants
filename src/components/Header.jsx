import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#about', label: 'About Us', id: 'about' },
    { href: '#contact', label: 'Contact Us', id: 'contact' }
  ];

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Get all sections
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find the current section
      let currentSection = 'home';
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = navLinks[index].id;
          }
        }
      });

      // If we're at the very top, always show home as active
      if (window.scrollY < 50) {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg backdrop-blur-sm' : 'shadow-sm'
        }`}
        style={{ 
          backgroundColor: scrolled ? 'rgba(232, 226, 212, 0.95)' : '#E8E2D4'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            
            {/* Logo */}
            <a href="#home" className="flex items-center group cursor-pointer">
              <img
                src="/logo-w.png"
                alt="Helping Hand Accountants"
                className="w-10 h-10 md:w-12 md:h-12 object-contain mr-3 transition-transform duration-200 group-hover:scale-110"
              />
              <span
                className="text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-200 group-hover:opacity-80"
                style={{ color: '#3E4A5C' }}
              >
                Helping Hand Accountants
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105 relative overflow-hidden group ${
                      isActive 
                        ? 'font-semibold' 
                        : 'hover:bg-white hover:bg-opacity-50'
                    }`}
                    style={{ 
                      color: isActive ? '#8FA68E' : '#6B7D7D'
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-100 transition-transform duration-200"
                        style={{ backgroundColor: '#8FA68E' }}
                      ></div>
                    )}
                    {!isActive && (
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                        style={{ backgroundColor: '#8FA68E' }}
                      ></div>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Contact Info & Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              
              {/* Contact Info - Hidden on small screens */}
              <div className="hidden xl:flex items-center text-sm lg:text-base">
                <Phone 
                  className="w-4 h-4 mr-2 opacity-70" 
                  style={{ color: '#6B7D7D' }}
                />
                <span style={{ color: '#6B7D7D' }}>Call us:</span>
                <span 
                  className="ml-2 font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ color: '#3E4A5C' }}
                >
                  +44 730 1096 908
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  color: '#3E4A5C',
                  focusRingColor: '#8FA68E'
                }}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen }
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div 
              className="py-4 border-t"
              style={{ borderColor: '#B5C0B7' }}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-30 hover:transform hover:translateX-2 ${
                        isActive ? 'font-semibold' : ''
                      }`}
                      style={{ 
                        color: isActive ? '#8FA68E' : '#6B7D7D'
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })}
                
                {/* Mobile Contact Info */}
                <div 
                  className="px-4 py-3 mt-4 border-t flex items-center text-sm"
                  style={{ 
                    borderColor: '#B5C0B7',
                    color: '#6B7D7D'
                  }}
                >
                  <Phone className="w-4 h-4 mr-2 opacity-70" />
                  <span>Call us:</span>
                  <span 
                    className="ml-2 font-semibold"
                    style={{ color: '#3E4A5C' }}
                  >
                    +44 730 1096 908
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;