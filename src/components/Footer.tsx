import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                <span className="text-white font-bold text-lg transform skew-x-12">
                  E
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                EDGE<span className="text-red-500">ART</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premier manufacturing and CNC mechanical works company
              specializing in high-precision engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Projects Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Laser Cutting</li>
              <li className="text-gray-400 text-sm">CNC Cutting</li>
              <li className="text-gray-400 text-sm">Fibre Marking</li>
              <li className="text-gray-400 text-sm">Fibre Laser Works</li>
              <li className="text-gray-400 text-sm">Industrial Fabrication</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Industrial Zone, Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@edgeart.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EdgeArt (Pvt) Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}