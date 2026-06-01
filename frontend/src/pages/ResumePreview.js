import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ResumeTemplate from '../components/ResumeTemplate';

function ResumePreview({ resumeData }) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">No resume data found</h1>
          <button
            onClick={() => navigate('/create')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded"
          >
            Create Resume
          </button>
        </div>
      </div>
    );
  }

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/resume/generate-pdf', resumeData, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentChild.removeChild(link);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => navigate('/create')}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            Back to Edit
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
        <div className="bg-white rounded shadow-lg p-10">
          <ResumeTemplate data={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;