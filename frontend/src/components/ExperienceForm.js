import React, { useState } from 'react';

function ExperienceForm() {
  const [experiences, setExperiences] = useState([{ company: '', position: '', startDate: '', endDate: '', description: '' }]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', position: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleChange = (idx, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[idx][field] = value;
    setExperiences(newExperiences);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-6 pb-6 border-b last:border-b-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(idx, 'company', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange(idx, 'position', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Start Date (YYYY-MM)</label>
              <input
                type="text"
                placeholder="2021-01"
                value={exp.startDate}
                onChange={(e) => handleChange(idx, 'startDate', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">End Date (YYYY-MM)</label>
              <input
                type="text"
                placeholder="2023-06 or Present"
                value={exp.endDate}
                onChange={(e) => handleChange(idx, 'endDate', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2 mt-4">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => handleChange(idx, 'description', e.target.value)}
              className="w-full border rounded px-3 py-2 h-20"
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddExperience} className="bg-blue-600 hover:bg-blue-700 px-4 py-2">
        Add Another Experience
      </button>
    </div>
  );
}

export default ExperienceForm;