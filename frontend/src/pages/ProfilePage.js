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
    <HeaderPage />
    <div className="bg-green-50 min-h-screen p-4">
      <h1 className="text-3xl mb-4">Profile</h1>
      {user ? (
        <div className="bg-white shadow rounded p-4">
          <p className="text-lg mb-2">Name: {user.name}</p>
          <p className="text-lg mb-2">Email: {user.email}</p>
          {/* Add more user details as necessary */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <FooterPage />
    </>
  );
}

export default ProfilePage;