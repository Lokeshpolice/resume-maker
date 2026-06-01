import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TemplateSelector() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/templates');
      setTemplates(response.data);
    } catch (error) {
      console.error('Error fetching templates:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-white text-center">Loading templates...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Choose Template</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {templates.map(template => (
          <div
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`p-4 border-2 rounded cursor-pointer transition ${
              selectedTemplate === template.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-300 hover:border-purple-400'
            }`}
          >
            <h3 className="font-bold text-center">{template.name}</h3>
            <p className="text-sm text-gray-600 text-center mt-2">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;