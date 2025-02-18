


const { body, validationResult } = require("express-validator")



exports.runlogin= (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorList=errors.array().map((error)=>
            error.msg)
            return res.status(400).json({ errors: errorList });
        }
        next();
    }
exports.runValidation=(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             const errorList=errors.array().map((error)=>
            error.msg)
            return res.status(400).json({ errors: errorList });
        }
        next();
    }