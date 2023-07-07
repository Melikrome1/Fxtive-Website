import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Info from './components/Info';
import ContactUs from './components/ContactUs';
import Strategy from './components/Strategy'; 
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser'; 

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
   
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} logUserOut={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/register" element={<Register onRegister={handleSignup} />} />
        <Route path="/users/:id/delete" element={<DeleteUser />} />
        <Route path="/users/:id/edit" element={<EditUser />} /> 
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/strategy" element={<Strategy />} /> 
      </Routes>
    </>
  );
};

export default App;







