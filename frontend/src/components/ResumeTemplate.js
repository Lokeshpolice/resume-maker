import React from 'react';

function ResumeTemplate({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="max-w-2xl mx-auto font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
        <div className="text-sm text-gray-700 mt-2">
          <span>{personalInfo.email}</span>
          {personalInfo.phone && <span> • {personalInfo.phone}</span>}
          {personalInfo.location && <span> • {personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-800 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm text-gray-800">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience[0].company && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-800 mb-3">WORK EXPERIENCE</h2>
          {experience.map((job, idx) => (
            job.company && (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{job.position}</h3>
                    <p className="text-sm text-gray-700">{job.company}</p>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-nowrap">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
                {job.description && (
                  <p className="text-sm text-gray-800 mt-1">{job.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && education[0].school && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-800 mb-3">EDUCATION</h2>
          {education.map((edu, idx) => (
            edu.school && (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{edu.degree}</h3>
                    <p className="text-sm text-gray-700">{edu.school}</p>
                    {edu.field && <p className="text-sm text-gray-700">{edu.field}</p>}
                  </div>
                  {edu.graduationDate && (
                    <p className="text-sm text-gray-700">{edu.graduationDate}</p>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && skills.some(s => s) && (
        <div>
          <h2 className="text-lg font-bold border-b border-gray-800 mb-3">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              skill && (
                <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">
                  {skill}
                </span>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeTemplate;