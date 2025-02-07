import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TeresaCifuentes from './pages/TeresaCifuentes';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import AvisoLegal from './pages/AvisoLegal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <Routes>
          <Route path="/teresa-cifuentes" element={<TeresaCifuentes />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/" element={<Navigate to="/teresa-cifuentes" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;