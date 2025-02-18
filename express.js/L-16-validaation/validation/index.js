const { body } = require("express-validator");

exports.userValidator=[
        // Name Validation
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required")
            .isLength({ min: 5 }).withMessage("Name must have at least 5 characters")
            .isLength({ max: 15 }).withMessage("Name can have max 15 characters"),

        // Email Validation
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email format"),

        // Password Validation
        body("pass")
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

        // Date of Birth (DOB) Validation
        body("dob")
            .notEmpty().withMessage("Date of birth is required")
            .isISO8601().withMessage("Invalid date format, use YYYY-MM-DD")
    ],

    exports.userLoginValidator= [
        // Email Validation
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email format"),

        // Password Validation
        body("pass")
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    ]  