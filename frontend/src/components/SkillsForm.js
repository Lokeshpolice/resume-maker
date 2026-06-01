import React, { useState } from 'react';

function SkillsForm() {
  const [skills, setSkills] = useState(['']);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleChange = (idx, value) => {
    const newSkills = [...skills];
    newSkills[idx] = value;
    setSkills(newSkills);
  };

  const handleRemoveSkill = (idx) => {
    setSkills(skills.filter((_, i) => i !== idx));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(idx, e.target.value)}
              placeholder={`Skill ${idx + 1}`}
              className="flex-1 border rounded px-3 py-2"
            />
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveSkill(idx)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddSkill} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4">
        Add Skill
      </button>
    </div>
  );
}

export default SkillsForm;