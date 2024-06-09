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
import PharmRegistration from './add_drug';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pharmacyRegistration" element={<PharmacyRegistration />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/ndsoRegistration" element={<NdsoRegistration />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/pharmacyDashboard" element={<PharmacyDashboard />}>
        <Route path="PharmRegistration" element={<add_drug />} />
        <Route path="view" element={<View />} />
        <Route path="home" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
