const express = require('express');
const router = express.Router();

// Sample templates
const templates = [
  {
    id: 1,
    name: 'Modern',
    description: 'Clean and modern resume template',
    preview: '/templates/modern.png'
  },
  {
    id: 2,
    name: 'Classic',
    description: 'Traditional professional resume template',
    preview: '/templates/classic.png'
  },
  {
    id: 3,
    name: 'Creative',
    description: 'Creative and colorful resume template',
    preview: '/templates/creative.png'
  },
  {
    id: 4,
    name: 'Minimalist',
    description: 'Simple and elegant minimalist template',
    preview: '/templates/minimalist.png'
  }
];

// Get all templates
router.get('/', (req, res) => {
  res.json(templates);
});

// Get specific template
router.get('/:id', (req, res) => {
  const template = templates.find(t => t.id === parseInt(req.params.id));
  if (!template) {
    return res.status(404).json({ error: 'Template not found' });
  }
  res.json(template);
});

module.exports = router;