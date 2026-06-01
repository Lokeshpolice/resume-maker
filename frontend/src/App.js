import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeForm from './pages/ResumeForm';
import ResumePreview from './pages/ResumePreview';
import Home from './pages/Home';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ResumeForm setResumeData={setResumeData} />} />
        <Route path="/preview" element={<ResumePreview resumeData={resumeData} />} />
      </Routes>
    </Router>
  );
}

export default App;