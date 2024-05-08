import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
    <Router>
      <Header onInputChange={handleInputChange} />
        <Routes>
          <Route exact path="/" element={<Home searchTerm={searchTerm} />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
