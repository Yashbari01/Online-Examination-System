import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('http://localhost:7000/api/auth/register', { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/home');
    } catch (error) {
      setLoading(false);
      setError('Registration failed. Please try again.');
      console.error('Error in registration:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-green-900">
        Online Examination System
      </h2>
    </div>
    <div>
      <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
        Sign Up to your account
      </h2>
    </div>
    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
    {error && <div className="text-red-500 text-center">{error}</div>}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div>
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" disabled={loading} type="submit">{loading ? 'Sign Up...' : 'Sign Up'}</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default SignupPage;
