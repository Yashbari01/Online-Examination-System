import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
        try {
          const { data } = await axios.get('http://localhost:7000/api/auth/profile', {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          });
          setUser(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchUserProfile();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>;
  }

  if (error) {
    return <div className="text-red-500 text-lg p-4">{error}</div>;
  }

  return (
    <>
    {/* <HeaderPage />
    <div className="bg-green-50 min-h-screen p-4">
      <h1 className="text-3xl mb-4">Profile</h1>
      {user ? (
        <div className="bg-white shadow rounded p-4">
          <p className="text-lg mb-2">Name: {user.name}</p>
          <p className="text-lg mb-2">Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <FooterPage /> */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <HeaderPage />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Your Profile</h1>
          
          {user ? (
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-56 w-full object-cover md:w-56 md:h-auto" 
                    src={user.avatar || 'https://via.placeholder.com/200'} 
                    alt={user.name}
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-2">
                    Personal Information
                  </div>
                  <h2 className="text-2xl leading-tight font-bold text-gray-900 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{user.email}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg text-gray-800 font-semibold mb-3">Additional Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Member since: {new Date(user.createdAt).toLocaleDateString()}
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Last login: {new Date(user.lastLogin).toLocaleString()}
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        Exams taken: {user.examsTaken || 0}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
              <p className="ml-4 text-lg text-gray-700">Loading profile...</p>
            </div>
          )}
        </div>
      </main>
      
      <FooterPage />
    </div>
    </>
  );
}

export default ProfilePage;