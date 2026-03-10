import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BiodataProvider } from './context/BiodataContext';
import Home from './pages/Home';
import BiodataBuilder from './pages/BiodataBuilder';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <BiodataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/builder" element={<BiodataBuilder />} />
        </Routes>
      </BiodataProvider>
    </BrowserRouter>
  );
}
