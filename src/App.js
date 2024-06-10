import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import View from './View';
import Checkout from './Checkout';
import WelcomePage from './WelcomePage';
import PharmacyRegistration from './PharmacyRegistration';
import LoginPage from './LoginPage';
import NdsoRegistration from './NdsoRegistration';
import PharmacyDashboard from './PharmacyDashboard';
import PharmaRegistration from './ViewDrugs';
import ViewDrugs from './ViewDrugs';
import NDSODashboard from './NDSODashboard';
import NdsoDashboard from './NDSODashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pharmacyRegistration' element={<PharmacyRegistration />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path='/ndsoRegistration' element={<NdsoRegistration />} />
        <Route path='/nDSODashboard' element={<NdsoDashboard />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/pharmacyDashboard" element={<PharmacyDashboard />} />
        <Route path="/view" element={<View />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
