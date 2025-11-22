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
// Blog Pages
import Civil from './pages/Civil';

import Electrical from './pages/Electrical';
import Mechanical from './pages/Mechanical';
import Instrumentation from './pages/Instrumentation';
import Firefighting from './pages/Firefighting';

import OurWork from './pages/OurWork';
import Client from './pages/Client';
import Contact from './pages/Contact';
import Fabrication from './pages/Fabrication';
import SandblastingServices from './Blog/SandblastingServices';
import ScaffoldingDivsion from './pages/ScaffoldingDivsion';
import Gi from './pages/Gi';
import Fittings from './pages/Fittings';
import Platform from './pages/Platform';
import System from './pages/System';
import Accessories from './pages/Accessories';
import Equipment from './pages/Equipment';
import Rental from './pages/Rental';
import Transportation from './pages/Transportation';
import Construction from './pages/Construction';
import Power from './pages/Power';
import Recruitment from './pages/Recruitment';
import General from './pages/General';
import ManpowerRental from './pages/ManpowerRental';
import Scrap from './pages/Scrap';
import Organization from './pages/Organization';
import Light from './pages/Light';
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
     

      {/* BLOG ROUTES → must match slug */}
    
    
      <Route path="/civil-services" element={<Civil />} />
      <Route path="/electrical-services" element={<Electrical />} />
      <Route path="/mechanical-services" element={<Mechanical />} />
      <Route path="/instrumentation-services" element={<Instrumentation />} />
      <Route path="/firefighting-services" element={<Firefighting />} />
      <Route path="/fabrication" element={<Fabrication />} />
      <Route path="/sandblasting-and-painting" element={<SandblastingServices />} />
      <Route path="/scaffolding" element={<ScaffoldingDivsion />} />
<Route path="/equipment" element={<Equipment />} />
      <Route path="/gi-scaffold-tubes" element={<Gi />} />
      <Route path="/scaffold-fittings" element={<Fittings />} />
      <Route path="/heavy-lifting-equipment-rental" element={<Rental />} />
      <Route path="/scaffolding-platform" element={<Platform />} />
      <Route path="/system-scaffolding" element={<System />} />
      <Route path="/scaffolding-accessories" element={<Accessories />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/light-lifting-equipment-rental" element={<Light />} />
      <Route path="/transportation-equipment-rental" element={<Transportation />} />
      <Route path="/construction-equipment-rental" element={<Construction />} />
      <Route path="/power-equipment-rental" element={<Power />} />
      <Route path="/client" element={<Client />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/general-trading-recruitment" element={<Recruitment />} />
      <Route path="/general-trading" element={<General />} />
      <Route path="/professional-skilled-manpower-rental" element={<ManpowerRental />} />
      <Route path="/scrap-buyers--dealers" element={<Scrap />} />
      <Route path="/organization" element={<Organization />} />
     
    

    </Routes>
  );
};

export default App;
