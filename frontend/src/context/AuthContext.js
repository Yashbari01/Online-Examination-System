import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkLoggedIn = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:7000/api/users/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        } catch (error) {
          console.error('User not logged in:', error);
        }
      }
      setLoading(false);
    };
    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:7000/api/users/login', { email, password });
    const { token, ...userData } = response.data;
    localStorage.setItem('authToken', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const register = async (name, email, password) => {
    const response = await axios.post('http://localhost:7000/api/users/register', { name, email, password });
    const { token, ...userData } = response.data;
    localStorage.setItem('authToken', token);
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
