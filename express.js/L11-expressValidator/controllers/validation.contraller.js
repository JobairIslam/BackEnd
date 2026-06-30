const { body } = require("express-validator");

const validation = [
    body("name")
        .trim()
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 2, max: 50 }).withMessage("Name must be 2-50 characters"),
    body("mail")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email address")
        .normalizeEmail(),
    body("pass")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("dob")
        .notEmpty().withMessage("Date of birth is required")
        .isISO8601().withMessage("Date of birth must be a valid date (YYYY-MM-DD)"),
];

module.exports = validation;
