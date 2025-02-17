const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { body, validationResult } = require("express-validator");

app.get("/test", (req, res) => {
    res.send("test route");
});

// Name, email, pass, dob validation
app.post(
    "/api/register",
    [
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
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    (req, res) => {
        try {
            const { name, email, pass, dob } = req.body;
            const newUser = { name, email, pass, dob };

            res.status(201).json({
                message: "User was created",
                newUser
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
