import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomePage from './pages/HomePage';
import EspecialidadPage from './pages/EspecialidadPage'
import NovedadesPage from './pages/NovedadesPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="especialidad" element={<EspecialidadPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
