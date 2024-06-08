import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HeaderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("You have successfully logged out!");
    navigate('/');
  };

  return (
    <header className="bg-green-700 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold hover:text-gray-300">
          BrandName
        </Link>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <Link to="/home" className={`text-lg hover:text-gray-300 ${location.pathname === "/home" ? "underline" : ""}`}>Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/profile" className={`text-lg hover:text-gray-300 ${location.pathname === "/profile" ? "underline" : ""}`}>Profile</Link>
            </li>
            <li className="mr-6">
              <Link to="/exam" className={`text-lg hover:text-gray-300 ${location.pathname === "/exam" ? "underline" : ""}`}>Exam</Link>
            </li>
            <li className="mr-6">
              <button onClick={handleLogout} className="text-lg hover:text-gray-300">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <ToastContainer/>
    </header>
  );
}

export default HeaderPage;