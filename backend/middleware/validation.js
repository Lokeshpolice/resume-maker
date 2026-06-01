const Joi = require('joi');

// Define resume validation schema
const resumeSchema = Joi.object({
  personalInfo: Joi.object({
    fullName: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9\s\-\+\(\)]+$/).required(),
    location: Joi.string().max(100),
    summary: Joi.string().max(500)
  }).required(),
  
  experience: Joi.array().items(
    Joi.object({
      company: Joi.string().required(),
      position: Joi.string().required(),
      startDate: Joi.string().pattern(/^\d{4}-\d{2}$/).required(),
      endDate: Joi.string().pattern(/^\d{4}-\d{2}$|^Present$/).required(),
      description: Joi.string().max(500)
    })
  ),
  
  education: Joi.array().items(
    Joi.object({
      school: Joi.string().required(),
      degree: Joi.string().required(),
      field: Joi.string(),
      graduationDate: Joi.string().pattern(/^\d{4}$/)
    })
  ),
  
  skills: Joi.array().items(Joi.string()),
  languages: Joi.array().items(Joi.string()),
  template: Joi.number().min(1).max(4)
});

// Validation middleware
const validateResume = (req, res, next) => {
  const { error, value } = resumeSchema.validate(req.body, { abortEarly: false });
  
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    return res.status(400).json({ 
      valid: false,
      errors 
    });
  }
  
  req.validatedData = value;
  next();
};

module.exports = {
  validateResume
};