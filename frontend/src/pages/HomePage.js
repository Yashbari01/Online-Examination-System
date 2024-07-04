import React from 'react';
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-50">
      <HeaderPage />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          Welcome to our Online Examination System
        </h1>
        <p className="text-xl md:text-2xl mb-10 animate-fade-in-up max-w-2xl mx-auto">
          Empower your learning journey with our cutting-edge examination platform
        </p>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-24 px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 text-gray-800">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Intuitive Interface",
              description: "Our system is designed with user experience in mind, ensuring smooth navigation and ease of use.",
              icon: "fas fa-user-friends",
            },
            {
              title: "Advanced Security",
              description: "We implement state-of-the-art security measures to protect your data and maintain exam integrity.",
              icon: "fas fa-shield-alt",
            },
            {
              title: "Anytime, Anywhere",
              description: "Access our platform from any device, at any time. Your education is no longer bound by location.",
              icon: "fas fa-globe",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-indigo-500 mb-6">
                <i className={`${feature.icon} text-5xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Learning?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of students already experiencing the future of online examinations</p>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Sign Up Now
        </Link>
      </section>

      <FooterPage />
    </div>
  );
};

export default HomePage;