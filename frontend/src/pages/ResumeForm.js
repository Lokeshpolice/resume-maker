import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import SkillsForm from '../components/SkillsForm';
import TemplateSelector from '../components/TemplateSelector';

function ResumeForm({ setResumeData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
    education: [{ school: '', degree: '', field: '', graduationDate: '' }],
    skills: [],
    template: 1
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post('http://localhost:5000/api/resume/validate', formData);
      if (response.data.valid) {
        setResumeData(formData);
        navigate('/preview');
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([{ field: 'general', message: 'An error occurred. Please try again.' }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Create Your Resume</h1>

        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <h3 className="font-bold">Please fix the following errors:</h3>
            <ul className="mt-2">
              {errors.map((error, idx) => (
                <li key={idx}>{error.field}: {error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <PersonalInfoForm data={formData.personalInfo} onChange={handlePersonalInfoChange} />
          <ExperienceForm />
          <EducationForm />
          <SkillsForm />
          <TemplateSelector />

          <div className="flex gap-4 justify-center">
            <button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 px-8 py-3">
              {loading ? 'Processing...' : 'Preview Resume'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeForm;