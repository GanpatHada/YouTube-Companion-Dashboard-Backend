const Joi = require("joi");

const noteValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  note: Joi.string().trim().required(),
  tags: Joi.array().items(Joi.string().trim()).default([]),
  userId: Joi.string().trim().required()
});

module.exports = noteValidationSchema;

