import React from 'react';

function PersonalInfoForm({ data, onChange }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            onChange={onChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={onChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={onChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-2 mt-4">Professional Summary</label>
        <textarea
          name="summary"
          value={data.summary}
          onChange={onChange}
          placeholder="Brief overview of your professional background and goals"
          className="w-full border rounded px-3 py-2 h-24"
        />
      </div>
    </div>
  );
}

export default PersonalInfoForm;