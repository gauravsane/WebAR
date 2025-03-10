import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QrPage from './components/QrPage';
import ObjectRender from './components/ObjectRender';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrPage />} />
        <Route path="/ar" element={<ObjectRender />} />
      </Routes>
    </Router>
  )
}

export default App
