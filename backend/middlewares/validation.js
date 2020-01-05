const Joi = require('@hapi/joi');

const schemas = {
  register: Joi.object({
    name: Joi.string()
      .alphanum()
      .min(2)
      .max(32)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(32)
      .required(),
    confirmPassword: Joi.string()
      .required()
      .equal(Joi.ref('password'))
      .messages({
        'any.only': '"password" must match "confirmPassword"'
      })
  }),
  login: Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
  })
};

const check = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property], { abortEarly: false });
  if (!error) {
    return next();
  }
  const errObj = error.details.reduce((obj, err) => {
    obj[err.path[0]] = err.message;
    return obj;
  }, {});
  return res.status(422).json(errObj);
};

module.exports = {
  check,
  schemas
};
