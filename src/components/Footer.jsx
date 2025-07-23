import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8" style={{ backgroundColor: '#3E4A5C', color: '#D3DDE6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Helping Hand Accountants. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
