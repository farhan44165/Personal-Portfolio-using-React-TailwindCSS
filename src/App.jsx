import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} /> {/* Home shows all sections */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
