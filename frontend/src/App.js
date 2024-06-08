import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ExamPage from './components/ExamPage';
import ExamList from './components/ExamList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/exam/:id" element={<ExamPage />} />
        <Route path="/exam" element={<ExamList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
