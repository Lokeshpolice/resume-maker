const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Sample resume data
const getSampleResume = (req, res) => {
  const sampleResume = {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      summary: 'Experienced software developer with 5+ years of expertise in full-stack development'
    },
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Developer',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led team of 5 developers, implemented microservices architecture'
      }
    ],
    education: [
      {
        school: 'University of Example',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        graduationDate: '2018'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS'],
    languages: ['English', 'Spanish']
  };
  res.json(sampleResume);
};

// Validate resume data
const validateResume = (req, res) => {
  // If validation middleware passes, data is valid
  res.json({ 
    valid: true, 
    message: 'Resume data is valid'
  });
};

// Generate PDF from resume data
const generatePDF = async (req, res) => {
  try {
    const { personalInfo, experience, education, skills, template } = req.body;

    // Create PDF document
    const doc = new PDFDocument({
      margin: 50,
      size: 'A4'
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');

    // Pipe to response
    doc.pipe(res);

    // Add content based on template
    addResomeContent(doc, personalInfo, experience, education, skills, template);

    // Finalize PDF
    doc.end();
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
};

// Add resume content to PDF
const addResomeContent = (doc, personalInfo, experience, education, skills, template) => {
  // Header with personal info
  doc.fontSize(24).font('Helvetica-Bold').text(personalInfo.fullName);
  doc.fontSize(10).font('Helvetica').text(`${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}`);
  
  // Summary
  if (personalInfo.summary) {
    doc.moveDown();
    doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
    doc.fontSize(10).font('Helvetica').text(personalInfo.summary);
  }

  // Experience
  if (experience && experience.length > 0) {
    doc.moveDown();
    doc.fontSize(12).font('Helvetica-Bold').text('EXPERIENCE');
    experience.forEach(job => {
      doc.fontSize(11).font('Helvetica-Bold').text(job.position);
      doc.fontSize(10).font('Helvetica').text(`${job.company} | ${job.startDate} - ${job.endDate}`);
      doc.fontSize(10).font('Helvetica').text(job.description);
      doc.moveDown(0.5);
    });
  }

  // Education
  if (education && education.length > 0) {
    doc.moveDown();
    doc.fontSize(12).font('Helvetica-Bold').text('EDUCATION');
    education.forEach(edu => {
      doc.fontSize(11).font('Helvetica-Bold').text(edu.degree);
      doc.fontSize(10).font('Helvetica').text(`${edu.school} | ${edu.graduationDate}`);
      doc.moveDown(0.5);
    });
  }

  // Skills
  if (skills && skills.length > 0) {
    doc.moveDown();
    doc.fontSize(12).font('Helvetica-Bold').text('SKILLS');
    doc.fontSize(10).font('Helvetica').text(skills.join(', '));
  }
};

module.exports = {
  getSampleResume,
  validateResume,
  generatePDF
};