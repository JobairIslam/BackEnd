const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk = require('chalk');

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Home');
});

// Register route
app.post('/api/register', (req, res) => {
    console.log(req.body); // Log request body
    try {
        const { username, email, pass, dob } = req.body;
        if (!username || !email) {
            return res.status(400).json({ message: 'Username and email are required' });
        }
        return res.status(200).json({ newUser: { username, email, pass, dob } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
});


// Handle 404 errors (must be after all other routes)
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue.bgRed.bold(`Server is listening on http://localhost:${port}`));
});