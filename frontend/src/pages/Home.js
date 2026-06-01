import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Resume Maker</h1>
        <p className="text-xl mb-8">Create a professional resume in minutes</p>
        <button
          onClick={() => navigate('/create')}
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;