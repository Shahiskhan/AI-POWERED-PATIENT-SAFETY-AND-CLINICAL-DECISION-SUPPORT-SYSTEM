import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import PatientsList from './pages/patients/PatientsList';
import PatientDetails from './pages/patients/PatientDetails';
import Prescriptions from './pages/prescriptions/Prescriptions';
import Vitals from './pages/vitals/Vitals';
import Alerts from './pages/alerts/Alerts';
import AiRecs from './pages/ai/AiRecs';
import Users from './pages/users/Users';
import Settings from './pages/settings/Settings';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<PatientsList />} />
          <Route path="patients/:id" element={<PatientDetails />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="vitals" element={<Vitals />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="ai-recs" element={<AiRecs />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
