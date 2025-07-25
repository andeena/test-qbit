import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/paket/:kategoriId" element={<DetailPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;