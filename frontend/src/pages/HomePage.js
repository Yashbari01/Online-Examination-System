// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import HeaderPage from "../components/HeaderPage";
// import FooterPage from "../components/FooterPage";

// function HomePage() {
//   const [exams, setExams] = useState([]);

//   useEffect(() => {
//     const fetchExams = async () => {
//       const { data } = await axios.get('http://localhost:7000/api/exams');
//       setExams(data);
//     };
//     fetchExams();
//   }, []);

//   return (
//     // <div>
//     //   <h1>Available Exams</h1>
//     //   <ul>
//     //     {exams.map((exam) => (
//     //       <li key={exam._id}>
//     //         <Link to={`/exam/${exam._id}`}>{exam.title}</Link>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
// <>
//       <HeaderPage />
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
//   <h1 className="text-3xl font-extrabold text-green-900 mb-8">Available Exams</h1>
//   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//     {exams.map((exam) => (
//       <div key={exam._id} className="flex items-center p-4 bg-white rounded-lg shadow-xs hover:bg-green-800 ">
//         <Link to={`/exam/${exam._id}`} className="text-lg font-medium text-green-600 hover:text-white ml-4">{exam.title}</Link>
//       </div>
//     ))}
//   </div>
// </div>
// <FooterPage />
// </>
//   );
// }

// export default HomePage;


import React from 'react';
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      {/* <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Online Examination System</h1>
          <div>
            <a href="/login" className="mr-4">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      </nav> */}
      <HeaderPage />

      {/* Hero Section */}
      <header className="bg-green-50 text-blue-900 text-center py-20">
        <h2 className="text-4xl mb-4">Welcome to our Online Examination System</h2>
        <p className="text-xl">Join us and improve your knowledge</p>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-20">
        <h3 className="text-center text-3xl mb-10">Our Features</h3>
        <div className="flex justify-around">
          <div className="w-1/3">
            <h4 className="text-xl mb-2">Easy to Use</h4>
            <p>Our system is user-friendly and easy to navigate.</p>
          </div>
          <div className="w-1/3">
            <h4 className="text-xl mb-2">Secure</h4>
            <p>We ensure your data is safe and secure.</p>
          </div>
          <div className="w-1/3">
            <h4 className="text-xl mb-2">Accessible</h4>
            <p>Access our system anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterPage />
      {/* <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2022 Online Examination System. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;