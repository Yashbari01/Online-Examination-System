// src/components/FooterPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function FooterPage() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-300">Online Exam System</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Empowering education through innovative online examination solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white hover:underline transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Exam Street, Education City</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@onlineexam.com</p>
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Follow Us</h4>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
                  aria-label={`Follow us on ${platform}`}
                >
                  <i className={`fab fa-${platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Yash Bari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;