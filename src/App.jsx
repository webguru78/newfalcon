import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Overview from './pages/Overview';
import WhyChoose from './pages/WhyChoose';
import Quality from './pages/Quality';
import Services from './pages/Services';
import Hec from './pages/Hec';
import Ceo from './pages/Ceo';
import Contract from './pages/Contract';
import Scaffolding from './pages/Scaffolding';
import HeavyEquipment from './pages/HeavyEquipment';

// Blog Pages


import Civil from './pages/Civil';
import Mechanical from './pages/Mechanical';
import Electrical from './pages/Electrical';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/why-choose" element={<WhyChoose />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/services" element={<Services />} />
      <Route path="/hse-policy" element={<Hec />} />
      <Route path="/ceo" element={<Ceo />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/scaffolding-division" element={<Scaffolding />} />
      <Route path="/heavy-equipment" element={<HeavyEquipment />} />

      {/* BLOG ROUTES → must match slug */}
    
    
      <Route path="/civil-services" element={<Civil />} />
      <Route path="/mechanical-services" element={<Mechanical />} />
      <Route path="/electrical-services" element={<Electrical />} />

    </Routes>
  );
};

export default App;
