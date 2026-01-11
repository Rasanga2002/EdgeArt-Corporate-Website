import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };
  return <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                <span className="text-white font-bold text-xl transform skew-x-12">
                  E
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">
                  EDGE<span className="text-red-600">ART</span>
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase leading-none mt-1">
                  Precision Engineering
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'}`}>
                {link.name}
              </Link>)}
            <Link to="/contact">
              <Button size="sm" leftIcon={<Phone className="w-4 h-4" />}>
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                {link.name}
              </Link>)}
            <div className="pt-4 px-3">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full" leftIcon={<Phone className="w-4 h-4" />}>
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
}