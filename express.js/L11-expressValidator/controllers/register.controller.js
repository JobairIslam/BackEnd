const { validationResult } = require("express-validator");

const register = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, mail, pass, dob } = req.body;

    const newUser = {
        name,
        mail,
        pass,
        dob,
    };

    res.status(201).json(newUser);
};

module.exports = register;
