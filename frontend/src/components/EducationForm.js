import React, { useState } from 'react';

function EducationForm() {
  const [educations, setEducations] = useState([{ school: '', degree: '', field: '', graduationDate: '' }]);

  const handleAddEducation = () => {
    setEducations([...educations, { school: '', degree: '', field: '', graduationDate: '' }]);
  };

  const handleChange = (idx, field, value) => {
    const newEducations = [...educations];
    newEducations[idx][field] = value;
    setEducations(newEducations);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {educations.map((edu, idx) => (
        <div key={idx} className="mb-6 pb-6 border-b last:border-b-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">School/University</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => handleChange(idx, 'school', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(idx, 'degree', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleChange(idx, 'field', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Graduation Date (YYYY)</label>
              <input
                type="text"
                placeholder="2018"
                value={edu.graduationDate}
                onChange={(e) => handleChange(idx, 'graduationDate', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddEducation} className="bg-blue-600 hover:bg-blue-700 px-4 py-2">
        Add Another Education
      </button>
    </div>
  );
}

export default EducationForm;