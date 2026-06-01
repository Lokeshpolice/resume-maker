const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const { validateResume } = require('../middleware/validation');

// Validate resume data
router.post('/validate', validateResume, resumeController.validateResume);

// Generate PDF
router.post('/generate-pdf', resumeController.generatePDF);

// Get resume sample
router.get('/sample', resumeController.getSampleResume);

module.exports = router;