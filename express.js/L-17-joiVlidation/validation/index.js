const joi = require('joi');


exports.runValidation=(req,res,next)=>{
     // Data validation using Joi
        const schema = joi.object({
            name: joi.string().min(3).max(31).required(),
            email: joi.string().email().required(),
            pass: joi.string().min(6).max(10).required()
        });

        // Validate request body
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.details.map(err => err.message) // Extract readable messages
            });
        }
        next()
}
exports.loginValidation=(req,res,next)=>{
     // Data validation using Joi
        // Data validation using Joi
        const schema = joi.object({
            email: joi.string().email().required(),
            pass: joi.string().min(6).max(10).required()
        });

        // Validate request body
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.details.map(err => err.message) // Extract readable messages
            });
        }
        next()
}