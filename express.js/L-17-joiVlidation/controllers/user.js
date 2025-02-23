

const joi = require('joi');


exports.registerUser=(req, res) => {
    try {
       

        // Create user object
        const user = {
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
        };

        return res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.loginUser=(req, res) => {
    try {
       
        const user={
            email: req.body.email,
            pass: req.body.pass
        }

        return res.status(200).json({
            message: "User loged on successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}