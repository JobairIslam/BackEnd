exports.controllLogin=(req, res) => {
        try {
            const { email, pass } = req.body;

            // Hardcoded login credentials for testing (must match validation rules)
            const validEmail = "juba@gmail.com";
            const validPassword = "123456"; // Changed from "1234" to match min: 6

            if (email === validEmail && pass === validPassword) {
                return res.status(200).json({
                    message: "Login successful",
                });
            } else {
                return res.status(401).json({
                    message: "Invalid email or password",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
exports.controllValidation=(req, res) => {
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