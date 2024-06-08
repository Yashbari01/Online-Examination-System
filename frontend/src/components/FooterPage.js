// src/components/FooterPage.js
import React from 'react';

function FooterPage() {
  return (
    <footer className="bg-green-700 text-white px-6 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg text-white font-semibold">&copy; {new Date().getFullYear()} Yash Bari. All rights reserved.</p>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white text-lg mx-2 hover:text-gray-300">Home</a>
          <a href="#" className="text-white text-lg mx-2 hover:text-gray-300">About</a>
          <a href="#" className="text-white text-lg mx-2 hover:text-gray-300">Services</a>
          <a href="#" className="text-white text-lg mx-2 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
