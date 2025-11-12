import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import WhyChoose from './pages/WhyChoose';
import Quality from './pages/Quality';
import Services from './pages/Services';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/why-choose" element={<WhyChoose />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/services" element={<Services />} />
      
    </Routes>
    
  );
};

export default App;
