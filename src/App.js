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
import LoginPages from './NdsoLoginPage';
import Dashboard from './DashBoard';
import OrderDetails from './OderDeatails';
import ViewDrugs from './ViewDrugs';
import NdsoCreate from './ndsoCreate';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pharmacyRegistration' element={<PharmacyRegistration />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/NdsologinPage" element={<LoginPages />} />
        <Route path="/ndsoCreate" element={<NdsoCreate />} />
        <Route path="/viewDrugs" element={<ViewDrugs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path='/ndsoRegistration' element={<NdsoRegistration />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/pharmacyDashboard" element={<PharmacyDashboard />} />
        <Route path="/view" element={<View />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
