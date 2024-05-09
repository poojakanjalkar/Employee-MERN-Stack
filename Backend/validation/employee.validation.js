const Joi = require("joi");

const employeeObject = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  designation: Joi.string().required(),
  gender: Joi.string().required(),
  courses: Joi.string().required(),
  createDate: Joi.string().required(),
});

module.exports = {
  employeeObject,
};
